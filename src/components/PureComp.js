import React, { PureComponent } from 'react'


export default class PureComp extends PureComponent {
  
  /*
  Pure component does shallow comparison: props and state
  implements shouldComponentUpdate with a shallow props and state comparison
  Shallow comparison:SC
  SC of prevState with currentState
  SC of prevProps with currentPros

  Dont mutate state, always new object or array when dealing with pure components
  Good practice if parent is pure then children must be pure

  Primitive
    if a and b of the same value and type: will return true
  Complex 
    var a = [1,2,3];
    var b = [1,2,3];
    var c = a;
    var ab_eq = (a===b); // false
    var ac_eq = (a===b); // true

    var a = {x: 1, y: 2};
    var b = {x: 1, y: 2};
    var c = a;
    var ab_eq = (a===b); // false
    var ac_eq = (a===c); // true
  */ 
  render() {
    console.log('Pure Component Render');
    return (
      <>
        Pure Component {this.props.name}
      </>
    )
  }
}
