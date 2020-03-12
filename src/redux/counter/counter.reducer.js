/* eslint-disable default-case */
// import CounterActionTypes from "./counter.types";
import produce from "immer";
import CounterActionTypes from "./counter.types";

const INITIAL_STATE = {
  coursesError: null,
  coursesLoading: false,
  saveInProgress: false,
  saveError: null,
  courses: [],
  newCourseModalOpen: false
};

const CounterReducer = produce((draft, action) => {
  switch (action.type) {
    case CounterActionTypes.ADD_COURSE_BEGIN:
      draft.saveInProgress = true;
      draft.saveError = null;
      return;

    case CounterActionTypes.ADD_COURSE_SUCCESS:
      draft.courses.push(action.payload);
      draft.saveInProgress = false;
      draft.newCourseModalOpen = false;
      return;

    case CounterActionTypes.ADD_COURSE_ERROR:
      draft.saveInProgress = false;
      draft.saveError = action.error;
      return;
    // =========================

    case CounterActionTypes.LOAD_COURSES_BEGIN:
      draft.coursesLoading = true;
      draft.coursesError = null;
      return;

    case CounterActionTypes.LOAD_COURSES_SUCCESS:
      draft.coursesLoading = false;
      draft.courses = action.payload;
      return;

    case CounterActionTypes.LOAD_COURSES_ERROR:
      draft.coursesLoading = false;
      draft.coursesError = action.payload;
      return;

    case CounterActionTypes.OPEN_NEW_COURSE_MODAL:
      draft.newCourseModalOpen = true;
      return;

    case CounterActionTypes.CLOSE_NEW_COURSE_MODAL:
      draft.newCourseModalOpen = false;
      draft.saveError = null;
      return;

    default:
      return;
  }
}, INITIAL_STATE);

export default CounterReducer;
