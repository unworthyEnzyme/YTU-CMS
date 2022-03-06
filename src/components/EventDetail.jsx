import { useEffect, useState } from "react"
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
  Button,
} from '@chakra-ui/react'

import { useFetch } from "usehooks-ts"
import PublishButton from "./PublishButton"
import { useLocation } from "react-router-dom"

export default function EventDetail({ id , isOpen, onOpen, onClose}) {
    const currentUrl = useLocation().pathname.split('/')[2]
    const showPublishButton = currentUrl === "duzenlenenler" ? true : false
    //console.log(useDarkMode())
    const [data, setData] = useState(null)
    const jwt = localStorage.getItem("jwt")
    useEffect(() => {
        fetch(`http://localhost:8080/api/events/${id}`, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        }).then((res)=> {
            if(res.ok){
                return res.json()
            } else {
              throw new Error("Couldn't get the details for this event")
            }
        }).then((data) => {
            setData(data)
        }).catch((e) => {
          throw new Error(e)
        })
    }, [isOpen])



    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        
      <ModalContent>
        <ModalHeader>{data ? data.name : "Lo"}</ModalHeader>
        <ModalCloseButton />
        { data ? <ModalBody>
          <ul>
            <li>Description: {data.description}</li>
            <li>Start Date: {data.startDate}</li>
            <li>End Date: {data.endDate}</li>
          </ul>
        </ModalBody>: ""}
        <ModalFooter>
          {showPublishButton ? <PublishButton id={id} onClose={onClose} /> : <div></div>}
        </ModalFooter>
      </ModalContent>
    </Modal>
    )
} 