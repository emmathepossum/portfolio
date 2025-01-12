import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      projecImage: z.union([
        z.object({
          url: z.string(),
          alt: z.string()
        }),
        z.undefined()
      ]),
      platform: z.string(),
      stack: z.string(),
      website: z.union([z.string(),z.undefined()]),
      github: z.union([z.string(),z.undefined()]),
    })
});

export const collections = {
  projects: projectsCollection,
};

