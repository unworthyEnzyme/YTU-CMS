export default function UserInfo() {
  const name = JSON.parse(localStorage.getItem("user")).name
  const role = JSON.parse(localStorage.getItem("user")).role

  return (
    <div className="flex flex-col gap-2 justify-center items-center text-white">
      <div>{name}</div>
      <div>{role}</div>
      <div>Club...</div>
    </div>
  )
}