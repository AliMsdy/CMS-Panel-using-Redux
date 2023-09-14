// Icons
import NotificationsIcon from "@mui/icons-material/Notifications";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoutIcon from "@mui/icons-material/Logout";
import { ThemeToggleContext } from "../../../context/ThemeContext";

import styles from "./HeaderOptions.module.css";
import { useContext } from "react";

function HeaderOptions() {
  const { toggleColorMode } = useContext(ThemeToggleContext);
  const { button } = styles;
  return (
    <div className="flex w-full justify-end text-white lg:flex-1">
      <button
        onClick={() => toggleColorMode()}
        className={`${button} bg-[#ffc300] px-2 py-2 transition-all duration-300 ease-out hover:shadow-[1px_5px_20px_#ffc300] active:translate-y-[3px] lg:px-3 lg:py-4`}
      >
        <LightModeIcon />
      </button>
      <button
        className={`${button} relative mx-2 bg-[#676879] px-2 py-2 transition-all duration-300 ease-out hover:shadow-[1px_5px_20px_#676879] active:translate-y-[3px] sm:mx-8 lg:px-3 lg:py-4`}
      >
        <NotificationsIcon />
        <span className="absolute right-[-5px] top-[-10px] bg-red-900 px-1 text-xs md:text-base">
          5
        </span>
      </button>
      <button
        className={`${button} bg-[#009cf0] px-2 py-2 transition-all duration-300 ease-out hover:shadow-[1px_5px_20px_#009cf0] active:translate-y-[3px] lg:px-3 lg:py-4`}
      >
        <LogoutIcon />
        <span className="mr-2">خروج از پنل</span>
      </button>
    </div>
  );
}

export default HeaderOptions;
