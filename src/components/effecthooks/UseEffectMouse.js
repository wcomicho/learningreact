import React,{useState, useEffect} from 'react'

const HookMouse = () => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [display, setDisplay] = useState(true);

    const logMousePosition = e =>{
        console.log('Mouse event');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        console.log("useEffect called");
        window.addEventListener('mousemove', logMousePosition);

        /*Cleanup function below*/
        return() => {
            window.removeEventListener('mousemove', logMousePosition);
        }
        /*
        [] Empty array: Component did mount
        [count] will update if the count value changes
        No array value will rerender
        */
    },[])

  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle display</button>  
    
        {display && `X ${x} Y - ${y}`}
    
    </div>
  )
}
export default HookMouse





