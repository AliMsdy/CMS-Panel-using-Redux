//components
import Profile from "../Header/Profile/Profile";
import { Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
// icons
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import ModeIcon from "@mui/icons-material/Mode";

const UserInfoIcon = styled(LocalParkingIcon)(({ theme }) => {
  console.log(theme.palette);
  return {
    color: theme.palette.mode === "dark" ? theme.palette.text.primary : null,
  };
});

function Sidebar() {
  return (
    <div className="flex flex-col items-center justify-between sm:w-1/3 sm:items-start">
      <Stack
        bgcolor="background.secondary"
        className="w-[90%] max-w-[400px] lg:w-[60%]"
      >
        <div>
          <img
            className="h-auto max-w-full rounded-t-md"
            src="/img/admin/banner/banner.png"
            alt="banner-pic"
          />
        </div>
        <div className="relative top-[-50px] flex flex-col items-center lg:top-[-80px]">
          <Profile width="w-1/2" margin="mt-2" border={true} />
        </div>
        <ul className="px-4 sm:px-2">
          <li className="last:border-top-0 flex items-center justify-between border-t-2 py-3">
            <UserInfoIcon />
            <Typography>نام کوچک</Typography>
            <p className="mr-auto text-teal-600">محمد امین</p>
          </li>
          <li className="last:border-top-0 flex items-center justify-between border-t-2 py-3">
            <UserInfoIcon />
            <Typography>نام خانوادگی</Typography>
            <p className="mr-auto text-red-800">سعیدی راد</p>
          </li>
          <li className="last:border-top-0 flex items-center justify-between border-t-2 py-3">
            <UserInfoIcon />
            <Typography>تعداد دوره</Typography>
            <p className="mr-auto text-teal-900">35</p>
          </li>
        </ul>
        <div className="mb-6 mt-4 text-center text-white">
          <Button
            className="w-[80%] rounded-md bg-teal-500 p-2"
            variant="contained"
          >
            <ModeIcon className="ml-2" />
            تغییر اطلاعات
          </Button>
        </div>
      </Stack>
    </div>
  );
}

export default Sidebar;
