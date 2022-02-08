import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import {useLocation} from "react-router-dom"
import Popup from "./Popup";
import Test from "./Test";


export default function EventCard({ name, description }) {
  const currentUrl = useLocation().pathname.split('/')[2]
  const showButtons = currentUrl === "duzenlenenler"

  return (
    <div className="w-52 h-52 rounded-md bg-slate-200 m-4 break-words flex flex-col justify-between ">
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
