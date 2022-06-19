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
import AddEvent from './AddEvent'

export default function AddEventButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()



    return (
        <>
            <Button colorScheme='blue' onClick={onOpen}>Add</Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>

                <ModalContent>
                    <ModalHeader>Post Event</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <AddEvent onClose={onClose}></AddEvent>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>)
}