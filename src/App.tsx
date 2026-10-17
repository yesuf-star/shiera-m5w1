
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router";

import SiteLayout from "./layouts/SiteLayouts";

import HomePage from "./pages/HomePage";
import PostsIndex from "./pages/PostsIndex";
import PostDetail from "./pages/PostDetail";
import AboutPage from "./pages/AboutPage";

import NotFound from "./components/NotFound";
import RouteError from "./components/RouteError";

import { postLoader } from "./loaders/PostLoader";

const router = createBrowserRouter([
  {
    // Shared layout for every page
    element: <SiteLayout />,
    errorElement: <RouteError />,

    children: [
      { index: true, element: <HomePage />, },
      // Articles list: /posts
      { path: "posts",element: <PostsIndex />,},
      // Article details: /posts/:slug
      { path: "posts/:slug", element: <PostDetail />, loader: postLoader,},
      {path: "about", element: <AboutPage />, },
      // Redirect /home to /
      { path: "home", element: <Navigate to="/" replace />, },
      {path: "old-posts",element: <Navigate to="/posts" replace />,},
      { path: "*", element: <NotFound />,},
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
