import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/admin/";


const create = (data) => {
    return axios.post(API_URL + 'Course', { headers: authHeader() },
    {data});
  };
  
  const getAll = () => {
    return axios.get(API_URL + 'Course', { headers: authHeader() },  );
  };
  const getUpdate = (id) => {
    return axios.get(API_URL + 'Course', { headers: authHeader() },id);
  };
  
  const update = (id,data) => {
    return axios.post(API_URL + 'Course/${id}', { headers: authHeader() },data);
  };

  const remove = (id) => {
    return axios.delete(API_URL + 'Course/${id}', { headers: authHeader()});
  };

const CourseService = {
  getAll,
  create,
  update,
  remove,
  getUpdate
};

export default CourseService;