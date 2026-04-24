# Portfolio Profesional - Lucas Nahuel Espindola

Este proyecto es el portfolio profesional de Lucas Nahuel Espindola, estructurado como una aplicación estática de alto rendimiento optimizada para **GitHub Pages**.

## Stack Tecnológico
- **React 18 + Vite**: Para un bundling ultra rápido y un entorno de desarrollo eficiente.
- **TypeScript**: Garantizando la robustez y calidad del código.
- **Tailwind CSS v4**: Estilizado moderno, minimalista y responsivo.
- **Framer Motion**: Animaciones fluidas y scroll reveals profesionales.
- **Lucide React**: Iconografía técnica y moderna.

## Estructura de Carpetas
- `/src/components`: Componentes reutilizables de la interfaz.
- `/src/lib/utils.ts`: Utilidades para manejo dinámico de clases Tailwind.
- `/public`: Activos estáticos públicos.
- `vite.config.ts`: Configurado para exportación estática perfecta.

## Pasos para el Desarrollo

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Ejecutar entorno de desarrollo:
   ```bash
   npm run dev
   ```

## Despliegue en GitHub Pages (PASOS CLAVE)

El proyecto está configurado para generar una carpeta `/dist` lista para ser subida.

### 1. Modificar el Base Path
Si vas a deployar en `https://<tu-usuario>.github.io/`, deja `base: './'` en `vite.config.ts`.
Si vas a deployar en una subcarpeta (ej. `https://<tu-usuario>.github.io/portfolio/`), cambia la propiedad `base` en `vite.config.ts` a:
```javascript
base: '/portfolio/',
```

### 2. Generar el Build
Ejecuta el siguiente comando para compilar el proyecto:
```bash
npm run build
```

### 3. Deploy
Sube el contenido de la carpeta `/dist` a tu repositorio de GitHub, específicamente a la rama `gh-pages` o a la carpeta `/docs` en la rama principal.

En la configuración de tu repositorio en GitHub:
1. Ve a **Settings** > **Pages**.
2. En **Build and deployment**, selecciona la fuente (rama `gh-pages` o root/docs).
3. ¡Listo! Tu sitio estará online en pocos segundos.

## SEO & Optimización
- Incluye Meta Tags básicos en `index.html`.
- Imágenes optimizadas vía Unsplash.
- Diseño accesible con contraste adecuado (Dark Mode).

---
Creado con ❤️ por **Lucas Nahuel Espindola**
