import Users from "./Pages/Users/Users";
import Infos from "./Pages/Infos/Infos";
import NotFound from "./Pages/NotFound/NotFound";

import { lazy } from "react";
const Courses = lazy(() => import("./Pages/Courses/Courses"));
const Articles = lazy(() => import("./Pages/Articles/Articles"));

// Layout
import Layouts from "./Layouts/Layouts";

const routes = [
  {
    element: <Layouts />,
    path: "/",
    children: [
      { path: "/", element: <Users /> },
      { path: "/users", element: <Users /> },
      { path: "/infos", element: <Infos /> },
      { path: "/courses", element: <Courses /> },
      { path: "/blog", element: <Articles /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];

export default routes;
