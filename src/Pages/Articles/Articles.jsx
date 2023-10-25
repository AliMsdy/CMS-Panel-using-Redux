import BoxComponent from "../../Components/BoxComponent/BoxComponent";
import ModalForm from "../../Components/ModalForm/ModalForm";
import StyledButton from "../../Components/UI/MuiButton/MuiButton";
import PageTemplate from "../../Layouts/PageTemplate/PageTemplate";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesFromServer } from "../../Redux/features/articles/articles";

import { CheckboxWithLabel, Select, TextField } from "formik-mui";

import * as yup from "yup";

import { createArticleInServer } from "../../Redux/features/articles/articles";

const articleInputs = [
  {
    name: "title",
    props: { type: "text", label: "عنوان مقاله", component: TextField },
  },
  {
    name: "category",
    props: { label: "دسته بندی مقاله", component: Select },
  },
  {
    name: "desc",
    props: {
      minRows: 5,
      placeholder: "توضیح مختصر درباره مقاله ...",
      spellCheck: false,
    },
  },
  {
    name: "confirmation",
    props: {
      type: "checkbox",
      component: CheckboxWithLabel,
      Label: {
        label: "با افزودن این مقاله به لیست مقاله های سایت موافقت میکنم",
      },
    },
  },
];

const articleInputsInitialValues = {
  title: "",
  category: "",
  views: 0,
  desc: "",
  confirmation: false,
};

const validationSchema = yup.object().shape({
  title: yup.string().required("عنوان مقاله را وارد کنید"),
  category: yup.string().required("دسته بندی مقاله را وارد کنید"),
  desc: yup.string().required("توضیح مختصر درباره مقاله را وارد کنید"),
  confirmation: yup
    .boolean()
    .default(false)
    .isTrue("اضافه شدن مقاله را تایید کنید"),
});

function PageActionsButtons() {
  const [modalStatus, setModalStatus] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <StyledButton customcolor="#009cf0" onClick={() => setModalStatus(true)}>
        افزودن مقاله جدید
      </StyledButton>
      {modalStatus && (
        <ModalForm
          modalStatus={modalStatus}
          setModalStatus={setModalStatus}
          type="مقاله"
          inputs={articleInputs}
          initialValues={articleInputsInitialValues}
          validationSchema={validationSchema}
          submitForm={(data) => dispatch(createArticleInServer(data))}
        />
      )}
    </>
  );
}

function Articles() {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  useEffect(() => {
    // this is for avoiding to send the request to the server when component mounted
    // if (!articles.length) dispatch(getArticlesFromServer());
    dispatch(getArticlesFromServer());
        // line below is for disable unnecessary warning in the problem panel
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <PageTemplate pageActions={PageActionsButtons()}>
      {[...articles].reverse().map((article) => (
        <BoxComponent key={article._id} {...article} />
      ))}
    </PageTemplate>
  );
}

export default Articles;
