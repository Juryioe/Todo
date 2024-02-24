function TodoCounter({ completedTodos, notCompletedTodos, todos }) {
  return (
    !!todos.length && (
      <div
        style={{
          marginTop: '35px',
          color: '#d0c6ee',
          display: 'flex',
          gap: '30px',
          fontSize: '1rem',
        }}
      >
        <div>
          {(!completedTodos.length && 'Nothing done yet!') ||
            `Completed ${completedTodos.length} todo${
              completedTodos.length > 1 ? 's' : ''
            } `}
        </div>

        <div>
          Active {notCompletedTodos.length} todo
          {notCompletedTodos.length > 1 ? 's' : ''}
        </div>
      </div>
    )
  )
}

export default TodoCounter
