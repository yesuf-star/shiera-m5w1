
import { Link, useLoaderData } from "react-router";
import PageTitle from "../components/PageTitle";
import { postLoader } from "../loaders/PostLoader";

export default function PostDetail() {
  const post = useLoaderData<typeof postLoader>();

  return (
    <article className="mx-auto max-w-3xl">
      <Link
        to="/posts"
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:underline"
      >
        ← All articles
      </Link>

      <header className="mb-8 border-b border-emerald-900/10 pb-8">
        <span className="mb-4 inline-flex rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800">
          {post.category}
        </span>

        <PageTitle title={post.title} />

        <p className="mt-3 text-sm text-slate-500">
          By {post.author} ·{" "}
          <time dateTime={post.date}>{post.date}</time>
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag:string) => (
            <Link
              key={tag}
              to={`/posts?tag=${encodeURIComponent(tag)}`}
              className="rounded-full border border-emerald-900/10 bg-white px-3 py-1.5 text-xs font-medium text-emerald-800 hover:bg-emerald-50"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </header>

      <aside className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
        <p className="text-xs font-bold tracking-widest text-amber-900 uppercase">
          Source reference
        </p>
        <p className="mt-2 wrap-break-word font-semibold text-amber-950">
          {post.reference}
        </p>
        <p className="mt-2 text-sm leading-6 text-amber-900/80">
          Consult a reliable edition or trusted tafsir for the original
          wording, context, and scholarly explanation.
        </p>
      </aside>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 lg:p-10">
        <p className="mb-5 text-xs font-bold tracking-widest text-emerald-700 uppercase">
          Read and reflect
        </p>

        <p className="whitespace-pre-line text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
          {post.content}
        </p>

        <div className="mt-10 border-t border-slate-100 pt-6">
          <p className="text-sm leading-7 text-slate-500">
            May Allah grant us beneficial knowledge and help us act upon what
            we learn.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-emerald-950 p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <h2 className="font-semibold">Continue learning</h2>
          <p className="mt-1 text-sm text-emerald-100">
            Explore more articles from the knowledge library.
          </p>
        </div>

        <Link
          to="/posts"
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-amber-300 px-5 py-3 text-sm font-semibold text-emerald-950 hover:bg-amber-200"
        >
          More articles →
        </Link>
      </div>
    </article>
  );
}
