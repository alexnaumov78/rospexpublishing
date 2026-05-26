"""
/api/encrypt.py — Rospex Publishing
Internal PDF encryption endpoint (Layer 3).
Called only by /api/webhook.js — not exposed publicly.

Flow:
  POST /api/encrypt
  Headers: X-Internal-Secret, X-User-Password, X-Owner-Password,
           X-Staging-Url, X-Destination-Path
  Body: (empty — PDF is fetched from staging blob via X-Staging-Url)
  Response: JSON { "url": "<final delivery blob URL>" }
"""

from http.server import BaseHTTPRequestHandler
import os, io, json, traceback
import pikepdf
import requests


BLOB_API = "https://blob.vercel-storage.com"


def encrypt_pdf(pdf_bytes: bytes, user_password: str, owner_password: str) -> bytes:
    in_buf  = io.BytesIO(pdf_bytes)
    out_buf = io.BytesIO()
    with pikepdf.open(in_buf) as pdf:
        pdf.save(
            out_buf,
            encryption=pikepdf.Encryption(
                user=user_password,
                owner=owner_password,
                R=6,  # AES-256
                allow=pikepdf.Permissions(
                    print_highres=True,
                    print_lowres=True,
                    extract=False,
                    modify_annotation=False,
                    modify_assembly=False,
                    modify_form=False,
                    modify_other=False,
                )
            )
        )
    return out_buf.getvalue()


def fetch_blob(url: str, token: str) -> bytes:
    resp = requests.get(
        url,
        headers={"Authorization": f"Bearer {token}"},
        timeout=30
    )
    resp.raise_for_status()
    return resp.content


def upload_blob(destination_path: str, data: bytes, token: str) -> str:
    """Upload to Vercel Blob. Returns the public URL."""
    resp = requests.put(
        f"{BLOB_API}/{destination_path}",
        data=data,
        headers={
            "Authorization":       f"Bearer {token}",
            "Content-Type":        "application/pdf",
            "x-content-type":      "application/pdf",
            "x-access":            "public",
            "x-add-random-suffix": "0",
        },
        timeout=60,
    )
    resp.raise_for_status()
    return resp.json()["url"]


def delete_blob(url: str, token: str):
    """Best-effort cleanup of staging blob."""
    try:
        requests.delete(
            f"{BLOB_API}?url={url}",
            headers={"Authorization": f"Bearer {token}"},
            timeout=10
        )
    except Exception:
        pass  # Non-fatal — staging blob expiry handles it eventually


class handler(BaseHTTPRequestHandler):

    def do_POST(self):
        # ── Read env vars ──────────────────────────────────────────────────
        internal_secret = os.environ.get("ENCRYPT_INTERNAL_SECRET", "")
        blob_token      = os.environ.get("BLOB_READ_WRITE_TOKEN", "")

        # ── Validate internal secret ───────────────────────────────────────
        provided_secret = self.headers.get("X-Internal-Secret", "")
        if not internal_secret or provided_secret != internal_secret:
            self._respond(401, {"error": "Unauthorized"})
            return

        # ── Read request headers ───────────────────────────────────────────
        user_password    = self.headers.get("X-User-Password", "")
        owner_password   = self.headers.get("X-Owner-Password", "")
        staging_url      = self.headers.get("X-Staging-Url", "")
        destination_path = self.headers.get("X-Destination-Path", "")

        if not all([user_password, owner_password, staging_url, destination_path]):
            self._respond(400, {"error": "Missing required headers"})
            return

        try:
            # 1. Download watermarked PDF from staging blob
            pdf_bytes = fetch_blob(staging_url, blob_token)

            # 2. Encrypt (Layer 3 — AES-256)
            encrypted_bytes = encrypt_pdf(pdf_bytes, user_password, owner_password)

            # 3. Upload encrypted PDF to final delivery path
            final_url = upload_blob(destination_path, encrypted_bytes, blob_token)

            # 4. Clean up staging blob (best-effort)
            delete_blob(staging_url, blob_token)

            self._respond(200, {"url": final_url})

        except Exception as e:
            traceback.print_exc()
            self._respond(500, {"error": str(e)})

    def _respond(self, status: int, body: dict):
        payload = json.dumps(body).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

    def log_message(self, format, *args):
        pass  # Vercel captures stdout separately
