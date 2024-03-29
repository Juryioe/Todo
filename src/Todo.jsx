import { useState, useEffect } from 'react'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { uid } from 'uid'
import './App.scss'
import TodoForm from './components/Todos/TodoForm/TodoForm'
import TodoList from './components/Todos/TodoList/TodoList'
import TodoCounter from './components/Todos/TodoCounter/TodoCounter'

function App() {
  const [todos, setTodos] = useState([])
  const [completedTodos, setCompletedTodos] = useState([])
  const [notCompletedTodos, setNotCompletedTodos] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [])
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

  const deleteCompletedTodoHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    setCompletedTodos(todos.filter((todo) => todo.isCompleted))
    setNotCompletedTodos(todos.filter((todo) => !todo.isCompleted))
  }, [todos])

  return (
    <div className="container">
      <div className="logoWrapper">
        <IoCheckmarkDoneCircleOutline size={'3rem'} className="logoIcon" />
        <h1>Todo app</h1>
      </div>
      <TodoForm addTodo={addTodoHandler} />
      <TodoCounter
        completedTodos={completedTodos}
        notCompletedTodos={notCompletedTodos}
        todos={todos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        deleteTodo={deleteTodoHandler}
        todoCompleted={todoCompletedHandler}
        deleteCompletedHandler={deleteCompletedTodoHandler}
      />
    </div>
  )
}

export default App
