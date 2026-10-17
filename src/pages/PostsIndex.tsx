
import { Link, useSearchParams } from "react-router";
import PageTitle from "../components/PageTitle";
import { getAllTags, posts } from "../data/posts";

export default function PostsIndex() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTag = searchParams.get("tag") ?? "";
  const tags = getAllTags();

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  function handleTagChange(tag: string) {
    const nextParams = new URLSearchParams(searchParams);

    if (tag) {
      nextParams.set("tag", tag);
    } else {
      nextParams.delete("tag");
    }

    setSearchParams(nextParams);
  }

  return (
    <section>
      <div className="mb-8">
        <p className="mb-2 text-xs font-bold tracking-widest text-emerald-700 uppercase">
          Knowledge library
        </p>
        <PageTitle title="Islamic Articles" />
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          Explore articles about the Qur'an, Hadith, faith, worship, and
          character. Select a topic to filter your reading list.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="mb-3 text-sm font-semibold text-emerald-950">
          Filter by topic
        </h2>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => handleTagChange("")}
            aria-pressed={!selectedTag}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              !selectedTag
                ? "border-emerald-900 bg-emerald-900 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-emerald-700"
            }`}
          >
            All topics
          </button>

          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleTagChange(tag)}
              aria-pressed={selectedTag === tag}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                selectedTag === tag
                  ? "border-emerald-900 bg-emerald-900 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-emerald-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-600">
          Showing{" "}
          <span className="font-semibold text-emerald-950">
            {filteredPosts.length}
          </span>{" "}
          {filteredPosts.length === 1 ? "article" : "articles"}
          {selectedTag && ` tagged "${selectedTag}"`}
        </p>

        {selectedTag && (
          <button
            type="button"
            onClick={() => handleTagChange("")}
            className="text-sm font-semibold text-emerald-800 hover:underline"
          >
            Clear filter
          </button>
        )}
      </div>

      {filteredPosts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center">
          <h2 className="text-lg font-semibold text-emerald-950">
            No articles found
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            No articles match this topic.
          </p>
          <button
            type="button"
            onClick={() => handleTagChange("")}
            className="mt-5 rounded-lg bg-emerald-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Show all articles
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="flex min-w-0 flex-col rounded-2xl border border-emerald-900/10 bg-white p-5 transition hover:-translate-y-1 hover:border-emerald-700/30 hover:shadow-lg sm:p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800">
                  {post.category}
                </span>
                <time dateTime={post.date} className="text-xs text-slate-500">
                  {post.date}
                </time>
              </div>

              <h2 className="text-xl leading-7 font-bold text-emerald-950">
                <Link
                  to={`/posts/${post.slug}`}
                  className="wrap-break-word hover:text-emerald-700"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                {post.excerpt}
              </p>

              <div className="mt-5 rounded-lg bg-[#faf9f4] p-3">
                <p className="text-xs font-semibold text-emerald-900">
                  Reference
                </p>
                <p className="mt-1 wrap-break-word text-xs leading-5 text-slate-600">
                  {post.reference}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <button
                    type="button"
                    key={tag}
                    onClick={() => handleTagChange(tag)}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600 hover:bg-emerald-50 hover:text-emerald-800"
                  >
                    #{tag}
                  </button>
                ))}
              </div>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-xs text-slate-500">{post.author}</p>
                <Link
                  to={`/posts/${post.slug}`}
                  className="mt-3 inline-flex items-center gap-2 text-sm p-2 rounded-2xl bg-amber-300 font-semibold text-white hover:bg-amber-200"
                >
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
