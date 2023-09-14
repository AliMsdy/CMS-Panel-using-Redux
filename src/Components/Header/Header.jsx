import { useState } from "react";
import { useTheme } from "@mui/material/styles";

//components
import { Button, Stack } from "@mui/material";
import Profile from "./Profile/Profile";
import HeaderOptions from "./HeaderOptions/HeaderOptions";
import Overlay from "../UI/Overlay/Overlay";
import ResponsiveMenu from "./ResponsiveMenu/ResponsiveMenu";

//Icons
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const {
    palette: { mode },
  } = useTheme();
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
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        bgcolor="background.secondary"
        className="sticky top-0 z-10 p-4 shadow-[0px_8px_24px_#959da566] sm:relative"
      >
        <div className="hidden items-center sm:flex">
          <Profile width="w-1/4" margin="sm:mr-4" />
        </div>
        <div className="sm:hidden" onClick={toggleDrawer(true)}>
          <Button variant="text">
            <MenuIcon sx={{ color: mode === "dark" ? "#fff" : "#000" }} />
          </Button>
        </div>
        <HeaderOptions />
      </Stack>

      <ResponsiveMenu shouldShown={drawerStatus} closeHandler={toggleDrawer} />

      <Overlay shouldShown={drawerStatus} closeHandler={toggleDrawer} />
    </>
  );
}

export default Header;
