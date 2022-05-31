import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   category: "",
   description: "",
   skills: "",
   classes: "",
   career: ""
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", category: "", description: "", skills: "", classes: "", careers: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="category">Category</label>
         <input
           type="text"
           className="form-control"
           id="category"
           value={form.category}
           onChange={(e) => updateForm({ category: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="description">Description</label>
         <input
           type="text"
           className="form-control"
           id="description"
           value={form.description}
           onChange={(e) => updateForm({ description: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="skills">Skills</label>
         <input
           type="text"
           className="form-control"
           id="skills"
           value={form.skills}
           onChange={(e) => updateForm({ skills: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="classes">Classes</label>
         <input
           type="text"
           className="form-control"
           id="classes"
           value={form.classes}
           onChange={(e) => updateForm({ classes: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="careers">Careers</label>
         <input
           type="text"
           className="form-control"
           id="careers"
           value={form.careers}
           onChange={(e) => updateForm({ careers: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create person"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}