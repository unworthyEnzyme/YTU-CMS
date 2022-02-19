import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
export default function LoginPage() {
  const navigate = useNavigate()
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (success) {
      return navigate('/')
    }
  }, [success])

  const handlePost = (e) => {
    e.preventDefault()
    const body = {
      mail: e.target[0].value,
      password: e.target[1].value
    }
    fetch("http://localhost:8080/auth/", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then((response) => {
        if (response.status === 500) {
          console.log("Error")
          setSuccess(false)
        }
        return response.json()
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token)
          setSuccess(true)
        }
      }).catch(e => console.log(data))

  }
  return (
      <div>
          <form  onSubmit={handlePost}>
            <input type="email" name="email" id="email" className="border-2 border-black" placeholder="email@email.com"/>
            <input type="password" name="password" id="password" className="border-2 border-black"/>  
            <button type="submit">Submit</button>
          </form>
      </div>
  )
}