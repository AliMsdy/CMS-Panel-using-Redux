import { CheckboxWithLabel, Select, TextField } from "formik-mui";
import * as yup from "yup";
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
    props: { type: "number", label: "درصد تخفیف...", component: TextField },
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
  discount: yup
    .number()
    .max(100, "عدد وارد شده خارج از محدوده میباشد")
    .min(0, "عدد وارد شده خارج از محدوده میباشد")
    .required("مقدار تخفیف را وارد کنید(به درصد)"),
  confirmation: yup
    .boolean()
    .default(false)
    .isTrue("اضافه شدن تخفیف را تایید کنید"),
});

export {
  categoryInput,
  categoryInputValidation,
  courseInputs,
  courseInputsInitialValues,
  courseInputsValidation,
  discountInput,
  discountInputValidation,
};
