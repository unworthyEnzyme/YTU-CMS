import NavbarItem from "./NavbarItem";

export default function Navbar() {

  return (
    <div className="flex w-full h-16 bg-slate-200 justify-around items-end">
      <NavbarItem itemName="Duzenlenenler" url="test"/>
      <NavbarItem itemName="Onay Bekleyenler" url="test"/>
      <NavbarItem itemName="Onaylanmis" url="test"/>
    </div>
  )
}