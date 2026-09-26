// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = 'https://lab.germantalon.com';
const ogImage = `${site}/og.png`;

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		starlight({
			title: 'Germán Talón Lab',
			description: 'Manuales gratuitos de Germán Talón sobre desarrollo de software y dirección de tecnología.',
			locales: {
				root: { label: 'Español', lang: 'es' },
			},
			components: {
				SocialIcons: './src/components/SocialIcons.astro',
			},
			customCss: ['./src/styles/custom.css'],
			head: [
				{ tag: 'meta', attrs: { property: 'og:image', content: ogImage } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
				{ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: ogImage } },
			],
			routeMiddleware: './src/routeData.ts',
			// Un grupo por manual, generado desde su carpeta. Si el manual tiene
			// partes, un subgrupo por parte, generado desde su subcarpeta.
			sidebar: [
				{
					label: 'Manual de desarrollo moderno con IA',
					items: [{ autogenerate: { directory: 'desarrollo-con-ia' } }],
				},
				{
					label: 'De la transformación digital al comercio unificado',
					items: [
						{ slug: 'dirigir-tecnologia-retail' },
						{
							label: 'Parte I. Estrategia',
							items: [{ autogenerate: { directory: 'dirigir-tecnologia-retail/estrategia' } }],
						},
						{
							label: 'Parte II. Qué construir',
							items: [{ autogenerate: { directory: 'dirigir-tecnologia-retail/que-construir' } }],
						},
						{
							label: 'Parte III. Cómo ejecutar',
							items: [{ autogenerate: { directory: 'dirigir-tecnologia-retail/como-ejecutar' } }],
						},
						{
							label: 'Parte IV. Casos',
							items: [{ autogenerate: { directory: 'dirigir-tecnologia-retail/casos' } }],
						},
					],
				},
			],
		}),
	],
});
