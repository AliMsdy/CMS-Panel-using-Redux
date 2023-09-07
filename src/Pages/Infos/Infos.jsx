//components
import { InfoInput, PasswordInput } from "../../Components/UI/Input/Input";
import UploaderBox from "../../Components/UploadBox/UploadBox";
import MuiButton from "../../Components/UI/MuiButton/MuiButton";

//icons
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import LanguageIcon from "@mui/icons-material/Language";
import KeyIcon from "@mui/icons-material/Key";

const InputArray = [
  [
    { label: "نام", icon: <PersonIcon />, type: "text" },
    { label: "نام خانوادگی", icon: <GroupIcon />, type: "text" },
  ],
  [
    { label: "نام کاربری", icon: <PermContactCalendarIcon />, type: "text" },
    { label: "email", icon: <LanguageIcon />, type: "email" },
  ],
  [
    { label: "رمز جاری", icon: <KeyIcon />, type: "password" },
    { label: "رمز جدید", icon: <KeyIcon />, type: "password" },
    { label: "تکرار رمز", icon: <KeyIcon />, type: "password" },
  ],
];

function Infos() {
  return (
    <div className="px-6 py-8">
      <div className="border-1 rounded-t-lg border border-[#0000002d]">
        {/* user information */}
        <div className="bg-[#21252908] p-4">
          <a className="font-bold" href="#form">
            اطلاعات شما
          </a>
        </div>
        {/* form Inputs */}
        {/* <div className="border-t-2 border-t-[#0000002d] px-4 py-3">
          <form className="flex flex-col gap-y-4" id="form">
            {InputArray.map((inputArray, index) => {
              return (
                <div
                  className="flex flex-col flex-wrap gap-4 sm:flex-row sm:justify-evenly md:flex-nowrap"
                  key={index}
                >
                  {inputArray.map((input) => {
                    if (input.type === "password")
                      return <PasswordInput {...input} key={input.label} />;
                    return <InfoInput {...input} key={input.label} />;
                  })}
                </div>
              );
            })}
          </form>
        </div> */}
        {/* uploader section */}
        <div className="mt-8 flex flex-col gap-6 p-4 md:flex-row">
          <UploaderBox
            imgSrc="/img/admin/profile/banana.png"
            title="پروفایل"
            isBanner={false}
          />
          <UploaderBox
            imgSrc="/img/admin/banner/banner.png"
            title="بنر"
            isBanner={true}
          />
        </div>
        {/* update information Button */}
        <div className="border-b-2 border-b-[#0000002d]  p-4 text-center">
          <MuiButton customcolor="#009cf0" size="large">
            آپدیت اطلاعات
          </MuiButton>
        </div>
        {/* team information */}
        <div className="bg-[#21252908] p-4">
          <a className="font-bold" href="#team">
            اطلاعات تیم
          </a>
        </div>
      </div>
    </div>
  );
}

export default Infos;
