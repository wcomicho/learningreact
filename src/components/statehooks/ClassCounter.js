import React, { Component } from 'react'


class ClassCounter extends Component {
    constructor(props) {
      super()
    
      this.state = {
         count: 0
      }
    }

    incrementCount = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

  render() {
    return (
      <div>
        <h1>Class counter</h1>
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
      </div>

)
  }
}

export default ClassCounter
