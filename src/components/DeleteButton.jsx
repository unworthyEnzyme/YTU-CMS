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

import displayedDraftEventsState from '../GlobalStates/displayedEvents'
import { useRecoilState } from 'recoil'

export default function DeleteButton({ id }) {
  const [displayedEvents, setDisplayedEvents] = useRecoilState(displayedDraftEventsState)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const jwt = localStorage.getItem("jwt")

  const deleteEventHandler = (e) => {
    fetch(`http://localhost:8080/api/events/${id}`, {
      method: "delete",
      headers: {
        "Authorization": `Bearer ${jwt}`
      }
    }).then((response) => {
      if (response.ok) {  
         const newDisplayedEvents = displayedEvents.filter(event => event.id !== id)
         setDisplayedEvents(newDisplayedEvents)
      } else {
         throw new Error("couldn't delete this event")
      }
    }).catch(e => {
      throw new Error(e)
    }) ,
      onClose()
  }
  return (
    <>
      <Button colorScheme='red' onClick={onOpen}>Delete</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>

        <ModalContent>
          <ModalHeader>Are you Sure?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div></div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='red' onClick={(e) => deleteEventHandler(e)}>Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}