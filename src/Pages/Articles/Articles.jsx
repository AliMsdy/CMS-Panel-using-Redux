import PageTemplate from "../../Components/PageTemplate/PageTemplate";
import BoxComponent from "../../Components/BoxComponent/BoxComponent";
import StyledButton from "../../Components/UI/MuiButton/MuiButton";

function pageActionsButtons() {
  return (
    <>
      <StyledButton customcolor="#009cf0">افزودن مقاله جدید</StyledButton>
    </>
  );
}
//icons
import FolderIcon from "@mui/icons-material/Folder";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const articleTags = [
  { icon: <FolderIcon />, title: "دسته بندی", titleValue: "فرانت اند" },
  { icon: <LocalOfferIcon />, title: "تعداد فروش", titleValue: "23" },
];

function Articles() {
  return (
    <PageTemplate pageActions={pageActionsButtons()}>
      <BoxComponent
        title="دوره متخصص ریداکس"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam voluptates impedit incidunt"
        imgSrc="/img/store/products/product-img-1.jpg"
        tags={articleTags}
      />
      <BoxComponent
        title="دوره متخصص ریداکس"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam voluptates impedit incidunt"
        imgSrc="/img/store/products/product-img-1.jpg"
        tags={articleTags}
      />
      <BoxComponent
        title="دوره متخصص ریداکس"
        details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam voluptates impedit incidunt"
        imgSrc="/img/store/products/product-img-1.jpg"
        tags={articleTags}
      />
    </PageTemplate>
  );
}

export default Articles;
