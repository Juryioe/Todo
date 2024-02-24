import { Cached, Delete } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import styles from './TodoActions.module.scss'

function TodosActions({ setTodos, deleteCompletedHandler }) {
  return (
    <div className={styles.todoActionsContainer}>
      <IconButton
        aria-label="delete"
        size="medium"
        title="Reset all task"
        onClick={() => setTodos([])}
      >
        <Cached fontSize="inherit" />
      </IconButton>
      <IconButton
        aria-label="delete"
        size="medium"
        title="Delete completed tasks"
        onClick={deleteCompletedHandler}
      >
        <Delete fontSize="inherit" />
      </IconButton>
    </div>
  )
}

export default TodosActions
