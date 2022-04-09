// import React, { useState ,useEffect} from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateCourse ,retrieveCoursesbyId} from "../../actions/Course";

// import { useHistory,useParams  } from "react-router-dom";

// let history = useHistory();
// const { id } = useParams();

// const EditCourse = () => {
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
   
//   const onSubmit = async e => {
//     e.preventDefault();
//     await axios.put(`http://localhost:3003/users/${id}`, user);
//     history.push("/");
//   };

//   const getUpdate = async () => {
//     const result = await axios.get(`http://localhost:3003/users/${id}`);
//     setUser(result.data);
//   };


//   useEffect(() => {
//     dispatch(retrieveCoursesbyId(id));
//     setCourse(courses)
//   }, []);
//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setCourse({ ...course, [name]: value });
//   };
 
//   const saveCoursel  = () => {
//     dispatch(updateCourse(id,course))
//       .then(data => {
//         console.log(data);
//         history.push("/Course/ListCrourse")
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };


//   return (
//     <div className="submit-form">
//     <div>
//       <div className="form-group">
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           className="form-control"
//           id="name"
//           required
//           value={course.name}
//           onChange={handleInputChange}
//           name="name"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="year">Year</label>
//         <input
//           type="text"
//           className="form-control"
//           id="year"
//           required
//           value={course.year}
//           onChange={handleInputChange}
//           name="year"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="dateStart">Start Day</label>
//         <input
//           type="text"
//           className="form-control"
//           id="dateStart"
//           required
//           value={course.dateStart}
//           onChange={handleInputChange}
//           name="dateStart"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="dateEnd">End Day</label>
//         <input
//           type="text"
//           className="form-control"
//           id="dateEnd"
//           required
//           value={course.dateEnd}
//           onChange={handleInputChange}
//           name="dateEnd"
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="description">Description</label>
//         <input
//           type="text"
//           className="form-control"
//           id="description"
//           required
//           value={course.description}
//           onChange={handleInputChange}
//           name="description"
//         />
//       </div>
//       <button onClick={saveCoursel} className="btn btn-success">
//         Edit
//       </button>
//     </div>
// </div>
// );
// };

// export default EditCourse;