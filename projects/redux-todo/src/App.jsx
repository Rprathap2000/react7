import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { ADDTODO } from './Redux/actions'
const App = () =>
{
  const [todoText, setTodoText] = useState('')
  const todos= useSelector((state)=>state.todos)
  const dispatch= useDispatch()
  return (
    <div>
      <input type="text"  onChange={(e)=>setTodoText(e.target.value)}/>
      <button onClick={() => dispatch(ADDTODO(Math.random() * 1000, todoText))}>Add</button>
      <div>
        {todos && todos.map((todo,index) => (
          <p key={index}>{todo.id}  {todo.text}</p>
        ))}
      </div>
    </div>
  )
}

export default App
