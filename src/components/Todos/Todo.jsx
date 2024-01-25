import { RiTodoFill } from 'react-icons/ri'
import { TiDelete } from 'react-icons/ti'
import { MdOutlineDone } from 'react-icons/md'

import styles from './Todo.module.scss'

function Todo({ todo, deleteTodo, todoCompleted }) {
  return (
    <div className={styles.todoWrapper}>
      <div className={styles.taskWrapper}>
        <RiTodoFill
          className={
            todo.isCompleted ? styles.completedtodoIcon : styles.todoIcon
          }
        />
        <h3 className={todo.isCompleted ? styles.completedTask : styles.task}>
          {todo.text}
        </h3>
      </div>
      <div className={styles.buttons}>
        <MdOutlineDone
          className={styles.completeIcon}
          size={'1.5rem'}
          onClick={() => todoCompleted(todo.id)}
        />
        <TiDelete
          size={'1.7rem'}
          className={styles.deleteIcon}
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  )
}

export default Todo
