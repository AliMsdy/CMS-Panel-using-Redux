import { Typography, Button } from "@mui/material";
import CourseTag from "./CourseTag";

//icons
import GroupIcon from "@mui/icons-material/Group";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import FolderIcon from "@mui/icons-material/Folder";

const CourseTags = [
  { icon: <AccountBalanceWalletIcon />, title: "قیمت", titleValue: "35000" },
  { icon: <FolderIcon />, title: "دسته بندی", titleValue: "فرانت اند" },
  { icon: <GroupIcon />, title: "تعداد فروش", titleValue: "10" },
];

function CourseBox() {
  return (
    <div className=" flex flex-col shadow-[0px_8px_24px_#959da5] lg:flex-row">
      <div className="lg:w-3/4 xl:w-2/5 ">
        <img
          className="h-full max-w-[100%]"
          src="/img/store/redux.png"
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
            دوره متخصص ریداکس
          </Typography>
          <Typography className="text-[#808080]">
            لورم ایپسوم متن ساختگی برای پروتوتایپ اپلیکیشن های ...
          </Typography>
        </div>
        <div className="flex flex-col items-center bg-[#f6f6f6] p-2 sm:p-4 md:flex-row">
          <div className="flex flex-wrap gap-2 gap-x-5 text-[#0d6efd]">
            {CourseTags.map((props) => (
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
    </div>
  );
}

export default CourseBox;
