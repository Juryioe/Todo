import Todo from '../Todo/Todo'
import TodosActions from '../TodoActions/TodosActions'
import styles from './TodoList.module.scss'

const TodoList = ({
  todo,
  todos,
  deleteTodo,
  todoCompleted,
  setTodos,
  deleteCompletedHandler,
  setConfDisplay,
}) => {
  return (
    <div className={styles.todoListContainer}>
      <div className={styles.actionsContainer}>
        {todos.length > 0 && (
          <TodosActions
            setTodos={setTodos}
            todo={todo}
            deleteCompletedHandler={deleteCompletedHandler}
            setConfDisplay={setConfDisplay}
            todos={todos}
          />
        )}
      </div>
      {todos
        .sort((a, b) => a.isCompleted - b.isCompleted)
        .map((todo) => (
          <div key={todo.id}>
            <Todo
              todo={todo}
              deleteTodo={deleteTodo}
              todoCompleted={todoCompleted}
              setConfDisplay={setConfDisplay}
            />
          </div>
        ))}
    </div>
  )
}

export default TodoList
