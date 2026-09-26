# lab.germantalon.com

Manuales gratuitos de Germán Talón. Sitio estático hecho con [Astro](https://astro.build) y [Starlight](https://starlight.astro.build).

Primer manual: [Manual de desarrollo moderno con IA](https://lab.germantalon.com/desarrollo-con-ia/).

## En local

Requiere la versión de Node indicada en `.nvmrc`.

```bash
nvm use
npm ci
npm run dev
```

Otros comandos:

| Comando | Qué hace |
|---|---|
| `npm run build` | Construye el sitio en `dist/`, sin borradores |
| `npm run preview` | Sirve `dist/` en local |
| `npm run check:estilo` | Falla si hay guiones largos en `src/content/` |
| `npm run og` | Regenera `public/og.png` |

Convenciones y plantilla de capítulo: [CLAUDE.md](CLAUDE.md).

## CI

Cada pull request ejecuta tres trabajos en GitHub Actions: **build**, **enlaces** (lychee sobre el sitio construido) y **estilo** (sin guiones largos).

## Despliegue en Cloudflare Pages

Configuración única, desde el panel de Cloudflare:

1. Workers & Pages → Create → Pages → Connect to Git → `gertalonr/lab`.
2. Framework preset: **Astro**. Build command: `npm run build`. Output directory: `dist`.
3. Variable de entorno `NODE_VERSION` = `24` (la de `.nvmrc`).
4. Rama de producción: `main`. Las vistas previas de cada PR vienen activadas por defecto.
5. Custom domains → `lab.germantalon.com`. Si el DNS de `germantalon.com` está en Cloudflare, el CNAME se crea solo. Si no, crea un CNAME `lab` apuntando a `<proyecto>.pages.dev`.
