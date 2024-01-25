import styles from './Button.module.scss'

function ButtonAdd({ onClick, children, title, disabled = false }) {
  return (
    <button
      className={styles.btnAdd}
      onClick={onclick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default ButtonAdd
