import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

// components
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

// icons
import PersonIcon from "@mui/icons-material/Person";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import WebIcon from "@mui/icons-material/Web";

const LinksArray = [
  { path: "/users", text: "کاربران", icon: <PersonIcon /> },
  { path: "/infos", text: "اطلاعات", icon: <LibraryBooksIcon /> },
  { path: "/courses", text: "دوره ها", icon: <StorefrontIcon /> },
  { path: "/blog", text: "وبلاگ", icon: <WebIcon /> },
];

function Links() {
  const location = useLocation();

  return (
    <ul className="border-b-solid space-x-2 border-b-2 border-b-gray-400 py-3">
      {LinksArray.map(({ path, text, icon }) => {
        const isActivePage =
          path === location.pathname ||
          (path === "/users" && location.pathname === "/");

        return (
          <Link key={text} to={path} className="inline-block">
            <Button
              variant="text"
              className="flex gap-x-1"
              sx={{
                color: "#676879",
                transition: "all 0.4s ease-out",
                "&:hover": { color: "#009cf0" },
              }}
            >
              {icon}
              {text}
            </Button>

            {isActivePage && (
              <motion.span
                layoutId="animate"
                className="block h-0.5 w-full rounded-lg bg-teal-600"
              />
            )}
          </Link>
        );
      })}
    </ul>
  );
}

export default Links;
