import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
  constructor(props) {
    super()
  
    this.componentRef = React.createRef();
  }
  
  clickHandler = () =>{
    this.componentRef.current.focusInput();
  }

  clickHandler1 =()=>{
    let val = this.componentRef.current.showValue();
    alert(val);
  }

  render() {
    return (
      <div>
        <div>
        <Input ref = {this.componentRef}/>
        </div>
        <div>
            <button onClick = {this.clickHandler}>Focus Input</button>
        </div>
        <div>
            <button onClick = {this.clickHandler1}>Focus Input</button>
        </div>
      </div>
    )
  }
}

export default FocusInput
