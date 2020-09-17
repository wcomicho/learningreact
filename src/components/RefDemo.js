import React, { Component } from 'react'

class RefDemo extends Component {
  constructor(props) {
    super();
  
    this.inputRef = React.createRef();

    /*Old method*/
    this.cbRef = null;
    this.setCbRef = element =>{
        this.cbRef = element;
    }
  }
  
  componentDidMount(){
      console.log(this.inputRef);
      this.inputRef.current.focus();

  }

  clickHandler = () =>{
      this.inputRef.current.focus();  
  }

  clickHandler2 =() =>{
      alert(`This is the value of the input element ${this.inputRef.current.value}`)
  }

  clickHandler3 = () =>{
    if(this.cbRef){
        this.cbRef.focus();
    }
  }

  render() {
    return (
      <>
        <div>
        <label>First Input Box: </label>
        <input type="text" ref={this.inputRef}></input>    
        </div>
        <div>
        <label>2nd Input Box: </label>
        <input type="text" ref={this.setCbRef}></input>    
        </div>
        <div>
        <button onClick={this.clickHandler}>Focus on the input box</button>
        </div>
        <div>
        <button onClick={this.clickHandler2}>Show the Value of the input element</button>    
        </div>
        <div>
        <button onClick={this.clickHandler3}>Focus on the 2nd input box</button>    
        </div>
      </>
    )
  }
  
}

export default RefDemo
