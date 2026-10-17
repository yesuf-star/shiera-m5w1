
import { Link, Outlet } from "react-router";
import MainNav from "../components/mainNav";
import ScrollToTop from "../components/ScrollToTop";

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-200 text-slate-800">
      {/* <ScrollToTop /> */}

      <header className="sticky top-0 z-40 border-b border-emerald-900/10 bg-[#faf9f4]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-900 text-xl text-amber-300">
              ۞
            </span>

              <span className="block text-base font-bold tracking-tight text-emerald-950 sm:text-lg">
                Qur'an & Sunnah
              </span>
    
          </Link>

          <MainNav />
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Outlet />
      </main>

      <footer className="border-t border-emerald-900/10 bg-white">      
          <p className="text-md leading-5 text-slate-500 p-5 text-center">
              © {new Date().getFullYear()} Islamic Blog. All rights reserved.
     </p>
     </footer>
    </div>
  );
}
