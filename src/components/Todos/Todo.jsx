import styles from './Todo.module.scss'

function Todo({ todo, deleteTodo, index }) {
  return (
    <div className={styles.todoWrapper}>
      <h3>{todo}</h3>
      <h6 onClick={() => deleteTodo(index)}>delete</h6>
    </div>
  )
}

export default Todo
