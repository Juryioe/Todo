import { RiTodoFill } from 'react-icons/ri'
import { TiDelete } from 'react-icons/ti'

import styles from './Todo.module.scss'

function Todo({ todo, deleteTodo, index }) {
  return (
    <div className={styles.todoWrapper}>
      <div className={styles.taskWrapper}>
        <RiTodoFill className={styles.todoIcon} />
        <h3 className={styles.task}>{todo}</h3>
      </div>
      <TiDelete
        size={'1.7rem'}
        className={styles.deleteIcon}
        onClick={() => deleteTodo(index)}
      />
    </div>
  )
}

export default Todo
