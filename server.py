import http.server
import socketserver
import os

PORT = int(os.environ.get("PORT", 3000))

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        print(f"AutoAgent Server running on port {PORT}")
        httpd.serve_forever()
