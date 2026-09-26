# CLAUDE.md

Sitio estático con los manuales gratuitos de Germán Talón, publicado en `lab.germantalon.com`. Astro + Starlight, contenido en Markdown. La especificación completa está en `spec.md`.

## Estructura

- `src/content/docs/index.mdx`: portada, índice de manuales en tarjetas.
- `src/content/docs/<manual>/`: una carpeta por manual. `index.md` es su introducción y `glosario.md` su glosario.
- `astro.config.mjs`: un grupo de barra lateral por manual, generado desde su carpeta.
- `public/og.png`: imagen Open Graph (1200×630). Se regenera con `npm run og` desde `scripts/og.mjs`.

## Estilo

- Frases cortas. Una idea por frase.
- Nunca uses el guion largo (—). CI falla si aparece en `src/content/`. Usa punto, coma, dos puntos o paréntesis.
- Todo comando va en un bloque de código con su lenguaje (`bash`, `yaml`, etc.), nunca en línea dentro de un párrafo si hay que ejecutarlo.
- Español de España. Los términos técnicos en inglés se mantienen si es como se usan (commit, pull request).

## Plantilla de capítulo

Ficheros `NN-slug.md` dentro de la carpeta del manual. Mientras no esté terminado, `draft: true`: se ve con `npm run dev` pero no se publica.

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

Los seis apartados van siempre, en este orden. Para publicar un capítulo, quita `draft: true`.

## Añadir un manual nuevo

1. Crea `src/content/docs/<slug>/index.md` con su introducción.
2. Añade un grupo en `sidebar` de `astro.config.mjs` con `items: [{ autogenerate: { directory: '<slug>' } }]`.
3. Añade su `LinkCard` en `src/content/docs/index.mdx`.

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
