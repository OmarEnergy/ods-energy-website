# ODS Energy - Sitio Web Corporativo

> **Empresa especializada en energía solar en Alicante**

[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-cyan)](https://tailwindcss.com/)

## 🌟 Descripción

Sitio web profesional de ODS Energy, empresa líder en instalaciones solares en Alicante. La web incluye:

- **9 páginas completas** con navegación fluida
- **Calculadora solar interactiva** integrada
- **Diseño responsive** para todos los dispositivos
- **SEO optimizado** para motores de búsqueda
- **Formularios de contacto** funcionales
- **Blog educativo** sobre energía solar

## 📱 Páginas

| Página | Descripción | Estado |
|--------|-------------|--------|
| 🏠 **Inicio** | Hero, servicios, calculadora, testimonios | ✅ Completada |
| 🏢 **Nosotros** | Historia, equipo, valores | ✅ Completada |
| ⚡ **Servicios** | 7 tipos de instalaciones solares | ✅ Completada |
| 📋 **Detalle Servicios** | Páginas específicas por servicio | ✅ Completada |
| 🏭 **Sectores** | Agrícola, EDAR, Hospital, Municipal | ✅ Completada |
| 💼 **Portfolio** | Proyectos realizados con filtros | ✅ Completada |
| 📰 **Blog** | Artículos educativos sobre energía solar | ✅ Completada |
| 💰 **Subvenciones** | Información sobre ayudas 2025 | ✅ Completada |
| 📞 **Contacto** | Formularios, FAQs, información | ✅ Completada |

## 🚀 Demo en Vivo

- **Previsualización actual**: [https://t27e1qm32p5k.space.minimax.io](https://t27e1qm32p5k.space.minimax.io) ⚠️ *sin imágenes*
- **Repositorio GitHub**: [https://github.com/OmarEnergy/ods-energy-website](https://github.com/OmarEnergy/ods-energy-website)

## 🛠️ Tecnologías

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 4
- **Routing**: React Router (Wouter)
- **UI Components**: Radix UI
- **Package Manager**: pnpm

## ⚠️ Estado Actual: Imágenes Pendientes

**IMPORTANTE**: Las imágenes están pendientes de subir al repositorio. Ver [IMAGES_STATUS.md](./IMAGES_STATUS.md) para instrucciones completas.

### Imágenes Críticas Faltantes:
- `public/hero-solar-panels.jpg` - Hero principal
- `public/hero-home-solar.jpg` - Hero alternativo  
- `public/team-engineers.jpg` - Página Nosotros
- `public/sector-agriculture.jpg` - Página Sectores
- `public/service-autoconsumo-domestico.jpg` - Página Servicios

**Total pendiente**: 95 archivos de imagen

## 📦 Instalación Local

```bash
# Clonar repositorio
git clone https://github.com/OmarEnergy/ods-energy-website.git
cd ods-energy-website

# Instalar dependencias
pnpm install

# Copiar imágenes (desde el proyecto original)
# cp -r /ruta/original/client/public/* public/

# Iniciar servidor de desarrollo
pnpm dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🔨 Scripts Disponibles

```bash
# Servidor de desarrollo
pnpm dev

# Build para producción
pnpm build

# Preview del build
pnpm preview

# Linting
pnpm lint
```

## 📂 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.tsx      # Navegación principal
│   ├── Footer.tsx      # Footer corporativo
│   └── SolarCalculator.tsx # Calculadora interactiva
├── pages/              # Páginas de la aplicación
│   ├── Home.tsx        # Página de inicio
│   ├── About.tsx       # Página nosotros
│   ├── Services.tsx    # Lista de servicios
│   ├── Contact.tsx     # Página de contacto
│   └── ...
├── lib/                # Utilidades y configuraciones
├── hooks/              # Custom hooks
└── App.tsx            # Componente principal con rutas
```

## 🚀 Deploy

El proyecto está configurado con GitHub Actions para deploy automático a GitHub Pages.

Para activar:
1. Ve a Settings → Pages del repositorio
2. Selecciona "GitHub Actions" como fuente
3. Los cambios en `main` se deployarán automáticamente

## 🔧 Características Destacadas

### ✅ Completamente Funcional
- Calculadora solar con 3 tipos de instalación
- Sistema de navegación multi-página
- Formularios de contacto validados
- Responsive design para móviles y tablets
- SEO optimizado con meta tags
- Widget de WhatsApp integrado

### 🎨 Diseño Profesional
- Colores corporativos ODS Energy
- Tipografía moderna y legible
- Animaciones suaves con Tailwind CSS
- Componentes accesibles con Radix UI
- Optimización de imágenes con WebP

### 📊 SEO y Rendimiento
- Estructura semántica HTML5
- Meta tags optimizados para buscadores
- Sitemap.xml y robots.txt
- Lazy loading de imágenes
- Compresión de assets

## 📋 To-Do List

- [ ] ✅ Código React subido a GitHub
- [ ] ✅ Configuración y dependencias
- [ ] ✅ GitHub Actions para deploy
- [ ] ❌ **Subir imágenes (95 archivos pendientes)**
- [ ] 🔄 Activar GitHub Pages
- [ ] 🔄 Configurar dominio personalizado
- [ ] 🔄 Backend para formularios

## 👥 Equipo de Desarrollo

- **Desarrollo**: Sistema automatizado MiniMax Agent
- **Cliente**: ODS Energy (omar.prieto@odsenergy.es)
- **Tecnologías**: React + TypeScript + Tailwind CSS

## 📄 Documentación Adicional

- [Estado de las Imágenes](./IMAGES_STATUS.md) - Lista completa de imágenes pendientes
- [Guía de Instalación Detallada](./docs/installation-guide.md) - Instrucciones paso a paso
- [Configuración de Deploy](./docs/deployment.md) - Configuración de GitHub Pages

## 📞 Contacto

**ODS Energy**  
📧 omar.prieto@odsenergy.es  
🌐 [Sitio web](https://odsenergy.es)

---

*Sitio web desarrollado con React 19 + TypeScript + Tailwind CSS*