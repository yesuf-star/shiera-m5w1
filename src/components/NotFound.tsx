
import { Link, useLocation } from "react-router";
import PageTitle from "./PageTitle";

type NotFoundProps = {
  message?: string;
};

function NotFound({message = "The page you requested does not exist.",}: NotFoundProps) {
  const location = useLocation();

  return (
    <section className="mx-auto max-w-2xl py-10 sm:py-16">
      <div className="rounded-3xl border border-emerald-900/10 bg-white p-6 sm:p-10">
        <p className="mb-2 text-xs font-bold tracking-widest text-emerald-700 uppercase">
          Error 404
        </p>

        <PageTitle title="Page Not Found" />

        <p className="mt-4 leading-7 text-slate-600">{message}</p>

        <div className="mt-6 rounded-xl bg-slate-50 p-4">
          <p className="mb-2 text-xs font-semibold text-slate-500">
            Attempted path
          </p>
          <p className="break-all font-mono text-sm text-slate-800">
            {location.pathname}
            {location.search}
          </p>
        </div>

        <Link
          to="/"
          className="mt-7 inline-flex rounded-lg bg-yellow-600 px-5 py-3 text-sm font-semibold text-white hover:bg-yellow-700"
        >
          ← Return home
        </Link>
      </div>
    </section>
  );
}
export default NotFound;