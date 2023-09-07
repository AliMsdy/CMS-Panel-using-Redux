function CourseTag({ icon, title, titleValue }) {
  return (
    <p>
      {icon}
      <span className="mr-1">{title}</span> : <span>{titleValue}</span>
    </p>
  );
}

export default CourseTag;
