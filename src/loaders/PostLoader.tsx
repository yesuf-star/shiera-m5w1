
import { redirect, type LoaderFunctionArgs } from "react-router";
import { findPost } from "../data/posts";

export function postLoader({ params }: LoaderFunctionArgs) {
  if (params.slug === "old-intentions") {
    throw redirect("/posts/intentions-in-islam");
  }

  const post = findPost(params.slug);

  if (!post) {
    throw new Response("Article not found", { status: 404 });
  }

  return post;
}
