//components
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "../../Components/UI/Accordion/Accordion";
import { InfoInput, PasswordInput } from "../../Components/UI/Input/Input";
import MuiButton from "../../Components/UI/MuiButton/MuiButton";
import UploaderBox from "../../Components/UploadBox/UploadBox";

//icons
import GroupIcon from "@mui/icons-material/Group";
import KeyIcon from "@mui/icons-material/Key";
import LanguageIcon from "@mui/icons-material/Language";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

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
    { id: 1, label: "رمز جاری", icon: <KeyIcon />, type: "password" },
    { id: 2, label: "رمز جدید", icon: <KeyIcon />, type: "password" },
    { id: 3, label: "تکرار رمز", icon: <KeyIcon />, type: "password" },
  ],
];

function Infos() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="px-6 py-8">
      <div className="border-1 rounded-t-lg border ">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          {/* user information */}
          <AccordionSummary>
            <div className=" p-4">
              <a className="font-bold">اطلاعات شما</a>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            {/* form Inputs */}
            <div className="px-4 py-3">
              <form className="flex flex-col gap-y-4">
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
            </div>
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
            <div className=" p-4 text-center">
              <MuiButton customcolor="#009cf0" size="large">
                آپدیت اطلاعات
              </MuiButton>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          {/* team information */}
          <AccordionSummary>
            <div className=" p-4">
              <a className="font-bold">اطلاعات تیم</a>
            </div>
          </AccordionSummary>
        </Accordion>
      </div>
    </div>
  );
}

export default Infos;
