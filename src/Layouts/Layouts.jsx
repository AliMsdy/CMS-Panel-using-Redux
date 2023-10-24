import { Stack } from "@mui/material";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Links from "../Components/Links/Links";
import Sidebar from "../Components/Sidebar/Sidebar";
import BoxComponentLoading from "../Components/UI/Loading/BoxComponentLoading";

function Layouts() {
  const LoadingMarkUp = Array.from(new Array(5)).map((_, index) => (
    <BoxComponentLoading key={index} />
  ));

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
          <Suspense fallback={<div className="p-4">{LoadingMarkUp}</div>}>
            <Outlet />
          </Suspense>
        </Stack>
      </div>
    </>
  );
}

export default Layouts;

