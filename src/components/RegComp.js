import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log('Regular Component Render');
    return (
      <>
        Regular Component {this.props.name}
      </>
    )
  }
}

export default RegComp
