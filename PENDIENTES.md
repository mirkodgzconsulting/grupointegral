# PENDIENTES — Grupo Integral

> Documento de referencia para el desarrollo de grupointegral.it  
> Actualizado: mayo 2026

---

## ✅ YA HECHO

### Páginas (12 en total)
- [x] `/` — Homepage completa (12 secciones)
- [x] `/sobre-nosotros`
- [x] `/aliados` — página B2B
- [x] `/servicios/master-caf`
- [x] `/servicios/programa-gol`
- [x] `/servicios/test-italiano`
- [x] `/servicios/consultoria-migratoria`
- [x] `/servicios/partita-iva`
- [x] `/servicios/orientacion-laboral`
- [x] `/privacidad`
- [x] `/aviso-legal`
- [x] `/cookies`

### Técnico
- [x] Astro 4 + Tailwind CSS 3 configurado
- [x] Design system completo (colores, tipografía, tokens)
- [x] SEO: meta tags, og:image, Schema.org LocalBusiness, lang=es
- [x] Sitemap automático (`/sitemap-index.xml`)
- [x] Navbar sticky + hamburger mobile
- [x] Botón flotante WhatsApp (mobile)
- [x] Formulario de contacto placeholder (listo para GHL)
- [x] Carrusel de testimonios (7 cards, autoplay, swipe)
- [x] Widget SuperChat integrado
- [x] Deploy config para Vercel (`vercel.json`)
- [x] Repositorio GitHub: github.com/mirkodgzconsulting/grupointegral

---

## 🔴 URGENTE — Antes del launch

| Tarea | Detalle |
|---|---|
| **Logo SVG** | Reemplazar el logo placeholder en `Navbar.astro` y `Footer.astro` |
| **Foto Hero** | Reemplazar el bloque placeholder en `Hero.astro` |
| **Testimonios reales** | Reemplazar los 7 placeholder en `Testimonios.astro` |
| **P.IVA** | Completar el número en `Footer.astro` (línea copyright) y en `aviso-legal.astro` |
| **Número WhatsApp** | Ya está: +39 351 342 7777 ✅ |
| **Deploy en Vercel** | Importar repo en vercel.com → deploy automático |
| **Dominio grupointegral.it** | Apuntar DNS a Vercel desde el registrador |
| **Cookie banner** | Obligatorio por ley italiana/RGPD — instalar solución (ej. Cookiebot, Iubenda) |

---

## 🟡 PRÓXIMA SEMANA

| Tarea | Detalle |
|---|---|
| **GoHighLevel form** | Reemplazar el form placeholder en `Contacto.astro` (div `id="ghl-form-placeholder"`) con el embed/iframe de GHL |
| **Google Analytics 4** | Añadir el snippet GA4 en `Layout.astro` |
| **Google Search Console** | Verificar dominio + enviar sitemap: `https://grupointegral.it/sitemap-index.xml` |
| **Google My Business** | Crear y verificar ficha local para SEO en Milano |
| **Fotos reales** | Reemplazar todos los placeholders con fotos reales del equipo/oficina |
| **Links aliados** | Verificar que `anasmilano.com` y demás URLs de aliados estén activas en `Aliados.astro` |
| **Página 404** | Crear `src/pages/404.astro` personalizada |

---

## 🟢 PRÓXIMO MES

| Tarea | Detalle |
|---|---|
| **Blog** | Crear sección `/blog` con artículos SEO (permesso di soggiorno, trabajar en Italia, etc.) |
| **Página de servicio: emprendimiento** | `/servicios/emprendimiento` — actualmente solo existe como card en homepage |
| **Página de servicio: business plan** | `/servicios/business-plan` |
| **Formularios por servicio** | Formularios específicos para MasterCAF, GOL, test italiano (a través de GHL) |
| **Chat en vivo** | SuperChat ya integrado — activar y configurar en panel de SuperChat |
| **Redes sociales** | Actualizar links de Instagram, Facebook, LinkedIn, YouTube en `Footer.astro` |
| **Imágenes optimizadas** | Usar componente `<Image>` de Astro para optimización automática |

---

## 📋 NOTAS TÉCNICAS

```
Dev server:     npm run dev  →  http://localhost:4321
Build:          npm run build
Preview build:  npm run preview

Sitemap URL:    https://grupointegral.it/sitemap-index.xml
WhatsApp link:  https://wa.me/393513427777
Email:          info@grupointegral.it

Archivos clave:
  Layout base:     src/layouts/Layout.astro
  Formulario:      src/components/Contacto.astro  (buscar id="ghl-form-placeholder")
  Testimonios:     src/components/Testimonios.astro
  Navbar/Logo:     src/components/Navbar.astro
  Footer/Logo:     src/components/Footer.astro
  Colores/Fuentes: tailwind.config.mjs + src/styles/global.css
```
