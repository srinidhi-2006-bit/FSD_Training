function AddStudent({ formData, handleChange, handleAdd }) {
  return (
    <div>
      <h2 className="text-center mb-4">Add Student</h2>
      <input className="form-control m-2" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange}/>
      <input className="form-control m-2" name="age" placeholder="Enter Age" value={formData.age} onChange={handleChange}/>
      <input className="form-control m-2" name="grade" placeholder="Enter Grade" value={formData.grade} onChange={handleChange}/>
      <button className="btn btn-primary m-2" onClick={handleAdd}>Add Student</button>
    </div>
  );
}
export default AddStudent;