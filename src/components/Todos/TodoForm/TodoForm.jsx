import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
import { IconButton } from '@mui/material'
import { useState } from 'react'
import styles from './TodoForm.module.scss'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const [display, setDisplay] = useState(true)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (!text) return
    setDisplay(false)
    addTodo(text)
    setText('')
  }

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
        <AddCircleRoundedIcon sx={{ color: 'primary', fontSize: 40 }} />
      </IconButton>
    </form>
  )
}

export default TodoForm
