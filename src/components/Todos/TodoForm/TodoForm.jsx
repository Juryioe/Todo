import styles from './TodoForm.module.scss'
import Button from '../../UI/Button'
import { useState } from 'react'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (!text) return
    addTodo(text)
    setText('')
  }

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <input
        type="text"
        value={text}
        placeholder="Add a new task"
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" title="Add new task">
        Add
      </Button>
    </form>
  )
}

export default TodoForm
