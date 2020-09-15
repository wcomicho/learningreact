import React, { PureComponent } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       parentName: 'ParentName'
    }
    this.greetParent = this.greetParent.bind(this);
  }


  greetParent(childName){
      alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <>
        <ChildComponent greetHandler={this.greetParent}/>

      </>
    )
  }
}

export default ParentComponent