
import postsData from "./posts.json";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  reference: string;
  content: string;
};

export const posts: Post[] = postsData;

export function findPost(slug: string | undefined): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAllTags(): string[] {
  return [...new Set(posts.flatMap((post) => post.tags))].sort();
}

export function getLatestPosts(limit = 3): Post[] {
  return [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}
