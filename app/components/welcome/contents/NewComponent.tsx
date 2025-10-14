// import { count } from "console";
import React, {Component} from "react"


class NewContent extends Component {
  state = {
      count: 0
  };

  HandelClick =() => {
    this.setState({count: this.state.count +1})
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
