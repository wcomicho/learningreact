import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super()
  
    this.state = {
        isUserLoggedIn: true
    }
  }
  
  render() {

      //One method
      //if(this.state.isUserLoggedIn==true){
      //    return  <div>Welcome user</div>
      //}else{
      //   return <div>Welcome guest</div>
      //}

      //another method
      //let message
      //if(this.state.isUserLoggedIn){
      //  message = <div>Welcome user</div>
      //}else{
      //  message = <div>Welcome guest</div>
      //}
      //return <div>{message}</div>
    
      //and another method
      //return this.state.isUserLoggedIn ?(
      //  <div>Welcome user</div>
      //) : (
      //  <div>Welcome guest</div>
      //)

      //and another method
      return this.state.isUserLoggedIn && <div>Welcome user</div>
      
  
  }
}

export default UserGreeting 