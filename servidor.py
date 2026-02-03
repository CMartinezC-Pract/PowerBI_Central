#!/usr/bin/env python3
"""
Servidor HTTP simple para PowerBI Central
Ejecuta este archivo para levantar un servidor local en el puerto 8000
"""
import http.server
import socketserver
import os

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Permitir iframes y recursos externos
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('X-Frame-Options', 'SAMEORIGIN')
        super().end_headers()

# Cambiar al directorio donde están los archivos HTML
os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = MyHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"🚀 Servidor iniciado en http://localhost:{PORT}")
    print(f"📂 Sirviendo archivos desde: {os.getcwd()}")
    print(f"✨ Abre tu navegador y ve a: http://localhost:{PORT}/index.html")
    print("\nPresiona Ctrl+C para detener el servidor")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n👋 Servidor detenido")
