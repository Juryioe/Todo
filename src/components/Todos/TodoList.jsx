import styles from './TodoList.module.scss'
import Todo from './Todo'

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {todos.map((todo, index) => (
        <div key={index}>
          <Todo index={index} todo={todo} deleteTodo={deleteTodo} />
        </div>
      ))}
    </div>
  )
}

export default TodoList
