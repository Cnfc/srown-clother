import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import NewCourse from "./NewCourse";
import {
  openNewCourseModal,
  closeNewCourseModal
} from "redux/counter/counter.action";

const CourseListPage = ({
  courses,
  coursesLoading,
  coursesError,
  openNewCourseModal,
  closeNewCourseModal,
  isModalOpen
}) => {
  if (coursesLoading) {
    return <div>LOADING...</div>;
  }

  if (coursesError) {
    return <div>{coursesError.message}</div>;
  }

  return courses.length === 0 ? (
    <div>
      <NewCourse />
    </div>
  ) : (
    <div className="CourseList">
      <h2>Your Courses</h2>
      <button onClick={openNewCourseModal}>New Course</button>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <div>{course.name}</div>
            <div>${course.price}</div>
          </li>
        ))}
      </ul>
      <Modal isOpen={isModalOpen} onRequestClose={closeNewCourseModal}>
        <NewCourse />
      </Modal>
    </div>
  );
};

const mapState = state => ({
  courses: state.counter.courses,
  saveInProgress: state.counter.saveInProgress,
  saveError: state.counter.saveError,
  coursesLoading: state.counter.coursesLoading,
  coursesError: state.counter.coursesError,
  isModalOpen: state.counter.newCourseModalOpen
});

const mapDispatch = dispatch => ({
  openNewCourseModal: () => dispatch(openNewCourseModal()),
  closeNewCourseModal: () => dispatch(closeNewCourseModal())
});

export default connect(mapState, mapDispatch)(CourseListPage);
