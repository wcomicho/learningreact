import React from 'react'

const clickHandler = () => {
    console.log('Button Clicked');
}


const FunctionClick = () => {
  return (
    <>
      <button onClick={clickHandler}>Click</button>
    </>
  )
}

export default FunctionClick

