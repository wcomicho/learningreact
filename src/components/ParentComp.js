import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
      super()
    
      this.state = {
         name: "Bruce"
      }
    }
   componentDidMount(){
       setInterval(()=>{
           this.setState({
               name: "Bruce"
           })
       })
   } 
  render() {
    console.log('************* Parent Component Render*************');
    return (
      <>
        <h1>Parent Compnonent: {this.state.name}</h1>
        <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
        <MemoComp/>
      </>
    )
  }
}

export default ParentComp

