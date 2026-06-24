import './App.css';
import {useState } from 'react';

let istudents=[{name:"Sri",age:20,grade:"S"},
              {name:"Nidhi",age:22,grade:"A"},
              {name:"Ram",age:20,grade:"C"},
              {name:"abc",age:21,grade:"B"},
              {name:"Yash",age:23,grade:"S"}]
function App() {
  let [students,setStudents]=useState(istudents);
  let [editIndex,setEditIndex]=useState(null);
  let [search,setSearch]=useState("")
  let [formData,setFormData]=useState({name:"",age:"",grade:""});
  let [ascending,setAscending]=useState(true)
  const handleDelete=(i)=>{
    const updatedStudents=students.filter((s,index)=>index!==i)
    setStudents(updatedStudents)
  }
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleAdd=()=>{
    setStudents([...students,formData])
    setFormData({name:"",age:"",grade:""})
  }
  const handleEdit=(i)=>{
    setEditIndex(i)
    setFormData(students[i])
  }
  const handleUpdate=()=>{
    const updatedStudents=students.map((s,i)=>i===editIndex ? formData:s)
    setStudents(updatedStudents)
    setEditIndex(null)
    setFormData({name:"",age:"",grade:""})
  }
  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }
  const filteredStudents=students.filter((s)=>s.name.toLowerCase().includes(search.toLowerCase()))
  const sortedStudents=[...filteredStudents].sort((a,b)=>ascending ? a.name.localeCompare(b.name)
                                                                   : b.name.localeCompare(a.name))
  return (
    <div className="App">
      <div className="form text-center">
        <h2 className="text-center mb-4">{editIndex==null ?"Add Student":"Update Student"}</h2>
        <input className="form-control m-2" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange}></input>
        <input className="form-control m-2" name="age" placeholder="Enter Age"value={formData.age} onChange={handleChange}></input>
        <input className="form-control m-2" name="grade" placeholder="Enter Grade"value={formData.grade} onChange={handleChange}></input>
        {editIndex==null
         ? <button className="btn btn-primary m-2" onClick={()=>handleAdd()}>Add Student</button>
         :<button className="btn btn-primary m-2" onClick={()=>handleUpdate()}>Update Student</button>
        }
      </div>
      <h2 className="text-center mt-4">Student List</h2>
      <input className="form-control" name="search" placeholder="Type to search" onChange={(e)=>handleSearch(e)}></input>
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th style={{cursor:"pointer"}} onClick={()=>setAscending(!ascending)}>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((s,index)=>
          <tr><td>{s.name}</td><td>{s.age}</td><td>{s.grade}</td>
          <td><button className="btn btn-primary btn-sm m-2" onClick={()=>handleEdit(index)}>Edit</button>
          <button className="btn btn-danger btn-sm m-2" onClick={()=>handleDelete(index)}>Delete</button></td></tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
