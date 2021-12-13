import React, { Component } from "react";
let pValue = document.querySelector("#para");
console.log(pValue);
class MainClass extends Component {
  state = {
    counter: 0,
    text: "hello world",
  };
  addOneHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  addFiveHandler = () => {
    this.setState({
      counter: this.state.counter + 5,
    });
  };
  subtractOneHandler = () => {
    if (this.state.counter !== 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };
  subtractFiveHandler = () => {
    if (this.state.counter !== 0) {
      this.setState({
        counter: this.state.counter - 5,
      });
    }
  };
  resetHandler = () => {
    this.setState({
      counter: 0,
    });
  };
  render() {
    let circleClass = "";
    if (this.state.counter === 0) {
      circleClass = "circle";
    } else if (this.state.counter % 2 === 0) {
      circleClass = "circle even";
    } else {
      circleClass = "circle odd";
    }
    return (
      <main>
        <p className={circleClass}><p>{this.state.counter}</p></p>

        <div className="arraybutton">
          <button onClick={this.addOneHandler}>Add one</button>
          <button onClick={this.resetHandler}>Reset</button>
          <button onClick={this.subtractOneHandler}>Remove one</button>
          <button onClick={this.addFiveHandler}>Add Five</button>
          <button onClick={this.subtractFiveHandler}>Remove Five</button>
        </div>
      </main>
    );
  }
}
export default MainClass;
