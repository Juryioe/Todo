import styles from './TodoList.module.scss'
import Todo from './Todo'

function TodoList({ todos, deleteTodo, completedTodos, todoCompleted }) {
  return (
    <div className={styles.todoListContainer}>
      {!!todos.length && (
        <div className={styles.status}>
          <div>Active: {todos.length - completedTodos.length}</div>
          <div>Completed: {completedTodos.length}</div>
        </div>
      )}

      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo
            todo={todo}
            deleteTodo={deleteTodo}
            todoCompleted={todoCompleted}
          />
        </div>
      ))}
    </div>
  )
}

export default TodoList
