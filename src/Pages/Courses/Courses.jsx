import PageTemplate from "../../Layouts/PageTemplate/PageTemplate";
import BoxComponent from "../../Components/BoxComponent/BoxComponent";
import StyledButton from "../../Components/UI/MuiButton/MuiButton";

function pageActionsButtons() {
  return (
    <>
      <StyledButton customcolor="#009cf0">افزودن دوره جدید</StyledButton>
      <StyledButton customcolor="#ce0000">اعمال تخفیف همه دوره ها</StyledButton>
      <StyledButton customcolor="#41b300">افزودن دسته بندی</StyledButton>
    </>
  );
}

//icons
import GroupIcon from "@mui/icons-material/Group";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import FolderIcon from "@mui/icons-material/Folder";

const courseTags = [
  { icon: <AccountBalanceWalletIcon />, title: "قیمت", titleValue: "35000" },
  { icon: <FolderIcon />, title: "دسته بندی", titleValue: "فرانت اند" },
  { icon: <GroupIcon />, title: "تعداد فروش", titleValue: "10" },
];

function Courses() {
  return (
    <PageTemplate pageActions={pageActionsButtons()}>
      <BoxComponent
        title="دوره متخصص ریداکس"
        topIcon
        details="لورم ایپسوم متن ساختگی برای پروتوتایپ اپلیکیشن های ..."
        imgSrc="/img/store/redux.png"
        tags={courseTags}
      />
      <BoxComponent
        title="دوره متخصص ریداکس"
        topIcon
        details="لورم ایپسوم متن ساختگی برای پروتوتایپ اپلیکیشن های ..."
        imgSrc="/img/store/redux.png"
        tags={courseTags}
      />
      <BoxComponent
        title="دوره متخصص ریداکس"
        topIcon
        details="لورم ایپسوم متن ساختگی برای پروتوتایپ اپلیکیشن های ..."
        imgSrc="/img/store/redux.png"
        tags={courseTags}
      />
    </PageTemplate>
  );
}

export default Courses;
