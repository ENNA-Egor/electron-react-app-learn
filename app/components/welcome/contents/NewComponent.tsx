// import { count } from "console";
import React, {Component} from "react"


class NewContent extends Component {
  state = {
      count: 0
  };

  increment =() => {
    // @ts-ignore 
    this.setState((prevState)=>({count: prevState.count +1}), 
  () =>console.log ('State is completed plus')
  );
  } 
  decrement =() => {
    // @ts-ignore 
    this.setState((prevState)=>({count: prevState.count -1}), 
  () =>console.log ('State is completed minus')
  );
  } 
  render() {


    return (
      <div className="NewComp" style={{margin: 'auto',width: '300px'}}>
        <h1> New element in ElectronReactApp</h1>
        <button className="btn" onClick={this.increment}>+</button>
        <h1>{`Значение коунтера: ${this.state.count}`}</h1>
        <button className="btn" onClick={this.decrement}>-</button>
      </div>
    )

  }
}

export default NewContent
