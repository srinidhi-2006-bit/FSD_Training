import './App.css';
import { useState } from 'react';

import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import SearchStudent from './components/SearchStudent';
import StudentList from './components/StudentList';

let istudents = [
  { name: "Sri", age: 20, grade: "S" },
  { name: "Nidhi", age: 22, grade: "A" },
  { name: "Ram", age: 20, grade: "C" },
  { name: "abc", age: 21, grade: "B" },
  { name: "Yash", age: 23, grade: "S" }
];
function App() {
  const [students, setStudents] = useState(istudents);
  const [editIndex, setEditIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [ascending, setAscending] = useState(true);
  const [formData, setFormData] = useState({name: "",age: "",grade: ""});
  const handleDelete = (i) => {
    setStudents(students.filter((s, index) => index !== i));
  };
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value});
  };
  const handleAdd = () => {
    setStudents([...students, formData]);
    setFormData({name: "",age: "",grade: ""});
  };
  const handleEdit = (i) => {
    setEditIndex(i);
    setFormData(students[i]);
  };
  const handleUpdate = () => {
    const updatedStudents = students.map((s, i) =>i === editIndex ? formData : s);
    setStudents(updatedStudents);
    setEditIndex(null);
    setFormData({name: "",age: "",grade: ""});
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredStudents = students.filter((s) =>s.name.toLowerCase().includes(search.toLowerCase()));
  const sortedStudents = [...filteredStudents].sort((a, b) =>ascending
                                              ? a.name.localeCompare(b.name)
                                              : b.name.localeCompare(a.name));
  return (
    <div className="container mt-4">
      <div className="text-center">
        {editIndex === null 
          ? (<AddStudent formData={formData} handleChange={handleChange} handleAdd={handleAdd}/>) 
          : (<EditStudent formData={formData} handleChange={handleChange} handleUpdate={handleUpdate}/>)
        }
      </div>
      <h2 className="text-center mt-4">Student List</h2>
      <SearchStudent handleSearch={handleSearch} />
      <StudentList students={sortedStudents} ascending={ascending} setAscending={setAscending} handleEdit={handleEdit} handleDelete={handleDelete}/>
    </div>
  );
}
export default App;