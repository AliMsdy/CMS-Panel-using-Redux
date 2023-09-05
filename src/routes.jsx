import Users from "./Pages/Users/Users";
import Infos from "./Pages/Infos/Infos";
import Courses from "./Pages/Courses/Courses";
import Articles from "./Pages/Articles/Articles";
import NotFound from "./Pages/NotFound/NotFound";

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
