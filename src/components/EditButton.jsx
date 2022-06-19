import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  MenuButton,
  Button
} from '@chakra-ui/react'

import EditEventForm from './EditEventForm'

export default function EditButton({ id }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Button colorScheme='blue' onClick={onOpen}>Edit</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        
        <ModalContent>
          <ModalHeader>Edit Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditEventForm id={id} onClose={onClose}></EditEventForm>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}