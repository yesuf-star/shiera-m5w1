import { useState } from "react";
import { Link, NavLink } from "react-router";

export default function MainNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative">
      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex size-10 items-center justify-center rounded-lg border border-emerald-100 text-emerald-900 hover:bg-emerald-50 sm:hidden"
      >
        <span className="text-xl">
          {menuOpen ? "×" : "☰"}
        </span>
      </button>

      <div
        id="main-menu"
        className={`${menuOpen ? "flex" : "hidden"} absolute right-0 top-12 z-50 min-w-48 flex-col gap-1 rounded-xl border border-emerald-100 bg-white p-2 shadow-lg sm:static sm:flex sm:min-w-0 sm:flex-row sm:items-center sm:gap-2 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none`}
      >
        <NavLink
          to="/"
          end
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            `rounded-lg px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "bg-emerald-50 text-emerald-900"
                : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-900"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/posts"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            `rounded-lg px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "bg-emerald-50 text-emerald-900"
                : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-900"
            }`
          }
        >
          Articles
        </NavLink>

        <NavLink
          to="/about"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            `rounded-lg px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "bg-emerald-50 text-gray-900"
                : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-900"
            }`
          }
        >
          About
        </NavLink>

        <Link
          to="/posts?tag=Qur'an"
          onClick={() => setMenuOpen(false)}
          className="rounded-lg bg-emerald-900 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-emerald-800"
        >
          Explore Qur'an
        </Link>
      </div>
    </nav>
  );
}