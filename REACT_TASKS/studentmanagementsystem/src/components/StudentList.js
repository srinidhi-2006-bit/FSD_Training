function StudentList({students,ascending,setAscending,handleEdit,handleDelete}) 
{
  return (
    <table className="table table-bordered mt-4">
      <thead>
        <tr>
          <th style={{ cursor: "pointer" }} onClick={() => setAscending(!ascending)}>Name</th>
          <th>Age</th>
          <th>Grade</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s, index) => (
          <tr key={index}>
            <td>{s.name}</td>
            <td>{s.age}</td>
            <td>{s.grade}</td>
            <td>
              <button className="btn btn-primary btn-sm m-2" onClick={() => handleEdit(index)}>Edit</button>
              <button className="btn btn-danger btn-sm m-2" onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default StudentList;