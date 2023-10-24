import PageTemplate from "../../Layouts/PageTemplate/PageTemplate";
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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getArticlesFromServer } from "../../Redux/features/articles/articles";

const articleTags = [
  { icon: <FolderIcon />, title: "دسته بندی", titleValue: "فرانت اند" },
  { icon: <LocalOfferIcon />, title: "تعداد فروش", titleValue: "23" },
];

function Articles() {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  useEffect(() => {
    // this is for avoiding to send the request to the server when component mounted
    // if (!articles.length) dispatch(getArticlesFromServer());
    dispatch(getArticlesFromServer());
  }, []);
  return (
    <PageTemplate pageActions={pageActionsButtons()}>
      {articles.map((article) => (
        <BoxComponent key={article._id} {...article} />
      ))}
    </PageTemplate>
  );
}

export default Articles;
