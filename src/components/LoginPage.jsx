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
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Coudn't logged in")
          setSuccess(false)
        }
        return response.json()
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token)
          localStorage.setItem('userId', data.path)
          const userId = localStorage.getItem('userId')
          const user = fetch(`http://localhost:8080/api/users/${userId}`, {
            method: 'get', headers: {
              'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
          })
            .then((response) => {
              if (response.status !== 200) throw new Error("Couldn't get the roles for this user")
              return response.json()
            })
            .then((data) => {
              localStorage.setItem('user', JSON.stringify(data))
              //console.log(JSON.parse(localStorage.getItem('user')).role)
            })
            .catch((e) => console.log(e))
          setSuccess(true)
        }
      }).catch(e => console.log(e))

  }
  return (
    <div>
      <form onSubmit={handlePost}>
        <input type="email" name="email" id="email" className="border-2 border-black" placeholder="email@email.com" />
        <input type="password" name="password" id="password" className="border-2 border-black" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}