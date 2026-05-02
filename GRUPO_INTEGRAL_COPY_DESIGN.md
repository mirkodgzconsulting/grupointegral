# GRUPO INTEGRAL — COPY COMPLETO + DESIGN SYSTEM
> Archivo de referencia para el proyecto grupointegral.it  
> Stack: Astro + Tailwind CSS | Dominio: grupointegral.it  
> Versión: 1.0 | Idioma principal: Español

---

## 🎨 DESIGN SYSTEM

### Colores
```css
:root {
  --color-primary:     #0A2540;  /* Azul Noche — títulos, navbar, footer */
  --color-accent:      #635BFF;  /* Índigo Acción — CTAs, botones primarios */
  --color-success:     #0B8A5F;  /* Verde Esmeralda — checks, WhatsApp, éxito */
  --color-bg:          #FFFFFF;  /* Blanco Puro — fondo general */
  --color-bg-section:  #F6F9FC;  /* Gris Stripe — fondos de sección alternos */
  --color-bg-accent:   #EEF2FF;  /* Índigo Suave — badges, destacados */
  --color-text-body:   #425466;  /* Slate — cuerpo de texto */
  --color-border:      #E6E6EF;  /* Borde neutro — separadores, cards */
}
```

### Tipografía
```
Títulos:  Plus Jakarta Sans — weights 600, 700
Cuerpo:   Inter — weights 400, 500
Fuente:   Google Fonts / @fontsource

Escala tipográfica:
  H1:     40px / line-height 1.15 / weight 700
  H2:     28px / line-height 1.25 / weight 700
  H3:     20px / line-height 1.35 / weight 600
  Body:   16px / line-height 1.7  / weight 400
  Small:  14px / line-height 1.6  / weight 400
  Label:  12px / line-height 1.4  / weight 500 / uppercase + letter-spacing
```

### Principios de diseño
- Mobile-first absoluto
- Espaciado generoso — secciones con padding 80px vertical en desktop, 48px en mobile
- Botón primario: fondo #635BFF, texto blanco, border-radius 6px, padding 12px 24px
- Botón secundario: borde 1.5px #E6E6EF, texto #0A2540, fondo transparente
- Cards: fondo blanco, borde #E6E6EF, border-radius 12px, sombra sutil
- Referencia estética: Stripe.com

---

## 🌐 SEO — META TAGS

### Homepage (index.astro)
```
title: "Grupo Integral | Servicios para Inmigrantes en Italia"
description: "Formación acreditada, asesoría migratoria, servicios fiscales y apoyo 
para emprender en Italia. Atención en español en Lombardía y online. Consulta gratuita."
keywords: servicios inmigrantes Italia, asesoría migratoria Lombardía, curso operador 
fiscal Italia, MasterCAF Milano, programa GOL Lombardía, test italiano A2 B1 Milano, 
partita IVA extranjeros Italia
canonical: https://grupointegral.it
og:title: "Grupo Integral | Tu aliado en Italia"
og:description: "Todo lo que necesitas para crecer en Italia, en un solo lugar."
og:image: /og-image.jpg
lang: es
```

### Schema.org LocalBusiness
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Grupo Integral",
  "url": "https://grupointegral.it",
  "description": "Plataforma de servicios para la comunidad latina en Italia",
  "areaServed": "Lombardia, Italia",
  "availableLanguage": ["Spanish", "Italian"],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Lombardia",
    "addressCountry": "IT"
  }
}
```

---

## ✍️ COPY COMPLETO POR SECCIÓN

---

### SECCIÓN 1 — NAVBAR

```
Logo: Grupo Integral [SVG]

Links:
- Servicios
- Formación
- Sobre nosotros
- Aliados
- Contacto

CTA navbar: Hablar con un asesor → (botón índigo, pequeño)

Mobile: hamburger menu con las mismas opciones
Sticky: sí, con sombra sutil al hacer scroll
```

---

### SECCIÓN 2 — HERO

**Badge (pill pequeña sobre el H1):**
> Lombardía · Milán · Online

**H1:**
> Construye tu futuro en Italia con el respaldo que mereces

**Subtítulo (16px, color slate):**
> En Grupo Integral reunimos los mejores servicios para que la comunidad latina en Italia pueda estudiar, regularizarse, trabajar y emprender — sin perderse en trámites ni burocracia, y siempre con atención en español.

**CTA primario (botón índigo):**
> Quiero información gratuita

**CTA secundario (botón outline):**
> Hablar por WhatsApp

**Trust indicators debajo de los botones:**
> ✓ Sin compromiso  ·  ✓ Respuesta en menos de 24h  ·  ✓ Atención en español

**Social proof (pequeño, debajo):**
> Más de 500 personas de la comunidad latina ya confían en nosotros

**Imagen hero sugerida:**
> Foto profesional de una persona latina en contexto urbano italiano (Milano), 
> o ilustración geométrica abstracta en tonos índigo/azul noche

---

### SECCIÓN 3 — QUIÉNES SOMOS

**Label (uppercase, pequeño):**
> Quiénes somos

**H2:**
> Nacimos para hacer más fácil tu vida en Italia

**Párrafo 1:**
> Grupo Integral es una plataforma especializada en conectar a la comunidad latina en Italia con los servicios que realmente necesita. Sabemos lo difícil que puede ser navegar el sistema italiano solo: los formularios, los plazos, el idioma, la burocracia. Por eso existimos.

**Párrafo 2:**
> Trabajamos con una red de aliados estratégicos acreditados — entre ellos ANAS Milano, Soporte Integrado y Milano Studio Migratorio — para ofrecerte soluciones reales, verificadas y con acompañamiento en español.

**Párrafo 3:**
> No somos una agencia más. Somos tu punto de referencia en Italia: un lugar donde encontrarás orientación honesta, servicios confiables y personas que entienden tu situación porque han vivido algo similar.

**3 valores en cards pequeñas:**

Card 1:
> **Transparencia**
> Te decimos exactamente qué puedes esperar, sin promesas vacías ni costos ocultos.

Card 2:
> **Cercanía**
> Atención personalizada en español, con personas reales que conocen el sistema italiano.

Card 3:
> **Resultados**
> Cada servicio que ofrecemos tiene un propósito claro: mejorar tu situación concreta en Italia.

---

### SECCIÓN 4 — POR QUÉ CONFIAR EN NOSOTROS

**Label:**
> Por qué elegirnos

**H2:**
> Tu proceso en Italia, con respaldo profesional

**6 items en grid (icono + título + descripción corta):**

Item 1:
> **Atención en español e italiano**
> Comunicamos en tu idioma. Sin malentendidos, sin traducciones a medias.

Item 2:
> **Acompañamiento personalizado**
> No eres un número. Cada caso es distinto y lo tratamos como tal.

Item 3:
> **Red de aliados acreditados**
> Trabajamos solo con entidades reconocidas y programas oficiales en Italia.

Item 4:
> **Formación certificada**
> Los cursos que ofrecemos son válidos ante instituciones italianas y europeas.

Item 5:
> **Todo en un solo lugar**
> Migración, fiscalidad, formación y emprendimiento — sin ir de ventanilla en ventanilla.

Item 6:
> **Presencia física en Lombardía**
> Puedes venir a vernos. Tenemos oficina en Milán y atendemos también online.

---

### SECCIÓN 5 — SERVICIO DESTACADO: MASTERCAF

**Label (badge índigo):**
> Formación acreditada · Próximo inicio: 27 de junio

**H2:**
> Conviértete en Operador Fiscal en Italia

**Subtítulo:**
> El curso MasterCAF te prepara para trabajar en centros de asistencia fiscal (CAF) en Italia — uno de los sectores con mayor demanda laboral para personas con perfil administrativo.

**Descripción larga:**
> Italia cuenta con miles de CAF distribuidos por todo el país que necesitan operadores capacitados para atender a la ciudadanía en declaraciones de renta, bonificaciones, subsidios y trámites fiscales. Con la formación correcta, puedes acceder a este mercado laboral con estabilidad real.
> 
> Nuestro programa MasterCAF está diseñado específicamente para personas que quieren cambiar de rubro o mejorar sus ingresos mediante una certificación reconocida. El curso combina teoría, práctica y simulaciones reales del trabajo en un CAF.

**Lo que aprenderás (lista):**
> - Fiscalidad italiana básica y avanzada
> - Declaración de renta (730, ISEE, Unico)
> - Gestión de bonificaciones y subsidios del Estado
> - Uso de software fiscal profesional
> - Atención al ciudadano en contexto fiscal
> - Normativa vigente actualizada

**Por qué este curso:**

4 pills/badges:
> ✓ Alta demanda laboral en toda Italia
> ✓ Posibilidad de trabajar en cualquier CAF del país
> ✓ Certificación reconocida institucionalmente
> ✓ Mejores oportunidades salariales

**Precio box (card destacada):**
```
Precio especial de lanzamiento

Antes: ~~1.300 €~~
Ahora: 1.000 €

📅 Inicio: 27 de junio
⚠️ Cupos muy limitados — quedan [N] plazas disponibles

[ BOTÓN ] → Reservar mi plaza ahora
[ LINK ]  → Solicitar más información primero
```

**Garantía (pequeño, debajo del precio):**
> Si en los primeros 7 días el curso no cumple tus expectativas, te devolvemos el importe. Sin preguntas.

---

### SECCIÓN 6 — FORMACIÓN GRATUITA (PROGRAMA GOL)

**Label:**
> Programa GOL · Región Lombardía

**H2:**
> ¿Sabías que puedes estudiar gratis en Italia?

**Subtítulo:**
> Si resides en Lombardía, tienes tus documentos en regla y estás buscando trabajo, puedes acceder a formación completamente gratuita a través del Programa GOL — una iniciativa oficial de la Región Lombardía.

**Descripción:**
> El Programa GOL (Garanzia di Occupabilità dei Lavoratori) es uno de los planes más importantes de reinserción laboral en Italia, financiado con fondos europeos. Ofrece cursos de formación profesional gratuitos para personas en situación de desempleo que quieran mejorar sus competencias y acceder al mercado laboral italiano.
>
> Como socios acreditados del programa, en Grupo Integral te ayudamos a verificar si cumples los requisitos, a inscribirte correctamente y a elegir el curso que mejor se adapta a tu perfil y objetivos.

**Requisitos (checklist visual):**
> ✓ Permesso di soggiorno vigente
> ✓ Tessera sanitaria activa
> ✓ Documento de identidad válido
> ✓ Residencia en Lombardía
> ✓ Situación de desempleo o búsqueda activa de trabajo

**Cursos disponibles (ejemplos, actualizar según oferta real):**
> - Operador administrativo
> - Asistente a la persona (badante)
> - Operador logístico
> - Auxiliar de cocina y restauración
> - Competencias digitales básicas

**CTA:**
> [ BOTÓN ] → Verificar si cumplo los requisitos
> Consulta gratuita y sin compromiso. Te respondemos en 24 horas.

---

### SECCIÓN 7 — OTROS SERVICIOS

**Label:**
> Nuestros servicios

**H2:**
> Soluciones completas para tu vida en Italia

**Subtítulo:**
> Más allá de la formación, te acompañamos en todos los trámites y decisiones importantes para que tu proyecto de vida en Italia avance con seguridad.

**6 service cards:**

---

Card 1: Test Oficial de Italiano
```
Icono: 📚 (o SVG libro)
Título: Test oficial de italiano
Descripción: Exámenes A2 y B1 reconocidos por el Ministerio del Interior italiano, 
válidos para solicitar la ciudadanía y el permesso di soggiorno de largo periodo.
Detalle: Disponibles todos los sábados. Grupos reducidos. Preparación incluida.
CTA: Reservar mi examen →
```

Card 2: Consultoría Migratoria
```
Icono: 📄 (o SVG documento)
Título: Consultoría migratoria
Descripción: Te ayudamos con la regularización, renovación y conversión de tu 
permesso di soggiorno. También asesoría para reagrupación familiar y ciudadanía.
Detalle: Sesión de 60 minutos con un especialista. Presencial u online.
CTA: Consultar mi caso →
```

Card 3: Servicios Fiscales y Contables
```
Icono: 💼 (o SVG calculadora)
Título: Partita IVA y servicios fiscales
Descripción: Apertura y cierre de Partita IVA, declaración de renta, asesoría 
fiscal básica para autónomos y trabajadores por cuenta propia en Italia.
Detalle: Explicamos todo en español, paso a paso.
CTA: Hablar con un asesor →
```

Card 4: Asesoría para Emprendedores
```
Icono: 🚀 (o SVG cohete)
Título: Quiero emprender en Italia
Descripción: Te ayudamos a evaluar tu idea, estructurar tu modelo de negocio y 
dar los primeros pasos legales para emprender correctamente en Italia.
Detalle: Ideal para quienes quieren abrir un negocio propio siendo extranjeros.
CTA: Explorar opciones →
```

Card 5: Business Plan
```
Icono: 📊 (o SVG gráfico)
Título: Business Plan profesional
Descripción: Elaboramos tu plan de negocio con proyecciones financieras, análisis 
de mercado y estructura estratégica — listo para presentar a bancos o inversores.
Detalle: Entrega en 7-10 días hábiles. Incluye revisión y ajustes.
CTA: Solicitar presupuesto →
```

Card 6: Orientación Laboral
```
Icono: 🤝 (o SVG personas)
Título: Orientación laboral
Descripción: Te ayudamos a entender el mercado laboral italiano, revisar tu CV, 
prepararte para entrevistas y conectarte con oportunidades reales en Lombardía.
Detalle: Sesión gratuita de orientación inicial.
CTA: Agendar sesión →
```

---

### SECCIÓN 8 — ALIADOS ESTRATÉGICOS

**Label:**
> Nuestra red

**H2:**
> Trabajamos con entidades acreditadas

**Subtítulo:**
> Grupo Integral no trabaja solo. Hemos construido una red de aliados estratégicos 
> reconocidos en Italia para garantizarte servicios de calidad verificada.

**3 aliados (logos + descripción):**

Aliado 1:
```
Logo: ANAS Milano
Descripción: Associazione Nazionale oltre le frontiere — una de las organizaciones 
de referencia para la comunidad latina en Milán. Servicios migratorios y sociales 
con décadas de experiencia en el territorio lombardo.
Web: anasmilano.com
```

Aliado 2:
```
Logo: Soporte Integrado
Descripción: Organización especializada en acompañamiento integral a personas 
inmigrantes en Italia. Asesoría legal, social y laboral para casos complejos.
```

Aliado 3:
```
Logo: Milano Studio Migratorio
Descripción: Centro especializado en servicios migratorios y documentación 
para extranjeros residentes en la zona metropolitana de Milán.
```

**CTA para aliados (B2B):**
> ¿Tu empresa quiere llegar a más clientes de la comunidad latina en Italia?
> [ BOTÓN OUTLINE ] → Ser aliado estratégico

---

### SECCIÓN 9 — TESTIMONIOS

**Label:**
> Lo que dicen nuestros clientes

**H2:**
> Personas reales, resultados reales

**3 testimonios (reemplazar con reales cuando estén disponibles):**

Testimonio 1:
```
"Llegué a Italia sin saber por dónde empezar con mi permesso di soggiorno. 
Grupo Integral me explicó todo en español, me acompañaron en cada paso 
y en tres semanas tenía todo resuelto. No sé qué hubiera hecho sin ellos."
— María L., Colombia · Milán
Servicio: Consultoría migratoria
```

Testimonio 2:
```
"Hice el curso MasterCAF y fue la mejor inversión que pude hacer desde que 
llegué a Italia. A los dos meses de terminar ya estaba trabajando en un CAF 
en Sesto San Giovanni. El contenido es muy completo y los profesores explican 
muy bien, incluso para quienes no tenemos base en fiscalidad."
— Carlos M., Venezuela · Milano Area
Servicio: Curso MasterCAF
```

Testimonio 3:
```
"No sabía que podía estudiar gratis hasta que Grupo Integral me explicó el 
Programa GOL. Cumplía todos los requisitos y ellos me ayudaron a inscribirme 
sin complicaciones. Ahora estoy terminando mi curso de operadora administrativa."
— Lucia P., Ecuador · Brescia
Servicio: Programa GOL
```

---

### SECCIÓN 10 — CONTACTO

**Label:**
> Contacto

**H2:**
> Estamos para ayudarte

**Subtítulo:**
> Cuéntanos tu situación y un asesor te responderá en menos de 24 horas. 
> La consulta inicial es completamente gratuita.

**Formulario (campos — integrar con GoHighLevel):**
```
Campo 1: Nombre completo *
Campo 2: Teléfono (con prefijo país) *
Campo 3: Email *
Campo 4: País de origen
Campo 5: Servicio de interés * [dropdown]
  - MasterCAF — Formación fiscal
  - Programa GOL — Formación gratuita
  - Test de italiano A2/B1
  - Consultoría migratoria
  - Partita IVA / Servicios fiscales
  - Asesoría para emprender
  - Business Plan
  - Otro
Campo 6: Cuéntanos tu situación [textarea]
  Placeholder: "Ej: Llegué hace 2 años, tengo permesso di soggiorno 
  y quiero mejorar mi situación laboral..."

Checkbox RGPD: 
  "He leído y acepto la política de privacidad. Entiendo que mis datos 
  serán usados para contactarme con información relevante a mi consulta."

[ BOTÓN ÍNDIGO ] → Enviar consulta gratuita
```

**Canales alternativos (al lado del formulario):**
```
WhatsApp:
  Escríbenos directamente
  Respuesta rápida en horario de atención
  [ BOTÓN VERDE ] → Abrir WhatsApp

Ubicación:
  📍 Lombardía / Milán
  Atención presencial con cita previa
  También disponible online para toda Italia

Horario:
  Lunes a Viernes: 9:00 - 18:00
  Sábados: 10:00 - 14:00
  (Hora italiana — CET/CEST)
```

---

### SECCIÓN 11 — CTA FINAL (ANTES DEL FOOTER)

**Fondo:** #0A2540 (azul noche) con texto blanco

**H2:**
> Da el primer paso hoy

**Párrafo:**
> Construir una vida estable en Italia es posible. Miles de personas de la 
> comunidad latina lo han logrado con orientación correcta y los servicios 
> adecuados. En Grupo Integral te acompañamos en ese camino — paso a paso, 
> en tu idioma, sin dejarte solo.

**CTA grande (botón índigo sobre fondo oscuro):**
> Solicitar información ahora — es gratis

**Subtexto debajo del botón:**
> Sin compromiso · Sin costos ocultos · Respuesta en menos de 24h

---

### SECCIÓN 12 — FOOTER

```
Columna 1 — Logo + descripción:
  [LOGO Grupo Integral]
  Conectamos a la comunidad latina en Italia 
  con los servicios que necesita para crecer.
  
  📍 Lombardía / Milán, Italia
  📧 info@grupointegral.it
  📲 [Número WhatsApp]

Columna 2 — Servicios:
  Curso MasterCAF
  Programa GOL (gratis)
  Test de italiano
  Consultoría migratoria
  Partita IVA
  Business Plan

Columna 3 — Empresa:
  Quiénes somos
  Nuestros aliados
  Ser aliado estratégico
  Blog (próximamente)
  Contacto

Columna 4 — Legal:
  Política de privacidad
  Aviso legal
  Cookie policy

Copyright:
  © 2025 Grupo Integral · grupointegral.it · P.IVA [número]
  Todos los derechos reservados.

Redes sociales (si están activas):
  Instagram · Facebook · LinkedIn · YouTube
```

---

## 📄 PÁGINAS INTERNAS — COPY BASE

---

### /servicios/master-caf

```
SEO:
title: "Curso MasterCAF Italia | Conviértete en Operador Fiscal"
description: "Formación acreditada para trabajar como operador fiscal en CAF 
en Italia. Alta demanda laboral. Inicio 27 de junio. Plazas limitadas."

H1: MasterCAF — Formación para Operadores Fiscales en Italia
Breadcrumb: Inicio > Servicios > MasterCAF

[Contenido expandido del Hero MasterCAF de la homepage]
+ Programa completo del curso (módulo por módulo)
+ Perfil del instructor / entidad certificadora
+ FAQ específicas del curso
+ Formulario de inscripción (GHL embed)
```

---

### /servicios/programa-gol

```
SEO:
title: "Programa GOL Lombardía | Formación Gratuita para Inmigrantes"
description: "Accede a formación profesional gratuita en Lombardía con el 
Programa GOL. Requisitos, cursos disponibles y cómo inscribirte."

H1: Programa GOL — Estudia Gratis en Lombardía
[Contenido expandido + cursos actualizados + proceso de inscripción]
```

---

### /aliados

```
SEO:
title: "Ser Aliado de Grupo Integral | Canal B2B para Empresas en Italia"
description: "¿Tu empresa quiere llegar a más clientes latinos en Italia? 
Grupo Integral es tu canal de captación especializado. Hablemos."

H1: Crece con nosotros — Programa de Aliados Estratégicos

Propuesta de valor para aliados:
"Si tu empresa ofrece servicios relevantes para la comunidad latina en Italia 
— formación, asesoría legal, servicios fiscales, salud, vivienda — Grupo Integral 
puede ser tu mejor canal de adquisición de clientes.

Llegamos directamente a personas que están buscando activamente lo que ofreces, 
en el momento exacto en que lo necesitan. Sin publicidad genérica. Sin ruido."

Qué ofrecemos a los aliados:
- Leads cualificados de la comunidad latina en Italia
- Campañas publicitarias gestionadas (Meta Ads, Google Ads)
- Comunicación directa vía WhatsApp y email
- CRM y seguimiento de resultados
- Presencia destacada en grupointegral.it

Modelo de trabajo:
- Comisión por cliente referido (sin riesgo para el aliado)
- O gestión de campaña a tarifa fija mensual
- O modelo mixto

CTA: [ Hablemos — agenda una llamada ]
```

---

### /sobre-nosotros

```
SEO:
title: "Quiénes Somos | Grupo Integral Italia"
description: "Conoce el equipo y la misión detrás de Grupo Integral, 
la plataforma de servicios para la comunidad latina en Italia."

H1: Nuestra historia

"Grupo Integral nació de una necesidad real: la de tener un punto de referencia 
confiable en Italia para la comunidad latina. Un lugar donde poder preguntar 
sin miedo, entender los trámites sin tener que leerlos cinco veces, y acceder 
a servicios de calidad sin pagar de más por no saber a quién acudir.

Somos un equipo con experiencia directa en el sistema italiano — muchos de nosotros 
hemos pasado por los mismos procesos que ahora ayudamos a gestionar. Eso nos da 
una perspectiva diferente: sabemos lo que se siente y sabemos cómo resolverlo.

Hoy trabajamos con una red de aliados acreditados para ofrecer un ecosistema 
completo de servicios — desde la regularización migratoria hasta la apertura 
de un negocio propio — todo en español, todo con acompañamiento real."

[Fotos del equipo si están disponibles]
[Logos de aliados]
[Cifras clave: personas atendidas, años de experiencia, aliados activos]
```

---

## 🔑 KEYWORDS POR PÁGINA

```
Homepage:
- servicios para inmigrantes en Italia
- ayuda para latinos en Italia  
- asesoría migratoria Milán español
- grupo integral italia

/servicios/master-caf:
- curso operador fiscal Italia
- MasterCAF Milano
- formación CAF Italia
- trabajo en CAF Italia extranjeros

/servicios/programa-gol:
- programa GOL Lombardía
- formación gratuita inmigrantes Italia
- cursos gratis Lombardía 2025
- GOL Regione Lombardia como acceder

/servicios/test-italiano:
- test italiano A2 B1 Milano
- examen italiano ciudadanía
- test italiano soggiorno lungo periodo
- certificado italiano Milano

/servicios/consultoria-migratoria:
- renovar permesso di soggiorno Milano
- asesoría migratoria Lombardía español
- consultoría migratoria Milano latinos
- permesso soggiorno ayuda español

/servicios/partita-iva:
- abrir partita IVA extranjero Italia
- partita IVA Milano español
- asesoría fiscal autónomos Italia latinos
- como abrir partita IVA siendo extranjero
```

---

## 📱 COPY WHATSAPP — MENSAJE DE BIENVENIDA

```
Mensaje automático de bienvenida (GHL o WhatsApp Business):

"¡Hola! 👋 Gracias por contactar a Grupo Integral.

Somos tu punto de referencia en Italia para:
✅ Formación acreditada (MasterCAF, Programa GOL)
✅ Asesoría migratoria y documentación
✅ Servicios fiscales y Partita IVA
✅ Apoyo para emprender

Un asesor te responderá en breve.

Mientras tanto, dinos: ¿en qué podemos ayudarte hoy?"
```

---

## 📝 NOTAS PARA EL DESARROLLO

- Formularios: integrar con GoHighLevel (GHL embed o iframe)
- WhatsApp: enlace directo wa.me/[número] + botón flotante en mobile
- CRM: GoHighLevel como sistema principal de leads
- Analytics: Google Analytics 4 + Google Search Console desde día 1
- Google My Business: crear y verificar ficha local (clave para SEO Milano)
- Imágenes: usar fotos reales del equipo y oficina cuando estén disponibles
- Antes del launch: revisar todos los links de aliados y verificar URLs activas
- RGPD: política de privacidad obligatoria (Italia aplica normativa europea)
- Cookie banner: obligatorio para cumplir con normativa italiana/europea

---

*Documento de referencia interno — Grupo Integral*  
*Versión 1.0 — Mayo 2025*
