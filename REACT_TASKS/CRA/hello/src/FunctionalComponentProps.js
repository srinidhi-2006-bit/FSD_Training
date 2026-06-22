//props using functional components
/*
function FunctionalComponentProps(props) {
  return (
    <div>

      <h1>Hello {props.name}</h1>
    </div>
  );
}
export default FunctionalComponentProps;
*/

function FunctionalComponentProps({ name }) {
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}

export default FunctionalComponentProps;
