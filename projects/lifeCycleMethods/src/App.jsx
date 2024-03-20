import React, { Component } from 'react'

export default class App extends Component
 {
  constructor()
  {
    super();
    this.state={
      count:0
    }
  }
  componentDidMount()
  {
    console.log("Mounting happend")
  }
  shouldComponentUpdate()
  {
    console.log("should component update called")
    return true;
  }
  getSnapshotBeforeUpdate()
  {
    console.log("get snapchat called")
  }
  componentDidUpdate()
  {
    console.log("component updated")
  }
  render() {
    return (
      <div>
        <p>count:{ this.state.count}</p>
        <button onClick={() => this.setState((state) => ({ count: state.count + 1 }))}>+</button>
      </div>
    )
  }
}