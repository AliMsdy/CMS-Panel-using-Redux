import { useState } from "react";

//components
import { Button } from "@mui/material";
import Profile from "./Profile/Profile";
import HeaderOptions from "./HeaderOptions/HeaderOptions";
import Overlay from "../UI/Overlay/Overlay";
import ResponsiveMenu from "./ResponsiveMenu/ResponsiveMenu";

//Icons
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  // const [sideBar, setSideBar] = useState(false);

  const [drawerStatus, setDrawerStatus] = useState(false);
  const toggleDrawer = (openStatus) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerStatus(openStatus);
  };

  return (
    <>
      <div className="sticky top-0 z-10 flex items-center justify-between bg-white p-4 shadow-[0px_8px_24px_#959da566] sm:relative">
        <div className="hidden items-center sm:flex">
          <Profile width="w-1/4" margin="sm:mr-4" />
        </div>
        <div className="sm:hidden" onClick={toggleDrawer(true)}>
          <Button>
            <MenuIcon />
          </Button>
        </div>
        <HeaderOptions />
      </div>

      <ResponsiveMenu shouldShown={drawerStatus} closeHandler={toggleDrawer} />

      <Overlay shouldShown={drawerStatus} closeHandler={toggleDrawer} />
    </>
  );
}

export default Header;
