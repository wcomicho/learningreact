import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super()
  
    this.inputRef = React.createRef()
  }
  
  focusInput = () => {
    this.inputRef.current.focus();
  }

  showValue = () => {
      return this.inputRef.current.value;
  }

  render() {
    return (
      <>
        <input type="text" ref={this.inputRef}/>
      </>
    )
  }
}

export default Input
