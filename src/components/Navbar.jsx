import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";

export default function Navbar() {

  return (
    <div className="flex w-full h-16 bg-slate-200 justify-center gap-20 items-end">
      <Link to='duzenlenenler'>
        <NavbarItem itemName="Duzenlenenler"/>
      </Link>
      <Link to='onay-bekleyenler'>
        <NavbarItem itemName="Onay Bekleyenler"/>
      </Link>
      <Link to='onaylanmis'>
        <NavbarItem itemName="Onaylanmis"/>
      </Link>
    </div>
  )
}