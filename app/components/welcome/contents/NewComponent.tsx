// import { count } from "console";
import React, {Component} from "react"


class NewContent extends Component {
  state = {
      count: 0
  };

  HandelClickPlus =() => {
    // @ts-ignore 
    this.setState((prevState)=>({count: prevState.count +1}), 
  () =>console.log ('State is completed plus')
  );
  } 
  HandelClickMinus =() => {
    // @ts-ignore 
    this.setState((prevState)=>({count: prevState.count -1}), 
  () =>console.log ('State is completed minus')
  );
  } 
  render() {


    return (
      <div>
        <h1> New element in ElectronReactApp</h1>
        <button className="btn" onClick={this.HandelClickPlus}>+</button>
        <h1>{`Значение коунтера: ${this.state.count}`}</h1>
        <button className="btn" onClick={this.HandelClickMinus}>-</button>
      </div>
    )

  }
}

export default NewContent
