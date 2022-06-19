import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import {useLocation} from "react-router-dom"
import popupState from "./../GlobalStates/PopupState"
import { useRecoilState } from "recoil";
import popupId from "../GlobalStates/CurrentPopupId";
import Popup from "./Popup";
import { useState } from 'react'
import EventDetail from "./EventDetail";
import { useDisclosure } from "@chakra-ui/react";

export default function EventCard({ name, description, id}) {
  const currentUrl = useLocation().pathname.split('/')[2]
  const showButtons = currentUrl === "duzenlenenler"
  const [showDetails, setShowDetails] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  // const [showPopup, setShowPopup] = useState(false)

  // const [show, setShow] = useRecoilState(popupState)
  // const [infoId, setInfoId] = useRecoilState(popupId)


  function handleClick(e){
    if (e.target === e.currentTarget){
      onOpen()
    }
  }
  

  return (
    <div onClick={ handleClick } className="w-52 h-52 rounded-md bg-slate-200 m-4 break-words flex flex-col justify-between shadow-xl hover:shadow-none transition-all ease-in-out hover:cursor-pointer duration-200 hover:scale-95">
      <div className="m-6">
        <div className="text-xl" onClick={handleClick}>{name}</div>
      </div>

      {showButtons ?
        <div className="flex p-2 justify-start">
          <EditButton id={id}/><DeleteButton id={id}/>
        </div>
        : <div></div>
      }
      
      <EventDetail id={id} isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
    </div>
  );
}


//shadow-xl hover:shadow-none transition-all ease-in-out hover:cursor-pointer duration-500 hover:scale-95
