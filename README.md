# FROPOREO - Mundial 2026 🌍⚽

## Requisitos
- Node.js instalado (https://nodejs.org)

## Instalación

```bash
# 1. Entrar a la carpeta
cd froporeo-app

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor
npm start
```

## Acceso

Abrí el navegador en:

| URL | Descripción |
|-----|-------------|
| http://localhost:3000 | Auto-detecta mobile o desktop |
| http://localhost:3000/mobile | Vista móvil |
| http://localhost:3000/desktop | Vista escritorio |

## Estructura

```
froporeo-app/
├── server.js          ← Servidor Express
├── package.json       ← Dependencias
├── README.md
└── public/
    ├── index.html     ← HTML principal
    ├── css/
    │   └── style.css  ← Todos los estilos
    ├── js/
    │   └── app.js     ← Toda la lógica (partidos, grupos, prode)
    └── img/
        └── ball.png   ← Pelota oficial sin fondo
```
