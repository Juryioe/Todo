import './App.scss'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import { useState, useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [])

  const addTodoHandler = (text) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos, text]
      localStorage.setItem('todos', JSON.stringify(newTodos))
      console.log('todos ===', todos)
      console.log('newtodos ===', newTodos)

      return newTodos
    })
  }

  return (
    <div className="container">
      <h1>Todo app</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
