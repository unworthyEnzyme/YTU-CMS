export default function Button({ children, type }) {
  let styles = ""
  if (type === "edit") {
    styles = "border-[1.5px] border-black hover:bg-black hover:text-white"
  } else {
    styles = "bg-red-500 text-white border-slate-200 hover:text-red-500 hover:bg-white"
  }
  return (
    <div className={`w-12 h-6 flex justify-center items-center rounded-md px-10 py-1 hover:cursor-pointer ${styles}`}>
      {children}
    </div>
  )
}