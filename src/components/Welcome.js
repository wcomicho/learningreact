import React, { Component } from 'react'

class Welcome extends Component {
  
  constructor(){
      super();
      this.state ={message: "Hello Wilbert"};

  }
  
  onClickSubscribe(){

    this.setState({

        message: "Thank you subscribing!"

    });

  }
  
  render() {
    //const {name, heroName} = this.props;
    //const {state1, state2} = this.state;
    const {message} = this.state;
    
    return (
      <>
        
        <h1>{message}</h1>
        <button onClick={()=>this.onClickSubscribe()}>Subscribe</button>

      </>
    )
  }
}
export default Welcome
