import { Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import swal from "sweetalert";
import BoxTag from "./BoxTag";

//images
import articlePic from "/img/store/products/product-img-1.jpg";
import coursePic from "/img/store/redux.png";

//icons
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import FolderIcon from "@mui/icons-material/Folder";
import GroupIcon from "@mui/icons-material/Group";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useDispatch } from "react-redux";
//actions
import { deleteArticleFromServer } from "../../Redux/features/articles/articles";
import { deleteCourseFromServer } from "../../Redux/features/courses/courses";

const articleTags = [
  { icon: <LocalOfferIcon />, title: "بازدید" },
  { icon: <FolderIcon />, title: "دسته بندی" },
];
const courseTags = [
  { icon: <AccountBalanceWalletIcon />, title: "قیمت" },
  { icon: <FolderIcon />, title: "دسته بندی" },
  { icon: <GroupIcon />, title: "تعداد فروش" },
];

function BoxComponent({
  topIcon,
  title,
  desc,
  discount,
  price,
  category,
  registersCount,
  _id,
  views,
}) {
  const {
    palette: { mode },
  } = useTheme();

  const dispatch = useDispatch();

  const deleteHandler = () => {
    //if top Icon is truthy it means it is for courses otherwise it is for articles
    if (topIcon) {
      swal({
        title: "آیا از حذف دوره اطمینان دارید ؟",
        icon: "warning",
        buttons: ["آره", "نه"],
      }).then((result) => {
        if (!result) {
          dispatch(deleteCourseFromServer(_id));
          swal({
            title: "دوره با موفقیت حذف شد",
            icon: "success",
            button: "باشه",
          });
        }
      });
    } else {
      swal({
        title: "آیا از حذف مقاله اطمینان دارید ؟",
        icon: "warning",
        buttons: ["آره", "نه"],
      }).then((result) => {
        if (!result) {
          dispatch(deleteArticleFromServer(_id));
          swal({
            title: "مقاله با موفقیت حذف شد",
            icon: "success",
            button: "باشه",
          });
        }
      });
    }
  };

  // specify the tags content and its value by checking if it is a course or article (by (topIcon))
  const specificTagContent = topIcon
    ? [
        price === 0 ? "رایگان" : `${price.toLocaleString()} تومان`,
        category,
        registersCount,
      ]
    : [views, category];

  const boxComponentTags = topIcon
    ? [
        ...courseTags.map((tag, index) => ({
          ...tag,
          tagContent: specificTagContent[index],
        })),
      ]
    : [
        ...articleTags.map((tag, index) => ({
          ...tag,
          tagContent: specificTagContent[index],
        })),
      ];
  return (
    <div className=" group relative flex flex-col shadow-[0px_8px_24px_#959da5] first:mt-4 lg:flex-row">
      <div className="xl:min-w-[30%] xl:max-w-[30%]">
        <img //h-full max-h-[220px] max-w-[100%]
          className="h-auto max-w-[100%] xl:h-full"
          src={topIcon ? coursePic : articlePic}
          alt="course-picture"
        />
      </div>
      <div className="mt-4 flex flex-col md:mt-0 md:gap-y-10 ">
        <div className="mb-4 px-3 py-4 md:mb-auto ">
          <Typography
            component="h4"
            color="warning.main"
            sx={{ fontWeight: "bolder", fontSize: "20px", mb: "8px" }}
          >
            {title}
          </Typography>
          <Typography color="text.primary">{desc}</Typography>
        </div>
        <div
          className={`flex flex-col items-center p-2 sm:p-4 md:flex-row md:gap-x-4 ${
            mode === "light" && "bg-[#f6f6f6]"
          }`}
        >
          <div className="flex flex-wrap gap-2 gap-x-5 text-[#0d6efd]">
            {boxComponentTags.map((tag) => (
              <BoxTag key={crypto.randomUUID()} {...tag} />
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-x-4 md:mt-0">
            <Button
              onClick={deleteHandler}
              variant="contained"
              color="error"
              size="small"
            >
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
          {discount}%
        </div>
      )}
    </div>
  );
}
export default BoxComponent;
