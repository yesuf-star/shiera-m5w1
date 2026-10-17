
import { Link } from "react-router";
import { getLatestPosts, posts } from "../data/posts";

export default function HomePage() {
  const latestPosts = getLatestPosts(3);

  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="relative overflow-hidden  text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full border border-amber-300/20 sm:size-96"
        />

        <div className="relative max-w-3xl ">
          <span className="mb-5 inline-flex rounded-full border border-amber-200/30 bg-indigo-400 px-4 py-2 text-xs font-medium tracking-wide text-white sm:text-sm">
            A JOURNEY OF BENEFICIAL KNOWLEDGE
          </span>

          <h1 className="max-w-2xl text-3xl text-gray-800 leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Discover the beauty of Islamic knowledge.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-900 sm:text-lg sm:leading-8">
            Explore articles about the Noble Qur'an, the Sunnah of Prophet
            Muhammad ﷺ, Hadith collections, and everyday Islamic learning.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/posts"
              className="inline-flex items-center justify-center rounded-xl bg-amber-300 px-6 py-3 font-semibold text-emerald-950 hover:bg-amber-200"
            >
              Explore articles →
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-red-400 px-6 py-3 font-medium text-white hover:bg-red-300"
            >
              About this blog
            </Link>
          </div>

          <p
            lang="ar"
            dir="rtl"
            className="mt-12 text-center text-2xl leading-relaxed text-indigo-950 sm:text-4xl"
          >
            وَقُلْ رَبِّ زِدْنِي عِلْمًا
          </p>
          <p className="mt-2 text-center text-xs text-blue-800 sm:text-sm">
            “My Lord, increase me in knowledge.” — Qur'an 20:114
          </p>
        </div>
      </section>

      <section>
        <p className="mb-2 text-xs font-bold tracking-widest text-emerald-700 uppercase">
          Start learning
        </p>
        <h2 className="mb-6 text-2xl font-bold text-emerald-950 sm:text-3xl">
          Explore by topic
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Qur'an",
              description: "Explore verses, meanings, and reflections.",
              tag: "Qur'an",
              symbol: "۞",
            },
            {
              name: "Hadith",
              description: "Learn about Hadith collections and the Sunnah.",
              tag: "Hadith",
              symbol: "◈",
            },
            {
              name: "Faith & Character",
              description: "Reflect on sincerity, trust, and good manners.",
              tag: "Faith",
              symbol: "◇",
            },
          ].map((topic) => (
            <Link
              key={topic.name}
              to={`/posts?tag=${encodeURIComponent(topic.tag)}`}
              className="group rounded-2xl border border-emerald-900/10 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-700/30 hover:shadow-lg"
            >
              <span className="mb-4 flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl text-emerald-800">
                {topic.symbol}
              </span>
              <h3 className="text-lg font-bold text-emerald-950 group-hover:text-emerald-700">
                {topic.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {topic.description}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold rounded-lg p-2 bg-amber-400 text-white hover:bg-amber-300">
                Explore topic →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-bold tracking-widest text-emerald-700 uppercase">
              Read and reflect
            </p>
            <h2 className="text-2xl font-bold text-emerald-950 sm:text-3xl">
              Recent articles
            </h2>
          </div>

          <Link
            to="/posts"
            className="shrink-0 text-sm font-semibold p-2 rounded-lg bg-gray-400 text-white hover:bg-gray-300"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post, index) => (
            <article
              key={post.slug}
              className="flex min-w-0 flex-col rounded-2xl border border-emerald-900/10 bg-white p-5 transition hover:shadow-lg sm:p-6"
            >
              <span className="mb-4 flex size-10 items-center justify-center rounded-xl bg-emerald-50 font-semibold text-emerald-800">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="mb-2 text-xs font-semibold tracking-wide text-emerald-700 uppercase">
                {post.category}
              </p>

              <h3 className="text-lg leading-7 font-bold text-emerald-950">
                <Link
                  to={`/posts/${post.slug}`}
                  className="wrap-break-word hover:text-emerald-700"
                >
                  {post.title}
                </Link>
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                {post.excerpt}
              </p>

              <p className="mt-5 text-xs text-slate-500">
                {post.date} · {post.author}
              </p>

              <Link
                to={`/posts/${post.slug}`}
                className="mt-4 text-sm bg-red-200 p-1 font-semibold rounded-lg text-white text-center hover:bg-red-100"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Browse all {posts.length} articles in the library.
        </p>
      </section>
    </div>
  );
}
