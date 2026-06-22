import './App.css';
import React from "react";
import FunctionalComponent from './FunctionalComponent';
import FunctionalComponentProps from './FunctionalComponentProps';

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <ClassComponentProps name="Srinidhi" />
      <FunctionalComponent />
      <FunctionalComponentProps name="nidhi"/>
      <StateComponent />
    </div>
  );
}
// Class Component
class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Class Component</h1>
      </div>
    );
  }
}
//props using class component
class ClassComponentProps extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

//state using class component
class StateComponent extends React.Component{
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  handleClick=()=>{
    this.setState(
      {
        count:this.state.count+1
      }
    )
  }
  render(){
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}
export default App;