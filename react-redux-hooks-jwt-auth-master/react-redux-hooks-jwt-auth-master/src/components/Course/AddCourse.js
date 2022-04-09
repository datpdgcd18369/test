// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { createCourse } from "../../actions/Course";

// import { useHistory } from "react-router-dom";

// let history = useHistory();

// const AddCourse = () => {
//   const initialCourseState = {
//     id: null,
//     name: "",
//     year:"",
//     dateStart:"",
//     dataEnd:"",
//     description: "",
//   };
//   const [course, setCourse] = useState(initialCourseState);

//   const dispatch = useDispatch();

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setCourse({ ...course, [name]: value });
//   };

//   const saveCoursel  = () => {
//     const { name, year,dateStart,dateEnd,description } = course;

//     dispatch(createCourse( name, year,dateStart,dateEnd,description))
//       .then(data => {
//         setCourse({
//             id: data.id,
//             name: data.name,
//             year :data.year,
//             dateStart: data.dateStart,
//             dataEnd: data.dateEnd,
//             description: data.description,
//         });
//         console.log(data);
//         history.push("/Course/ListCrourse")
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

//   return (
//     <div className="submit-form">
//         <div>
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               required
//               value={course.name}
//               onChange={handleInputChange}
//               name="name"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="year">Year</label>
//             <input
//               type="text"
//               className="form-control"
//               id="year"
//               required
//               value={course.year}
//               onChange={handleInputChange}
//               name="year"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="dateStart">Start Day</label>
//             <input
//               type="text"
//               className="form-control"
//               id="dateStart"
//               required
//               value={course.dateStart}
//               onChange={handleInputChange}
//               name="dateStart"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="dateEnd">End Day</label>
//             <input
//               type="text"
//               className="form-control"
//               id="dateEnd"
//               required
//               value={course.title}
//               onChange={handleInputChange}
//               name="dateEnd"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="description">Description</label>
//             <input
//               type="text"
//               className="form-control"
//               id="description"
//               required
//               value={course.description}
//               onChange={handleInputChange}
//               name="description"
//             />
//           </div>

//           <button onClick={saveCoursel} className="btn btn-success">
//             Submit
//           </button>
//         </div>
//     </div>
//   );
// };

// export default AddCourse;