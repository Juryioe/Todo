import { Cached, Delete } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useState } from 'react'
import Modal from '../../Modal/Modal'
import styles from './TodoActions.module.scss'

const TodosActions = ({ setTodos, deleteCompletedHandler }) => {
  const [modalDisplay, setModalDisplay] = useState(false)
  return (
    <>
      {modalDisplay && (
        <Modal
          setTodos={setTodos}
          modalDisplay={modalDisplay}
          setModalDisplay={setModalDisplay}
        />
      )}
      <div className={styles.todoActionsContainer}>
        <IconButton
          aria-label="delete"
          size="medium"
          title="Reset all task"
          onClick={() => setModalDisplay(true)}
        >
          <Cached fontSize="inherit" />
        </IconButton>
        <IconButton
          aria-label="delete"
          size="medium"
          title="Delete completed tasks"
          onClick={deleteCompletedHandler}
        >
          <Delete fontSize="inherit" />
        </IconButton>
      </div>
    </>
  )
}

export default TodosActions
