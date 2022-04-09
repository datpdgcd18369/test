import {
    CREATE_COURSE,
    RETRIEVE_COURSES,
    UPDATE_COURSE,
    DELETE_COURSE,
  } from "../actions/types";
  
  const initialState = [];
  
  const courseReducer = (courses = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_COURSE:
        return [...courses, payload];
  
      case RETRIEVE_COURSES:
        return payload;
    
      case UPDATE_COURSE:
        return courses.map((course) => {
          if (course.id === payload.id) {
            return {
              ...courses,
              ...payload,
            };
          } else {
            return courses;
          }
        });
  
      case DELETE_COURSE:
        return courses.filter(({ id }) => id !== payload.id);
  
      default:
        return courses;
    }
  };
  
  export default courseReducer;