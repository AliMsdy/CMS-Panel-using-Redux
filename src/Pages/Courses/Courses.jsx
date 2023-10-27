import StyledButton from "../../Components/UI/MuiButton/MuiButton";
import PageTemplate from "../../Layouts/PageTemplate/PageTemplate";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

//actions
import { createCategoryInServer } from "../../Redux/features/categories/category";
import {
  createCourseInTheServer,
  getCoursesFromServer,
  setDiscount
} from "../../Redux/features/courses/courses";

//components
import { CheckboxWithLabel, Select, TextField } from "formik-mui";
import BoxComponent from "../../Components/BoxComponent/BoxComponent";
import ModalForm from "../../Components/ModalForm/ModalForm";

// course information
const courseInputsValidation = yup.object().shape({
  title: yup.string().required("عنوان دوره الزامی است"),
  price: yup.string().required("قیمت دوره را وارد کنید"),
  category: yup.string().required("دسته بندی دوره را انتخاب کنید"),
  discount: yup
    .number()
    .max(100, "عدد وارد شده خارج از محدوده میباشد")
    .min(0, "عدد وارد شده خارج از محدوده میباشد"),
  desc: yup.string().required("یک توضیح مختصر درباره دوره وارد کنید"),
  confirmation: yup
    .boolean()
    .default(false)
    .isTrue("اضافه شدن دوره را تایید کنید"),
});

const courseInputsInitialValues = {
  title: "",
  price: "",
  category: "",
  registersCount: 0,
  discount: "",
  desc: "",
  confirmation: false,
};

const courseInputs = [
  {
    name: "title",
    props: { type: "text", label: "عنوان دوره", component: TextField },
  },
  {
    name: "price",
    props: {
      type: "number",
      label: "قیمت دوره",
      component: TextField,
    },
  },
  {
    name: "category",
    props: { label: "دسته بندی دوره", component: Select },
  },
  {
    name: "discount",
    props: {
      type: "number",
      label: "تخفیف دوره %",
      component: TextField,
    },
  },
  {
    name: "desc",
    props: {
      minRows: 5,
      placeholder: "توضیح مختصر درباره دوره...",
      spellCheck: false,
    },
  },
  {
    name: "confirmation",
    props: {
      type: "checkbox",
      component: CheckboxWithLabel,
      Label: {
        label: "با افزودن این دوره به لیست دوره های سایت موافقت میکنم",
      },
    },
  },
];

//category information
const categoryInput = [
  {
    name: "title",
    props: {
      type: "text",
      spellCheck: false,
      label: "نام دسته بندی",
      component: TextField,
    },
  },
  {
    name: "confirmation",
    props: {
      type: "checkbox",
      component: CheckboxWithLabel,
      Label: {
        label:
          "با افزودن این دسته بندی به لیست دسته بندی های سایت موافقت میکنم",
      },
    },
  },
];

const categoryInputValidation = yup.object().shape({
  title: yup.string().required("عنوان دسته بندی الزامی است"),
  confirmation: yup
    .boolean()
    .default(false)
    .isTrue("اضافه شدن دسته بندی را تایید کنید"),
});

//discount information
const discountInput = [
  {
    name: "discount",
    props: { type: "text", label: "درصد تخفیف...", component: TextField },
  },
  {
    name: "confirmation",
    props: {
      type: "checkbox",
      component: CheckboxWithLabel,
      Label: {
        label: "اعمال تخفیف را روی دوره ها تایید میکنم",
      },
    },
  },
];

const discountInputValidation = yup.object().shape({
  discount: yup.string().required("مقدار تخفیف را وارد کنید(به درصد)"),
  confirmation: yup
    .boolean()
    .default(false)
    .isTrue("اضافه شدن تخفیف را تایید کنید"),
});

function PageActionsButtons() {
  const [createCourseModal, setCreateCourseModal] = useState(false);
  const [createCategoryModal, setCreateCategoryModal] = useState(false);
  const [discountModal, setDiscountModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <StyledButton
        customcolor="#009cf0"
        onClick={() => setCreateCourseModal(true)}
      >
        افزودن دوره جدید
      </StyledButton>
      {createCourseModal && (
        <ModalForm
          modalStatus={createCourseModal}
          setModalStatus={setCreateCourseModal}
          type="دوره"
          inputs={courseInputs}
          initialValues={courseInputsInitialValues}
          validationSchema={courseInputsValidation}
          submitForm={(data) => {
            data["price"] = parseInt(data.price.replace(/,/g, ""));
            dispatch(createCourseInTheServer(data));
          }}
        />
      )}
      <StyledButton
        customcolor="#ce0000"
        onClick={() => setDiscountModal(true)}
      >
        اعمال تخفیف همه دوره ها
      </StyledButton>
      {discountModal && (
        <ModalForm
          modalStatus={discountModal}
          setModalStatus={setDiscountModal}
          type="تخفیف"
          inputs={discountInput}
          initialValues={{ discount: "", confirmation: false }}
          validationSchema={discountInputValidation}
          submitForm={(data) => {
            dispatch(setDiscount(data));
          }}
        />
      )}
      <StyledButton
        customcolor="#41b300"
        onClick={() => setCreateCategoryModal(true)}
      >
        افزودن دسته بندی
      </StyledButton>
      {createCategoryModal && (
        <ModalForm
          modalStatus={createCategoryModal}
          setModalStatus={setCreateCategoryModal}
          type="دسته بندی"
          inputs={categoryInput}
          initialValues={{ title: "", confirmation: false }}
          validationSchema={categoryInputValidation}
          submitForm={(data) => {
            dispatch(createCategoryInServer(data));
          }}
        />
      )}
    </>
  );
}

function Courses() {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  useEffect(() => {
    // this is for avoiding to send the request to the server when component mounted
    // if (!courses.length) dispatch(getCoursesFromServer());
    dispatch(getCoursesFromServer());
    // line below is for disable unnecessary warning in the problem panel
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageTemplate pageActions={PageActionsButtons()}>
        {[...courses].reverse().map((course) => (
          <BoxComponent key={course._id} topIcon {...course} />
        ))}
      </PageTemplate>
    </>
  );
}

export default Courses;
