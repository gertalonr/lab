# Especificación: De la transformación digital al comercio unificado

Subtítulo: Dirigir un retailer en la era de la IA.
Ruta en el sitio: `lab.germantalon.com/dirigir-tecnologia-retail/`

## Objetivo y lector

Enseñar a dirigir la tecnología de un retailer en 2026: qué construir, en qué orden, con quién y cómo evitar los errores caros. Reescribe entero el documento ALMTD v1.0 de 2021.

Lector: CIO y CTO de un retailer mediano (decenas o cientos de tiendas, con canal online), que tienen que decidir. Y CEO que necesitan criterio para hablar con ellos. No explica tecnología desde cero; explica decisiones.

Papel en el advisory del autor: mostrar criterio. Contenido completo y generoso. Una única línea de contacto al final de cada capítulo, sin tono comercial.

Formatos futuros: libro y podcast. Cada capítulo funciona solo y con una tesis que se pueda contar en voz alta.

Fuera de alcance: otros sectores, manuales de producto, tutoriales técnicos de implantación.

## Índice

Parte I. Estrategia
1. Tecnología, digitalización y transformación

Parte II. Qué construir
2. Arquitectura de un retailer en 2026
3. Comercio unificado
4. Datos como activo
5. IA aplicada al retail
6. Comercio agéntico
7. Seguridad y cumplimiento

Parte III. Cómo ejecutar
8. Elegir proveedores
9. Presupuestos y costes
10. Consultores y advisors
11. Gestión de proyectos
12. Gestión del cambio
13. El equipo tecnológico

Parte IV. Casos
14. Casos de éxito y de fracaso

Rutas de lectura: CEO 1, 12, 9, 10 y 14. CIO 1, 2, 3, 7, 8 y 11. CTO 2, 4, 5, 6, 7 y 13.

## Plantilla de capítulo

Siete apartados fijos, en este orden:

1. La decisión: qué tiene que decidir la dirección y qué recomienda el manual.
2. El problema: cómo se ve en una empresa real.
3. De 2000 a 2026: tabla en tres tiempos (hacia 2000, en 2026, hacia dónde va). La tendencia se marca como opinión.
4. Lo esencial: conceptos mínimos para entender la decisión.
5. Cómo decidir: criterios, alternativas y costes, en tabla cuando se comparan opciones.
6. Errores frecuentes: qué sale mal, cómo se ve venir y cómo evitarlo.
7. Preguntas para el comité: entre cinco y ocho.

Al final, una línea de contacto (cafe@germantalon.com). La autoría, las fechas de primera versión y última revisión y la licencia las pone el pie de página a partir del frontmatter (`publicado`, `revisado` y `revision_experta`).

## Estilo

- Voz del autor: ironía seca y humor contenido, frases largas con incisos y paréntesis, coloquialismos puntuales, tono pausado de observación y no de sentencia, cierres que abren. Trato de tú.
- Nunca: guiones largos, párrafos listicle, frases cortadas para impacto, "en definitiva", "en resumen", frases de gurú, mayúsculas para énfasis.
- El cinismo apunta al hype y a las promesas del mercado, nunca al lector.
- Tablas, criterios y preguntas se mantienen estructurados; la voz vive en la prosa.
- Sin fabricantes ni herramientas concretas: se habla de categorías (ERP, visualización de datos).
- Cada sigla se explica la primera vez que aparece en el capítulo.
- Cifras con rango y fuente enlazada. Si no hay fuente, no hay cifra.
- Casos hipotéticos o compuestos, sin nombres reales ni rasgos que identifiquen a una empresa.

## Publicación

- Segundo manual del sitio, en su propia carpeta, con las mismas convenciones que el manual existente.
- Barra lateral agrupada por las cuatro partes del índice.
- Frontmatter: `title`, `description`, `draft` y orden en la barra lateral.
- Contenido inicial: introducción y capítulo 1 publicados; capítulos 2 a 14 con título, descripción de una línea y `draft: true`.
- La portada del sitio añade este manual a su índice.
- `CLAUDE.md` recoge la plantilla y el estilo de este manual, separados de los del manual de desarrollo.
- CI sin cambios: build, enlaces y estilo.

## Criterios de terminado de un capítulo

- Tiene los siete apartados, en orden.
- Cada cifra y fecha regulatoria tiene fuente enlazada, comprobada en el mes de publicación.
- Un CEO sin perfil técnico entiende la decisión y las preguntas.
- Un CIO o CTO encuentra al menos un criterio que no le parece obvio.
- Ninguna marca aparece y ningún caso identifica a una empresa.
- CI en verde y revisado en la vista previa del PR, también en móvil.
