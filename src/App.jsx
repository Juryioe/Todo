import './App.scss'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import { useState } from 'react'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { uid } from 'uid'

function App() {
  const [todos, setTodos] = useState([])
  const [completedTodos, setCompletedTodos] = useState([])

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem('todos'))
  //   if (storedTodos) {
  //     setTodos(storedTodos)
  //   }
  // }, [])

  const addTodoHandler = (text) => {
    const newTodo = { text: text, isCompleted: false, id: uid() }
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const todoCompletedHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  console.log(todos)

  return (
    <div className="container">
      <div className="logoWrapper">
        <IoCheckmarkDoneCircleOutline size={'3rem'} className="logoIcon" />
        <h1>Todo app</h1>
      </div>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        todoCompleted={todoCompletedHandler}
        completedTodos={completedTodos}
      />
    </div>
  )
}

export default App
