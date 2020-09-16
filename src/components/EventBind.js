import React, { Component } from 'react'

class componentName extends Component {

    constructor(props) {
        super()

        this.state = {
            message: 'Hello! This is event binding in React'
        }

        this.method3 = this.method3.bind(this);
    }
    //recreated each time component re-renders
    method1 = () =>{
        this.setState({
            message: 'This is binding using method calling'
        },()=>{console.log('Done running method 1')});
    }

    //this method requires parenthesis in the onClick binding
    method2 = () =>{
        this.setState({
            message: 'This is by using an arrow function'
        },()=>{console.log('Done running method 2')});
    }

    //this method is like in the function component method
    method3 = () =>{
        this.setState({
            message: 'This is binding the event in the constructor'
        },()=>{console.log('Done running method 3')});
    }

    method4(){
        this.setState({
           message: 'Same call in method 1. Method is not an arrow function'
        });
    }

    render() {
        return (
            <div>
                <h1>Event Binding in React</h1>
                <h3>{this.state.message}</h3>
                <div>
                    <button onClick={this.method1.bind(this)}>Method 1</button>
                </div>

                <div>
                    <button onClick = {()=>this.method2()}>Method 2</button>

                </div>

                <div>
                    <button onClick={this.method3}>Method 3</button>
                </div>

                <div>
                    <button onClick={this.method4.bind(this)}>Method 4</button>
                </div>
            </div>
        )
    }
}

export default componentName
