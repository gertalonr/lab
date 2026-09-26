# CLAUDE.md

Sitio estático con los manuales gratuitos de Germán Talón, publicado en `lab.germantalon.com`. Astro + Starlight, contenido en Markdown. Las especificaciones están en `specs/`: `specs/sitio.md` para el sitio y una por manual (por ejemplo, `specs/dirigir-tecnologia-retail.md`).

## Estructura

- `src/content/docs/index.mdx`: portada, índice de manuales en tarjetas.
- `src/content/docs/<manual>/`: una carpeta por manual. `index.md` es su introducción (con `sidebar.label: Introducción` y `order: 0`).
- Si el manual tiene partes, cada parte es una subcarpeta (`dirigir-tecnologia-retail/estrategia/`) y la parte forma parte de la URL.
- `astro.config.mjs`: un grupo de barra lateral por manual, generado desde su carpeta, o un subgrupo por parte generado desde cada subcarpeta.
- `src/routeData.ts`: quita de la barra lateral los grupos vacíos, como una parte con todos sus capítulos en borrador.
- `public/og.png`: imagen Open Graph (1200×630). Se regenera con `npm run og` desde `scripts/og.mjs`.

## Reglas comunes

- Nunca uses el guion largo (—). CI falla si aparece en `src/content/`. Usa punto, coma, dos puntos o paréntesis.
- Español de España.
- Frontmatter de capítulo: `title`, `description`, `draft` y `sidebar.order`. Ficheros `NN-slug.md`.
- Mientras un capítulo no esté terminado, `draft: true`: se ve con `npm run dev` pero no se publica. Para publicarlo, quita la línea `draft`.
- Cada manual tiene su propio estilo y su propia plantilla (abajo). No los mezcles.

## Manual de desarrollo moderno con IA (`desarrollo-con-ia/`)

### Estilo

- Frases cortas. Una idea por frase.
- Todo comando va en un bloque de código con su lenguaje (`bash`, `yaml`, etc.), nunca en línea dentro de un párrafo si hay que ejecutarlo.
- Los términos técnicos en inglés se mantienen si es como se usan (commit, pull request).

### Plantilla de capítulo

````markdown
---
title: Título del capítulo
description: Una frase que resume el capítulo.
draft: true
sidebar:
  order: N
---

## Para qué sirve

**Punto de partida:** qué debe tener hecho el lector antes de empezar.

Texto.

## Lo esencial

## Paso a paso

```bash
comando
```

## Prompt de demo para Claude Code

```text
Prompt listo para copiar.
```

## To-do list de validación

- [ ] Comprobación 1.
- [ ] Comprobación 2.

## Errores frecuentes

---

**Probado con:** herramienta 1.2.3, otra 4.5.6. Fecha: AAAA-MM-DD.
````

Los seis apartados van siempre, en este orden.

## Manual de dirección de tecnología en retail (`dirigir-tecnologia-retail/`)

Lectores: CIO y CTO de un retailer mediano, que tienen que decidir, y CEO que necesitan criterio para hablar con ellos. El manual explica decisiones, no tecnología desde cero. Especificación completa en `specs/dirigir-tecnologia-retail.md`.

Partes y subcarpetas: `estrategia/` (1), `que-construir/` (2 a 7), `como-ejecutar/` (8 a 13) y `casos/` (14).

### Estilo

- Voz del autor: ironía seca y humor contenido, frases largas con incisos y paréntesis, coloquialismos puntuales, tono pausado de observación y no de sentencia, cierres que abren. Trato de tú.
- Nunca: guiones largos, párrafos listicle, frases cortadas para impacto, "en definitiva", "en resumen", frases de gurú, mayúsculas para énfasis.
- El cinismo apunta al hype y a las promesas del mercado, nunca al lector.
- Tablas, criterios y preguntas se mantienen estructurados; la voz vive en la prosa.
- Sin fabricantes ni herramientas concretas: se habla de categorías (ERP, visualización de datos).
- Cada sigla se explica la primera vez que aparece en el capítulo.
- Cifras con rango y fuente enlazada. Si no hay fuente, no hay cifra.
- Casos hipotéticos o compuestos, sin nombres reales ni rasgos que identifiquen a una empresa.
- Cada capítulo funciona solo y tiene una tesis que se pueda contar en voz alta (habrá libro y podcast).

### Plantilla de capítulo

```markdown
---
title: Título del capítulo
description: Una frase que resume la decisión del capítulo.
draft: true
sidebar:
  order: N
---

## La decisión

Qué tiene que decidir la dirección y qué recomienda el manual.

## El problema

Cómo se ve en una empresa real.

## De 2000 a 2026

| Aspecto | Hacia 2000 | En 2026 | Hacia dónde va |
| --- | --- | --- | --- |
| ... | ... | ... | ... |

La última columna se marca como opinión.

## Lo esencial

Conceptos mínimos para entender la decisión.

## Cómo decidir

Criterios, alternativas y costes, en tabla cuando se comparan opciones.

## Errores frecuentes

Qué sale mal, cómo se ve venir y cómo evitarlo.

## Preguntas para el comité

Entre cinco y ocho, numeradas.

*Revisado en <mes> de <año>.*

Línea de contacto, una sola y sin tono comercial, con cafe@germantalon.com.
```

Los siete apartados van siempre, en este orden. `estrategia/01-tecnologia-digitalizacion-transformacion.md` es el ejemplo de referencia.

### Criterios de terminado

- Tiene los siete apartados, en orden.
- Cada cifra y fecha regulatoria tiene fuente enlazada, comprobada en el mes de publicación.
- Un CEO sin perfil técnico entiende la decisión y las preguntas.
- Un CIO o CTO encuentra al menos un criterio que no le parece obvio.
- Ninguna marca aparece y ningún caso identifica a una empresa.
- CI en verde y revisado en la vista previa del PR, también en móvil.

## Añadir un manual nuevo

1. Escribe su especificación en `specs/<slug>.md`.
2. Crea `src/content/docs/<slug>/index.md` con su introducción.
3. Añade un grupo en `sidebar` de `astro.config.mjs`:
   - Sin partes: `items: [{ autogenerate: { directory: '<slug>' } }]`.
   - Con partes: `{ slug: '<slug>' }` para la introducción y un subgrupo por parte con `items: [{ autogenerate: { directory: '<slug>/<parte>' } }]`.
4. Añade su `LinkCard` en `src/content/docs/index.mdx`.
5. Añade a este fichero una sección con su estilo y su plantilla.

## Probar en local

Usa la versión de Node de `.nvmrc`.

```bash
nvm use
npm ci
npm run dev
```

Antes de abrir un PR:

```bash
npm run check:estilo
npm run build
npm run preview
```

Los enlaces se comprueban en CI con lychee. En local, con Docker:

```bash
docker run --rm -v "$PWD":/w -w /w lycheeverse/lychee --config lychee.toml --root-dir /w/dist 'dist/**/*.html'
```
