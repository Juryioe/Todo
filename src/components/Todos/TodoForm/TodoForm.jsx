import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
import { IconButton } from '@mui/material'
import { useEffect, useState } from 'react'
import styles from './TodoForm.module.scss'

const TodoForm = ({ addTodo, todos }) => {
  const [text, setText] = useState('')
  const [display, setDisplay] = useState(true)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (!text) return
    setDisplay(false)
    addTodo(text)
    setText('')
  }

  useEffect(() => {
    if (todos.length === 0) {
      setDisplay(true)
    }
  }, [todos])

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      {display && (
        <input
          type="text"
          value={text}
          placeholder="What should be done?"
          onChange={(e) => setText(e.target.value)}
        />
      )}
      <IconButton
        color="secondary"
        aria-label="delete"
        size="inherit"
        type="submit"
        onClick={() => setDisplay(true)}
      >
        <AddCircleRoundedIcon sx={{ color: 'secondary', fontSize: 40 }} />
      </IconButton>
    </form>
  )
}

export default TodoForm
