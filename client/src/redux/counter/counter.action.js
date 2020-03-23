import CounterActionTypes from "./counter.types";

// import { createCourse, getCourses } from "./api";

// export const addCourse = (name, price) => {
//   return dispatch => {
//     dispatch({ type: CounterActionTypes.ADD_COURSE_BEGIN });
//     console.log(name, price);
//     createCourse(name, price)
//       .then(course => {
//         console.log(course.data);

//         dispatch({
//           type: CounterActionTypes.ADD_COURSE_SUCCESS,
//           payload: course.data
//         });
//       })
//       .catch(err => {
//         dispatch({ type: CounterActionTypes.ADD_COURSE_ERROR, payload: err });
//       });
//   };
// };

// export const loadCourses = () => {
//   return dispatch => {
//     dispatch({ type: CounterActionTypes.LOAD_COURSES_BEGIN });
//     getCourses()
//       .then(course => {
//         dispatch({
//           type: CounterActionTypes.LOAD_COURSES_SUCCESS,
//           payload: course
//         });
//       })
//       .catch(error => {
//         dispatch({
//           type: CounterActionTypes.LOAD_COURSES_ERROR,
//           payload: error
//         });
//       });
//   };
// };

// export const openNewCourseModal = () => ({
//   type: CounterActionTypes.OPEN_NEW_COURSE_MODAL
// });

// export const closeNewCourseModal = () => ({
//   type: CounterActionTypes.CLOSE_NEW_COURSE_MODAL
// });

export const increment = () => ({
  type: CounterActionTypes.INCREMENT
});

export const decrement = () => ({
  type: CounterActionTypes.DECREMENT
});

export const onIncrementAsync = () => ({
  type: CounterActionTypes.ASYNC
});
