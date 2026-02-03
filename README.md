# PowerBI Central - Portal

## 🔧 Problema Resuelto

El error "Cannot GET /inicio.html" ocurría porque:
1. Los archivos HTML estaban todos juntos en un solo archivo
2. Intentabas abrirlos directamente desde el sistema de archivos sin un servidor

## 📁 Estructura de Archivos

```
powerbi-central/
├── index.html          (página principal con el layout)
├── inicio.html         (página de bienvenida)
├── dashboards.html     (catálogo de dashboards)
├── reporte-error.html  (formulario de reporte)
├── css/
│   └── site.css        (estilos personalizados)
├── servidor.py         (servidor HTTP simple)
└── README.md          (este archivo)
```

## 🚀 Cómo Ejecutar

### Opción 1: Con Python (Recomendado)

1. Abre una terminal/CMD en la carpeta donde están los archivos
2. Ejecuta:
   ```bash
   python servidor.py
   ```
3. Abre tu navegador en: http://localhost:8000/index.html

### Opción 2: Con Python (alternativa simple)

```bash
python -m http.server 8000
```

Luego abre: http://localhost:8000/index.html

### Opción 3: Con Node.js (si tienes instalado)

```bash
npx http-server -p 8000
```

### Opción 4: Con Live Server (VS Code)

Si usas Visual Studio Code:
1. Instala la extensión "Live Server"
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

## ✅ Verificación

Una vez iniciado el servidor, deberías ver:
- ✅ Navegación funcional entre páginas
- ✅ El iframe cargando correctamente
- ✅ Todos los estilos aplicados
- ✅ Enlaces funcionando correctamente

## 📝 Notas Importantes

- **NO** abras los archivos directamente con doble clic (file://)
- **SÍ** usa siempre un servidor HTTP local
- Los iframes requieren un servidor para funcionar correctamente
- El enlace de Power BI se abre en una nueva pestaña

## 🎨 Personalización

Para personalizar los estilos, edita: `css/site.css`

## ❓ ¿Problemas?

Si el puerto 8000 está ocupado, cambia el número en `servidor.py` o usa otro puerto:
```bash
python -m http.server 8080
```

¡Listo! Tu portal PowerBI Central debería funcionar perfectamente ahora. 🎉
