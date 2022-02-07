export default function NavbarItem({ itemName, url}) {

  return (
    <div>
      <div className="m-1">{itemName}</div>
      <div className="w-full bg-slate-900 h-1"></div>
    </div>
  )
}