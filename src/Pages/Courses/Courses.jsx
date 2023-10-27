import StyledButton from "../../Components/UI/MuiButton/MuiButton";
import PageTemplate from "../../Layouts/PageTemplate/PageTemplate";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//actions
import { createCategoryInServer } from "../../Redux/features/categories/category";
import {
  createCourseInTheServer,
  getCoursesFromServer,
  setDiscount,
} from "../../Redux/features/courses/courses";

//components
import BoxComponent from "../../Components/BoxComponent/BoxComponent";
import ModalForm from "../../Components/ModalForm/ModalForm";

//inputs 
import {
  categoryInput,
  categoryInputValidation,
  courseInputs,
  courseInputsInitialValues,
  courseInputsValidation,
  discountInput,
  discountInputValidation,
} from "./CourseInputsData"



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
