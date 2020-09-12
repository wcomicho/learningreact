import React, { Component } from 'react'

class ClassClick extends Component {
  
  clickHandler1 = () => {
        alert("Clicked");
        console.log('Button Clicked');
  }
    
  render() {
    return (
      <div>
        <button onClick={this.clickHandler1}>Click Me</button>    
      </div>
    )
  }
}

export default ClassClick