import React, { Component } from 'react'

class Counter extends Component {
  constructor(props){
    super();
    this.state = {
        count: 0
    }

  }
  increment(){
      
      //the commented lines below are working
      //this.setState({
      //    count: this.state.count + 1
      //},() => { console.log('Callback value', this.state.count)}); 

      //console.log('Async value of count:' + this.state.count);

      this.setState((prevState,props) => ({
            count: prevState.count + parseInt(props.iniCount)
      }));

      console.log(this.state.count);

  }

  incrementFive(){
      this.increment();
      this.increment();
      this.increment();
      this.increment();
      this.increment();
  }

  render() {
    return (
      <>
        <div>count - {this.state.count}</div>        
        <button onClick={ () => this.incrementFive() }>increment</button>
      </>
    )
  }
}

export default Counter
