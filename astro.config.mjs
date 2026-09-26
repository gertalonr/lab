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
			title: 'Manuales de Germán Talón',
			description: 'Manuales gratuitos de Germán Talón sobre desarrollo de software.',
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
			// Un grupo por manual, generado desde su carpeta.
			sidebar: [
				{
					label: 'Manual de desarrollo moderno con IA',
					items: [{ autogenerate: { directory: 'desarrollo-con-ia' } }],
				},
			],
		}),
	],
});
