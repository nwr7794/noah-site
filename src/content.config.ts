import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string().optional(),
  draft: z.boolean().optional().default(false),
});

const daily = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/daily' }),
  schema: postSchema,
});

const longForm = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/long-form' }),
  schema: postSchema,
});

export const collections = {
  daily,
  'long-form': longForm,
};
