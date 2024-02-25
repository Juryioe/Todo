import { Grow } from '@mui/material'
import { RiTodoFill } from 'react-icons/ri'
import { TiDelete } from 'react-icons/ti'
import styles from './Todo.module.scss'

const Todo = ({ todo, deleteTodo, todoCompleted }) => (
  <Grow in mountOnEnter unmountOnExit timeout={500}>
    <div className={styles.todoWrapper}>
      <div className={styles.taskWrapper}>
        <RiTodoFill
          className={
            todo.isCompleted ? styles.completedtodoIcon : styles.todoIcon
          }
          onClick={() => todoCompleted(todo.id)}
        />
        <h3
          className={todo.isCompleted ? styles.completedTask : styles.task}
          onClick={() => todoCompleted(todo.id)}
        >
          {todo.text}
        </h3>
      </div>
      <div className={styles.buttons}>
        <TiDelete
          size={'1.7rem'}
          className={styles.deleteIcon}
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  </Grow>
)

export default Todo
