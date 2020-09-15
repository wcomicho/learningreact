import React from 'react';


//<button onClick={props.greetHandler}>Greet Parent</button>   
function ChildComponent(props) {
  return (
    <>
        <button onClick={() => props.greetHandler('Child')}>Greet Parent</button>   
    </>
  );
}

export default ChildComponent