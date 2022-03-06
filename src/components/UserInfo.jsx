import { useEffect, useState } from "react"

export default function UserInfo() {
  if(localStorage.getItem("user") === null){
    throw new Error("error reading jwt")
  }
  const name = JSON.parse(localStorage.getItem("user")).name
  const role = JSON.parse(localStorage.getItem("user")).role
  const clubId = JSON.parse(localStorage.getItem("user")).clubId
  const jwt = localStorage.getItem("jwt")

  const [clubName, setClubName] = useState("")

  useEffect(() => {
    fetch(`http://localhost:8080/api/clubs/${clubId}`, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    }).then((res) => {
      if (res.ok) {
        return res.json()
      }else{
        throw new Error("Couldn't get the Club Name")
      }
    }).then((data) => {
      setClubName(data.name)
    }).catch((e) => {
      throw new Error(e)
    })
  }, [])



  return (
    <div className="flex flex-col gap-2 justify-center items-center text-white">
      <div>{name}</div>
      <div>{role}</div>
      <div>{clubName}</div>
    </div>
  )
}