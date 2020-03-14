import React, { useState, useRef, useEffect } from "react";
import { addCourse } from "redux/counter/counter.action";
import { connect } from "react-redux";

const NewCourse = ({ addCourse, saveInProgress, saveError }) => {
  const [courseName, setCourseName] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const inputRef = useRef();

  console.log(courseName, coursePrice);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    addCourse(courseName, coursePrice);
  };
  return (
    <div>
      <h1>Create Your First Course</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Pick a name:
          <input
            ref={inputRef}
            disabled={saveInProgress}
            value={courseName}
            onChange={e => setCourseName(e.target.value)}
          />
        </label>
        <label>
          <input
            disabled={saveInProgress}
            value={coursePrice}
            onChange={e => setCoursePrice(e.target.value)}
          />
        </label>
        {saveError && <div>Error: {saveError.message}</div>}
        <button type="submit">Create Course</button>
        <button type="submit">Close Course</button>
      </form>
    </div>
  );
};

const mapState = state => ({
  // =========== Need add createStructuredSelector ===========
  // courses: state.counter.courses,
  // saveInProgress: state.counter.saveInProgress,
  // saveError: state.counter.saveError
});
const mapDispatchToProps = dispatch => ({
  // addCourse: (courseName, coursePrice) =>
  // dispatch(addCourse(courseName, coursePrice))
});

export default connect(mapState, mapDispatchToProps)(NewCourse);
