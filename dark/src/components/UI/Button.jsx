function Button({ onClick, children, title, disabled = false }) {
  return (
    <button onClick={onclick} title={title} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
