import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import Links from "../Components/Links/Links";
import { Outlet } from "react-router-dom";

function Layouts() {
  return (
    <>
      <Header />
      <div className="mt-20 flex flex-col  sm:flex-row lg:pb-16">
        <Sidebar />
        <div className="mt-10 bg-white sm:mt-0 sm:w-3/4">
          <Links />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layouts;
