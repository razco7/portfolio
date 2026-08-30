import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    type: z.string().optional(),
    role: z.string(),
    order: z.number(),
    bgColor: z.string(),
    accentColor: z.string(),
    darkTheme: z.boolean().default(false),
    coverImage: z.string().optional(),
    coverBorder: z.boolean().optional(),
    teaserImage: z.string().optional(),
    imagePosition: z.string().optional(),
    images: z.array(z.string()).default([]),
    imageAlts: z.array(z.string()).default([]),
    youtubeId: z.string().optional(),
    client: z.string().optional(),
    company: z.string().optional(),
    year: z.string().optional(),
    externalLink: z.string().optional(),
    externalLinkLabel: z.string().optional(),
    externalOnly: z.boolean().optional(),
    description: z.string(),
  }),
});

export const collections = { projects };
