function TodoCounter({ completedTodos, notCompletedTodos, todos }) {
  return (
    !!todos.length && (
      <div
        style={{
          marginTop: '35px',
          color: '#d0c6ee',
          display: 'flex',
          gap: '30px',
          fontSize: '.9rem',
        }}
      >
        <h4>
          {(!completedTodos.length && 'Nothing done yet!') ||
            `Completed ${completedTodos.length} todo${
              completedTodos.length > 1 ? 's' : ''
            } `}
        </h4>

        <h4>
          Active {notCompletedTodos.length} todo
          {notCompletedTodos.length > 1 ? 's' : ''}
        </h4>
      </div>
    )
  )
}

export default TodoCounter
