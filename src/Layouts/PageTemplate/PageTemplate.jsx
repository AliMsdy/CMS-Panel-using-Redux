import { useTheme } from "@mui/material/styles";

function PageTemplate({ children, pageActions }) {
  const {
    palette: { mode },
  } = useTheme();
  return (
    <div className=" px-6 py-8">
      <div className="custom-scroll flex h-[500px] flex-col gap-y-12 overflow-x-hidden overflow-y-scroll p-3 sm:p-5">
        {children}
      </div>
      <div
        className={`mt-8 flex justify-center gap-4  p-2 sm:p-4 ${
          mode === "light" && "bg-[#f6f6f6]"
        }`}
      >
        {pageActions}
      </div>
    </div>
  );
}

export default PageTemplate;
