# ODS Energy Website

Sitio web profesional para ODS Energy, empresa líder en energía solar fotovoltaica en Alicante.

## 🚀 Características

- **Calculadora Solar Interactiva**: Herramienta avanzada para calcular ahorro y ROI
- **9 Páginas Completas**: Inicio, Servicios, Portfolio, Blog, Contacto y más
- **7 Tipos de Servicios**: Desde autoconsumo doméstico hasta proyectos industriales
- **Sistema de Captura de Leads**: Formularios optimizados para conversión
- **Diseño Responsive**: Optimizado para todos los dispositivos
- **SEO Optimizado**: Meta tags y estructura para máxima visibilidad

## 🌟 Stack Tecnológico

- **React 19** con TypeScript
- **Vite** como build tool
- **Tailwind CSS 4** para estilos
- **Radix UI** para componentes
- **Framer Motion** para animaciones
- **React Router** para navegación

## 📱 Páginas

1. **Inicio** (`/`) - Landing principal
2. **Servicios** (`/servicios`) - Lista de servicios
3. **Detalle de Servicio** (`/servicio/:id`) - Páginas específicas
4. **Nosotros** (`/nosotros`) - Información de la empresa
5. **Sectores** (`/sectores`) - Sectores de aplicación
6. **Portfolio** (`/portfolio`) - Proyectos completados
7. **Blog** (`/blog`) - Artículos educativos
8. **Subvenciones** (`/subvenciones`) - Información de ayudas
9. **Contacto** (`/contacto`) - Formularios y contacto

## ⚡ Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/OmarEnergy/ods-energy-website.git

# Instalar dependencias
cd ods-energy-website
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa del build
npm run preview
```

## 🎯 Servicios Incluidos

1. **Autoconsumo Doméstico** - Desde 3.500€
2. **Autoconsumo Industrial** - Desde 50.000€
3. **Huerto Solar** - Proyectos comunitarios
4. **Bombeo Solar** - Desde 2.800€
5. **Placas Flotantes** - Embalses y lagos
6. **Agrovoltaica** - Desde 8.000€

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de UI base
│   ├── Header.tsx      # Cabecera de navegación
│   ├── Footer.tsx      # Pie de página
│   ├── SolarCalculator.tsx # Calculadora solar
│   └── WhatsAppWidget.tsx   # Widget de WhatsApp
├── pages/              # Páginas de la aplicación
│   ├── Home.tsx        # Página de inicio
│   ├── Services.tsx    # Lista de servicios
│   ├── ServiceDetail.tsx # Detalle de servicio
│   ├── About.tsx       # Sobre nosotros
│   ├── Contact.tsx     # Contacto
│   └── ...
├── lib/                # Utilidades y configuraciones
│   └── utils.ts        # Funciones auxiliares
└── App.tsx             # Componente principal
```

## 🎨 Personalización

### Colores
El proyecto utiliza una paleta de colores personalizada definida en `tailwind.config.js`:
- **Naranja**: `#FF6B35` (primary)
- **Verde**: `#2ECC71` (secondary)
- **Grises**: Sistema completo para texto y backgrounds

### Componentes
Todos los componentes están construidos con **Radix UI** para consistencia y accesibilidad.

## 📦 Comandos Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Vista previa del build
- `npm run lint` - Linting con ESLint
- `npm run format` - Formateo con Prettier

## 🚀 Deploy

La aplicación está configurada para deploy en cualquier hosting estático:

```bash
# Generar build
npm run build

# La carpeta 'dist' contiene los archivos estáticos
# Sube el contenido a tu servidor web
```

### Deploy en Netlify
1. Conecta el repositorio a Netlify
2. Configura el comando build: `npm run build`
3. Configura la carpeta de publish: `dist`
4. ¡Listo!

### Deploy en Vercel
1. Importa el repositorio en Vercel
2. Configura automáticamente
3. ¡Listo!

## 📞 Contacto

- **Teléfono**: +34 900 000 000
- **Email**: info@odsenergy.es
- **Ubicación**: Alicante, España
- **Horario**: L-V 9:00-18:00, S 9:00-14:00

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para detalles.

---

**ODS Energy** - Tu futuro energético sostenible 🌱