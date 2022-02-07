import { useLocation } from "react-router-dom";

export default function NavbarItem({ itemName, url }) {
  const currentUrl = useLocation().pathname.split('/')[2]
  if (url === currentUrl) {
    return (
      <div>
        <div className="m-1">{itemName}</div>
        <div className="w-full bg-red-300 h-1"></div>
      </div>
    )
  } else {
    return (
      <div>
        <div className="m-1">{itemName}</div>
        <div className="w-full bg-blue-300 h-1"></div>
      </div>
    )
  }
  
}