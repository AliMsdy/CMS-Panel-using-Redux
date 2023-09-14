import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import Links from "../Components/Links/Links";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";

function Layouts() {
  return (
    <>
      <Header />
      <div className="mt-20 flex flex-col  sm:flex-row lg:pb-16">
        <Sidebar />
        <Stack
          bgcolor="background.secondary"
          className="mt-10 sm:mt-0 sm:w-3/4"
        >
          <Links />
          <Outlet />
        </Stack>
      </div>
    </>
  );
}

export default Layouts;
