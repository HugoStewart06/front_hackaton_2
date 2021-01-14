import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

const ModalExampleModal = (props, info) => {
  const [open, setOpen] = React.useState(false)
  return (
      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
      >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <img src={props.info.image} alt={props.info.nom}></img>
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal
