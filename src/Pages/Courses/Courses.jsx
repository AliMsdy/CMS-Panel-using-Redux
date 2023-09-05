import CourseBox from "../../Components/CourseBox/CourseBox";

function Courses() {
  return (
    <div className="flex h-[500px] flex-col gap-y-12 overflow-y-scroll px-6 py-8">
      <CourseBox />
      <CourseBox />
      <CourseBox />
      <CourseBox />
    </div>
  );
}

export default Courses;
