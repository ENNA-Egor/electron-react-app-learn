// import { count } from "console";
import React, {Component} from "react"


class NewContent extends Component {
  state = {
      count: 0
  };

  HandelClick =() => {
    // @ts-ignore 
    this.setState((prevState)=>({count: prevState.count +1}), 
  () =>console.log ('State is completed')
  );
  } 
  render() {


    return (
      <div>
        <h1> New element in ElectronReactApp</h1>
        <button className="btn" onClick={this.HandelClick}>{this.state.count}</button>
      </div>
    )

  }
}

export default NewContent
