import StyledButton from "../../Components/UI/MuiButton/MuiButton";
import PageTemplate from "../../Layouts/PageTemplate/PageTemplate";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//actions
import { getCoursesFromServer } from "../../Redux/features/courses/courses";

//components
import BoxComponent from "../../Components/BoxComponent/BoxComponent";
import CourseModalForm from "./CourseModalForm";

function PageActionsButtons() {
  const [modalStatus, setModalStatus] = useState(false);
  return (
    <>
      <StyledButton customcolor="#009cf0" onClick={() => setModalStatus(true)}>
        افزودن دوره جدید
      </StyledButton>
      {modalStatus && (
        <CourseModalForm
          modalStatus={modalStatus}
          setModalStatus={setModalStatus}
        />
      )}
      <StyledButton customcolor="#ce0000">اعمال تخفیف همه دوره ها</StyledButton>
      <StyledButton customcolor="#41b300">افزودن دسته بندی</StyledButton>
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
