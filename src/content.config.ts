import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			// Campos del pie de autoría (src/components/Footer.astro). Aquí son
			// opcionales porque el esquema no sabe a qué manual pertenece cada
			// página; el pie exige publicado y revisado en las páginas publicadas
			// del manual de retail.
			extend: z.object({
				publicado: z.coerce.date().optional(),
				revisado: z.coerce.date().optional(),
				revision_experta: z
					.object({
						nombre: z.string(),
						linkedin: z.string().url(),
					})
					.optional(),
			}),
		}),
	}),
	i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
