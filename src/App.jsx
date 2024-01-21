import './App.scss'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import { useState } from 'react'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'

function App() {
  const [todos, setTodos] = useState([])

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem('todos'))
  //   if (storedTodos) {
  //     setTodos(storedTodos)
  //   }
  // }, [])

  const addTodoHandler = (text) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos, text]
      // localStorage.setItem('todos', JSON.stringify(newTodos))
      return newTodos
    })
  }

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index))
  }

  return (
    <div className="container">
      <div className="logoWrapper">
        <IoCheckmarkDoneCircleOutline size={'3rem'} className="logoIcon" />
        <h1>Todo app</h1>
      </div>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  )
}

export default App
