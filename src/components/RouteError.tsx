
import {isRouteErrorResponse,useRouteError,} from "react-router";
import NotFound from "./NotFound";

export default function RouteError() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <NotFound message="The requested article could not be found." />
    );
  }

  return (
    <section className="mx-auto max-w-2xl rounded-2xl border border-red-200 bg-white p-6 sm:p-10">
      <p className="mb-2 text-xs font-bold tracking-widest text-red-700 uppercase">
        Application error
      </p>

      <h1 className="text-2xl font-bold text-slate-900">
        Something went wrong
      </h1>

      <p className="mt-3 leading-7 text-slate-600">
        We could not load this page. Please return home and try again.
      </p>

      <a  href="/" className="mt-6 inline-flex rounded-lg bg-emerald-900 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
      >
        Return home
      </a>
    </section>
  );
}
