import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded'
import { Slide } from '@mui/material'
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import { uid } from 'uid'
import './App.scss'
import TodoCounter from './components/Todos/TodoCounter/TodoCounter'
import TodoForm from './components/Todos/TodoForm/TodoForm'
import TodoList from './components/Todos/TodoList/TodoList'

const App = () => {
  const [todos, setTodos] = useState([])
  const [completedTodos, setCompletedTodos] = useState([])
  const [notCompletedTodos, setNotCompletedTodos] = useState([])
  const [confDisplay, setConfDisplay] = useState(false)
  const { width, height } = useWindowSize()

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
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => !todo.isCompleted)
      if (filteredTodos.length === 0) {
        setConfDisplay(true)
      }
      return filteredTodos
    })
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    setCompletedTodos(todos.filter((todo) => todo.isCompleted))
    setNotCompletedTodos(todos.filter((todo) => !todo.isCompleted))
  }, [todos])

  useEffect(() => {
    if (confDisplay) {
      const timer = setTimeout(() => {
        setConfDisplay(false)
      }, 7000)

      return () => clearTimeout(timer)
    }
  }, [confDisplay])

  return (
    <div className="texture">
      {confDisplay && <Confetti width={width} height={height} />}
      <div className="container">
        <Slide direction="down" in mountOnEnter unmountOnExit timeout={500}>
          <div className="logoWrapper">
            <DoneAllRoundedIcon
              sx={{ fontSize: '45px', mr: 1, color: '#fdfdfd' }}
            />

            <h1>Task Up</h1>
          </div>
        </Slide>

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
          setConfDisplay={setConfDisplay}
        />
        <TodoForm addTodo={addTodoHandler} todos={todos} />
      </div>
    </div>
  )
}

export default App
