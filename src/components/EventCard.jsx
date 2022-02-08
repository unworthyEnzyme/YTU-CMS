import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import {useLocation} from "react-router-dom"
import popupState from "./../GlobalStates/PopupState"
import { useRecoilState } from "recoil";
import popupId from "../GlobalStates/CurrentPopupId";


export default function EventCard({ name, description, id}) {
  const currentUrl = useLocation().pathname.split('/')[2]
  const showButtons = currentUrl === "duzenlenenler"

  const [show, setShow] = useRecoilState(popupState)
  const [infoId, setInfoId] = useRecoilState(popupId)


  function handleClick(){
    setInfoId(id)
    setShow(true)
  }
  

  return (
    <div onClick={ handleClick } className="w-52 h-52 rounded-md bg-slate-200 m-4 break-words flex flex-col justify-between shadow-xl hover:shadow-none transition-all ease-in-out hover:cursor-pointer duration-500 hover:scale-95">
      <div className="m-6">
        <div className="text-xl">{name}</div>
        <div className="text-sm">{description}</div>
      </div>

      {showButtons ?
        <div className="flex p-2 justify-start">
          <EditButton /><DeleteButton />
        </div>
        : <div></div>
      }
    </div>
  );
}


//shadow-xl hover:shadow-none transition-all ease-in-out hover:cursor-pointer duration-500 hover:scale-95
