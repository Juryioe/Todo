const TodoCounter = ({ completedTodos, notCompletedTodos, todos }) => {
  return (
    !!todos.length && (
      <div
        style={{
          marginTop: '35px',
          color: '#858585',
          display: 'flex',
          padding: '10px 20px',
          gap: '30px',
          fontSize: '.9rem',
          border: '1px solid #ededed',
          borderRadius: '20px',
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
