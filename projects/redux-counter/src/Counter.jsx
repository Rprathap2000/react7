import React from 'react'
import { increment, decreement } from './Redux/actions'
import { add,subtract } from './Redux/actions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
const Counter = () =>
{
  const count = useSelector((state) => state.c1.count)
  const c= useSelector((x)=>x.c2.count2)
    const dispatch=useDispatch()
  return (
    <div>
      <p>Count:{count}</p>
      <p>Count2:{c}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(add())}>add</button>
      <button onClick={()=>dispatch(subtract())}>subtract</button>
          <button onClick={()=>dispatch(decreement())}>-</button>
    </div>
  )
}

export default Counter
