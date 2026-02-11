

```markdown
# 📊 Power BI Central

Plataforma web para la gestión y visualización centralizada de dashboards de Power BI mediante un sistema de folios dinámicos.

El proyecto permite:
- Registrar dashboards
- Consultarlos por folio
- Visualizarlos en un visor dedicado
- Reportar problemas
- Administrar todo desde Google Sheets como base de datos

---

## 🚀 Tecnologías Utilizadas

- HTML5
- CSS3 (Bootstrap 5)
- JavaScript (Vanilla JS)
- Power BI Embed
- Google Apps Script (Backend API)
- Google Sheets (Base de datos)
- GitHub (Control de versiones)
- Vercel (Hosting)

---

## 🏗 Arquitectura del Proyecto

```

Usuario → Vercel (Frontend)

↓

Google Apps Script (API REST)

↓

Google Sheets (Base de datos)

↓

Power BI (Dashboards embebidos)

```

---

## 📂 Estructura del Proyecto

```

/
│
├── index.html                # Página principal
├── visor-dashboard.html      # Página para visualizar dashboard por folio
├── reporte-error.html        # Página para reportar errores
├── assets/                   # Recursos adicionales (si existen)
└── README.md

```

---

## ⚙️ ¿Cómo Funciona?

### 1️⃣ Registro de Dashboards
Los dashboards se almacenan en una hoja de cálculo de Google Sheets con los siguientes campos:

- Folio
- Nombre
- URL del Dashboard
- Estado
- Fecha de registro

---

### 2️⃣ API con Google Apps Script

Se utiliza un Web App de Google Apps Script que:

- Recibe solicitudes GET y POST
- Consulta la hoja de cálculo
- Devuelve datos en formato JSON

Ejemplo de endpoint:

```

?action=getDashboardByFolio&folio=DB-001

```

---

### 3️⃣ Visualización del Dashboard

Cuando el usuario accede a:

```

visor-dashboard.html?folio=DB-001

```

El sistema:

1. Obtiene el parámetro `folio`
2. Consulta la API
3. Recibe la URL del dashboard
4. La carga dinámicamente en un `<iframe>`

---

## 🔐 Seguridad

Actualmente el sistema:

- No tiene autenticación integrada
- Depende del tipo de enlace de Power BI

### Opciones de seguridad:

- 🔓 Publish to Web (público)
- 🔐 Secure Embed con autenticación Azure AD (recomendado para datos privados)
- 🔑 Power BI Embedded con token

---

## 🌐 Despliegue

El proyecto está desplegado en:

**Vercel**
```

[https://power-bi-central-nine.vercel.app/](https://power-bi-central-nine.vercel.app/)

```

Cada vez que se hace push a GitHub, Vercel despliega automáticamente la nueva versión.

---

## 🛠 Cómo Ejecutarlo Localmente

1. Clonar el repositorio:

```

git clone [https://github.com/CMartinezC-Pract/PowerBI_Central.git](https://github.com/CMartinezC-Pract/PowerBI_Central.git)

```

2. Abrir el archivo `index.html` en el navegador.

No requiere instalación de dependencias.

---

## 📌 Requisitos Importantes

Para que los dashboards funcionen correctamente:

- El enlace debe ser tipo `Publish to Web`
  o
- Debe configurarse autenticación adecuada en Power BI

Si se usa un enlace normal de `app.powerbi.com`, el iframe mostrará:

```

app.powerbi.com rechazó la conexión

```

---

## 📈 Futuras Mejoras

- Sistema de login con Microsoft
- Control de acceso por roles
- Registro de auditoría
- Panel administrativo protegido
- Token dinámico para Power BI Embedded

---

## 👨‍💻 Autor

Proyecto desarrollado como sistema de centralización y visualización de dashboards Power BI.

---

## 📄 Licencia

Proyecto de uso empresarial interno.
```

---

