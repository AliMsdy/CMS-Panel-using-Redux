function CourseTag({ icon, title, tagContent }) {
  return (
    <p>
      {icon}
      <span className="mr-1">{title}</span> : <span>{tagContent}</span>
    </p>
  );
}

export default CourseTag;
