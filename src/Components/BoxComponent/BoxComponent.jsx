import { Typography, Button, Stack } from "@mui/material";
import CourseTag from "./CourseTag";
import { useTheme } from "@mui/material/styles";

function BoxComponent({ topIcon, title, details, imgSrc, tags }) {
  const {
    palette: { mode },
  } = useTheme();
  return (
    <div className=" group relative flex flex-col shadow-[0px_8px_24px_#959da5] first:mt-4 lg:flex-row">
      <div className="lg:w-3/4 xl:w-2/5 ">
        <img
          className="h-full max-w-[100%]"
          src={imgSrc}
          alt="course-picture"
        />
      </div>
      <div className="mt-4 flex flex-col md:mt-0 md:gap-y-10 ">
        <div className="mb-4 px-3 py-4 md:mb-auto">
          <Typography
            component="h4"
            className="text-[#ffc300]"
            sx={{ fontWeight: "bolder", fontSize: "20px", mb: "8px" }}
          >
            {title}
          </Typography>
          <Typography className="text-[#808080]">{details}</Typography>
        </div>
        <div
          className={`flex flex-col items-center p-2 sm:p-4 md:flex-row md:gap-x-4 ${
            mode === "light" && "bg-[#f6f6f6]"
          }`}
        >
          <div className="flex flex-wrap gap-2 gap-x-5 text-[#0d6efd]">
            {tags.map((props) => (
              <CourseTag key={props.title} {...props} />
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-x-4 md:mt-0">
            <Button variant="contained" color="error" size="small">
              حذف
            </Button>
            <Button variant="contained" color="primary" size="small">
              ویرایش
            </Button>
          </div>
        </div>
      </div>
      {topIcon && (
        <div className="absolute left-[-8px] top-[-13px] -rotate-45 rounded bg-[#d17804] p-1 text-white transition-all duration-300 group-hover:rotate-0 sm:left-[-15px] sm:p-2">
          30%
        </div>
      )}
    </div>
  );
}

export default BoxComponent;
// bg-[#f6f6f6]
