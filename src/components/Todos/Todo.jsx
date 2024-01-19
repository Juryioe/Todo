import styles from './Todo.module.scss'

function Todo({ todo }) {
  return (
    <div className={styles.todoWrapper}>
      <h3>{todo}</h3>
    </div>
  )
}

export default Todo
