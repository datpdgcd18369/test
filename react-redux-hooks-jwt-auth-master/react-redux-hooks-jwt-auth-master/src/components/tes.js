// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   retrieveCourses,
//   deleteCourse
// } from "../actions/Course";
// import { Link } from "react-router-dom";


// const TutorialsList = () => {
//   const courses = useSelector(state => state.courses);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(retrieveCourses());
//   }, []);


//   const removeCourse = (id) => {
//     dispatch(deleteCourse(id))
//       .then(() => {
//         dispatch(retrieveCourses());
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };


//   return (
//     <div className="container">
//       <div className="py-4">
//         <h1>Courses List</h1>
//         <table class="table border shadow">
//           <thead class="thead-dark">
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Name</th>
//               <th scope="col">Year</th>
//               <th scope="col">Start Day</th>
//               <th scope="col">End Day</th>
//               <th scope="col">Description</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {courses.map((course, index) => (
//               <tr>
//                 <th scope="row">{index + 1}</th>
//                 <td>{course.name}</td>
//                 <td>{course.year}</td>
//                 <td>{course.dateStart}</td>
//                 <td>{course.dateEnd}</td>
//                 <td>{course.description}</td>
//                 <td>
//                   <Link class="btn btn-primary mr-2" to={`/Course/${course.id}`}>
//                   Edit
//                   </Link>
//                   <Link
//                     class="btn btn-outline-primary mr-2"
//                     to={`/course/edit/${course.id}`}
//                   >
//                     Edit
//                   </Link>
//                   <Link
//                     class="btn btn-danger"
//                     onClick={() => removeCourse(course.id)}
//                   >
//                     Delete
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TutorialsList;