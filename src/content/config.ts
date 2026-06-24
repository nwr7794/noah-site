import { z, defineCollection } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string().optional(),
  draft: z.boolean().optional().default(false),
});

const daily = defineCollection({
  type: 'content',
  schema: postSchema,
});

const longForm = defineCollection({
  type: 'content',
  schema: postSchema,
});

export const collections = {
  daily,
  'long-form': longForm,
};
