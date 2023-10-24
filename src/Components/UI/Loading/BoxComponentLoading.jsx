import { Skeleton } from "@mui/material";

function BoxComponentLoading() {
  return (
    <div className=" my-5 flex flex-col shadow-[0px_8px_24px_#959da5] lg:flex-row">
      <div className="flex items-start px-6 md:w-2/5">
        <Skeleton animation="wave" sx={{ minHeight: 200, width: "100%" }} />
      </div>
      <div className=" flex flex-col md:justify-center">
        <div className="px-3 py-4">
          <Skeleton animation="wave" width="40%" />
          <Skeleton animation="wave" width="60%" />
        </div>
        <div
          className={`flex flex-col items-center p-2 sm:p-4 md:flex-row md:gap-x-4 `}
        >
          <div className="flex flex-wrap gap-2 gap-x-5">
            <Skeleton animation="wave" width={100} />
            <Skeleton animation="wave" width={100} />
          </div>
          <div className="flex justify-center gap-x-4">
            <Skeleton animation="wave" width={70} />
            <Skeleton animation="wave" width={70} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxComponentLoading;
