import React,{useContext} from 'react'
import { CountContext } from '../../App'

const RedComponent1 = () => {
    const countContext = useContext(CountContext)

  return (
    <div>
        RedComponent1 {countContext.countState}
        <button onClick={()=> countContext.countDispatch('increment')}>Increment</button>
        <button onClick={()=> countContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={()=> countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default RedComponent1
