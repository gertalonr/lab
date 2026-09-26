# Especificación: sitio de manuales de germantalon.com

Nombre provisional del sitio: `lab`. Si se elige otro, cambiarlo aquí antes de empezar.

- Subdominio: `lab.germantalon.com`
- Repo: `gertalonr/lab`, público
- Ruta del primer manual: `desarrollo-con-ia`

## Objetivo

Sitio estático que publica los manuales gratuitos de Germán Talón. La portada es el índice de manuales. Cada manual vive en su propia ruta. El primero es "Manual de desarrollo moderno con IA".

## Stack

- Astro con Starlight. Contenido en Markdown dentro de `src/content/docs/`.
- Node LTS con npm. Fijar la versión en `.nvmrc`.
- Alojamiento en Cloudflare Pages: despliegue automático desde `main` y vista previa en cada PR.

## Estructura

```
src/content/docs/
  index.mdx                  # portada: índice de manuales en tarjetas
  desarrollo-con-ia/
    index.md                 # introducción del manual (ver introduccion.md)
    01-entorno.md            # capítulos, con draft: true hasta terminarlos
    ...
    08-docker.md
    glosario.md
```

La barra lateral tiene un grupo por manual, generado desde su carpeta.

## Lectura

- Idioma del sitio: español (`lang="es"`).
- Tipografía legible y ancho de columna de lectura cómodo, en torno a 70 caracteres.
- Modo claro y oscuro.
- Botón de copiar en todos los bloques de código.
- Enlace a germantalon.com en la cabecera.
- Imagen Open Graph para todo el sitio, a 1200×630.

## Capítulos

Frontmatter mínimo: `title`, `description`, `draft` y el orden en la barra lateral.

Cuerpo con estos seis apartados, en este orden:

1. Para qué sirve
2. Lo esencial
3. Paso a paso
4. Prompt de demo para Claude Code
5. To-do list de validación
6. Errores frecuentes

Al principio del primer apartado va una línea "Punto de partida". Al final del capítulo, una línea "Probado con" con versiones y fecha.

Los capítulos con `draft: true` no aparecen en el sitio publicado.

## CI (GitHub Actions, en cada pull request)

Tres trabajos separados, para ver qué falla:

- **build:** `npm ci` y `npm run build`.
- **enlaces:** comprobar enlaces rotos, internos y externos, sobre el sitio construido.
- **estilo:** fallar si algún fichero de `src/content/` contiene un guion largo (—).

## Contenido inicial

- Portada con el índice de manuales. De momento, un solo manual.
- Introducción del manual, copiada de `introduccion.md`.
- Los ocho capítulos creados con título y `draft: true`, sin contenido.
- `CLAUDE.md` con las convenciones del repo: estilo (frases cortas, sin guiones largos, comandos en bloques de código), plantilla de capítulo y cómo probar en local.
- `README.md` breve.

## Criterios de aceptación

- `npm run dev` muestra la portada con el índice y el manual con su introducción.
- `npm run build` no incluye ningún capítulo en borrador.
- Un PR que añade un "—" a un `.md` deja CI en rojo. Quitándolo, vuelve a verde.
- El sitio se ve bien en móvil y en modo oscuro.

## Fuera de alcance

Otros idiomas, PDF, analítica, comentarios.
