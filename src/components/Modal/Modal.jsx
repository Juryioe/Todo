import { Box, Button, Modal, Typography } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 335,
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  p: 3,
  color: '#707070',
}

const BasicModal = ({ modalDisplay, setModalDisplay, setTodos }) => {
  const handleRemove = () => {
    setTodos([])
    setModalDisplay(false)
  }
  return (
    <Modal
      open={modalDisplay}
      onClose={() => setModalDisplay(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" textAlign="center">
          Do you want to reset all tasks?
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 3, justifyContent: 'center' }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setModalDisplay(false)}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleRemove}
            sx={{ zIndex: 5000 }}
          >
            Remove
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default BasicModal
