import React, {useState} from 'react';


function HookCounter() {
    const [count, setCount] = useState(0)

  /*
  Only call hooks at the Top level
  Don't call hooks inside loops, conditions, or nested functions

  Only Call hooks from React Functions
  Call them from within React functional components and not just nay regular JavaScript function
  */
  return (
    <div>
        <h1>Hook Counter</h1>
        <button onClick={() => setCount(count + 1)}> Count {count} </button>
    </div>
  );
}
export default HookCounter