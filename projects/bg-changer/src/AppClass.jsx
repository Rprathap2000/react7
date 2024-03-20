// AppClass.jsx
import React, { Component } from "react";
import './App.css';

class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      background: '#FFFFFF'
    };
  }

  change = () => {
    const random_color = "#" + Math.round(Math.random() * 10000000).toString(16);
    this.setState({ background: random_color });
  }

  render() {
    return (
      <div className='changer' style={{ backgroundColor: this.state.background }}>
        <button onClick={this.change}>change</button>
      </div>
    );
  }
}

export default AppClass;