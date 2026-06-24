function EditStudent({ formData, handleChange, handleUpdate }) {
  return (
    <div>
      <h2 className="text-center mb-4">Update Student</h2>
      <input className="form-control m-2" name="name" value={formData.name} onChange={handleChange}/>
      <input className="form-control m-2" name="age" value={formData.age} onChange={handleChange}/>
      <input className="form-control m-2" name="grade" value={formData.grade} onChange={handleChange}/>
      <button className="btn btn-success m-2" onClick={handleUpdate}>Update Student</button>
    </div>
  );
}
export default EditStudent;