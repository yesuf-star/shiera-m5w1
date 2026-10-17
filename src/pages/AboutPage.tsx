
import { Link } from "react-router";
import PageTitle from "../components/PageTitle";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 rounded-3xl bg-indigo-900 px-6 py-10 text-white sm:px-10 sm:py-14">
        <p className="mb-3 text-xs font-bold tracking-widest text-amber-300 uppercase">
          Our purpose
        </p>

        <h1 className="text-3xl leading-tight font-bold sm:text-5xl">
          Learning Islam with care and reflection.
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-emerald-100 sm:text-base">
          A simple space for exploring Islamic knowledge through articles
          about the Qur'an, Hadith, faith, worship, and character.
        </p>
      </div>

      <PageTitle title="About this blog" />

      <div className="mt-5 space-y-5 text-sm leading-8 text-slate-600 sm:text-base">
        <p>
          Qur'an & Sunnah is a learning project designed to organize
          introductory Islamic articles into an accessible reading experience.
          Readers can explore topics and follow references for further study.
        </p>

        <p>
          The content includes summaries of Qur'anic teachings, introductions
          to Hadith collections, and reflections on sincerity, knowledge,
          trust in Allah, and good conduct.
        </p>

        <p>
          These summaries cannot replace the Qur'an itself, detailed tafsir,
          Hadith scholarship, or guidance from qualified scholars. Verify
          quotations, numbering, authenticity, and context through reliable
          sources.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-emerald-900/10 bg-white p-6">
        <h2 className="text-lg font-bold text-emerald-950">
          Explore the library
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Browse the articles and choose topics that interest you.
        </p>

        <Link
          to="/posts"
          className="mt-5 inline-flex rounded-lg bg-emerald-900 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
        >
          Browse articles →
        </Link>
      </div>
    </div>
  );
}
