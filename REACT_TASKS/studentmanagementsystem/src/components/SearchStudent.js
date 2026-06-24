function SearchStudent({ handleSearch }) {
  return (
    <input className="form-control" placeholder="Search Student" onChange={handleSearch}/>
  );
}
export default SearchStudent;