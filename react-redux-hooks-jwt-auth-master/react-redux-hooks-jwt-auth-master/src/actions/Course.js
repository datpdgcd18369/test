import {
  CREATE_COURSE,
  RETRIEVE_COURSES,
  UPDATE_COURSE,
  DELETE_COURSE,
} from "./types";

import CourseService from "../services/courseService";

export const createCourse = (name, year,dateStart,dataEnd,description) => async (dispatch) => {
  try {
    const res = await CourseService.create({ name, year,dateStart,dataEnd,description });
    dispatch({
      type: CREATE_COURSE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveCoursesbyId = (id) => async (dispatch) => {
  try {
    const res = await CourseService.getUpdate(id);
    dispatch({
      type: RETRIEVE_COURSES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveCourses = () => async (dispatch) => {
    try {
      const res = await CourseService.getAll();
      dispatch({
        type: RETRIEVE_COURSES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

export const updateCourse = (id, data) => async (dispatch) => {
  try {
    const res = await CourseService.update(id, data);

    dispatch({
      type: UPDATE_COURSE,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteCourse = (id) => async (dispatch) => {
  try {
    await CourseService.remove(id);

    dispatch({
      type: DELETE_COURSE,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
