import { LuRefreshCcw } from 'react-icons/lu'
import { AiFillDelete } from 'react-icons/ai'

import styles from './TodoActions.module.scss'

function TodosActions({ setTodos, deleteCompletedHandler }) {
  return (
    <div className={styles.todoActionsContainer}>
      <button
        className={styles.button}
        title="Reset all task"
        onClick={() => setTodos([])}
      >
        <LuRefreshCcw />
      </button>
      <button
        className={styles.button}
        title="Delete completed tasks"
        onClick={deleteCompletedHandler}
      >
        <AiFillDelete />
      </button>
    </div>
  )
}

export default TodosActions
