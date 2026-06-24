import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: URL }) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  const daily = await getCollection('daily', ({ data }) => !data.draft);
  const longForm = await getCollection('long-form', ({ data }) => !data.draft);

  const allPosts = [
    ...daily.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description ?? '',
      link: `${base}/daily/${post.slug}/`,
    })),
    ...longForm.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description ?? '',
      link: `${base}/long-form/${post.slug}/`,
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: "Noah's Notes",
    description: "Daily writing and long-form essays by Noah.",
    site: context.site,
    items: allPosts,
    customData: '<language>en-us</language>',
  });
}
