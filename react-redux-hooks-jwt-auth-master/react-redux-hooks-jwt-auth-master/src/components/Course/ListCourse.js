import React, {  useEffect,useState } from "react";

import { Link } from "react-router-dom";
import CourseService from "../../services/courseService";


const TutorialsList = () => {

  const [courses, setSourses] = useState([]);
  useEffect(() => {
    retrieveCourses();
  }, []);

  const retrieveCourses = () => {
    CourseService.getAll()
      .then(response => {
        setSourses(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const removeCourse = (id) => {
    CourseService.remove(id)
      .then(response => {
        console.log(response.data);
      setSourses(["response"]);
      })
      .catch(e => {
        console.log(e);
      });
  };


  return (
    <div className="container">
      <div className="py-4">
        <h1>Courses List</h1>
        {/* <Link class="btn btn-primary mr-2" to={`/Course/AddCourse`}>    Add</Link> */}
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Year</th>
              <th scope="col">Start Day</th>
              <th scope="col">End Day</th>
              <th scope="col">Description</th>
              <th scope="col">Id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {courses.map((course, index) => (
              <tr>
                <th scope="row">{index + 1}</th>

                <td>{course.name}</td>
                <td>{course.year}</td>
                <td>{course.dateStart}</td>
                <td>{course.dateEnd}</td>
                <td>{course.description}</td>
                <td> {course._id}</td>
                <td>
                  {/* <Link class="btn btn-primary mr-2" to={`/Course/Edit/`+ course.id}>
                  Edit
                  </Link> */}
                  <button 
                    class="btn btn-danger"
                    onClick={() => removeCourse(course._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TutorialsList;