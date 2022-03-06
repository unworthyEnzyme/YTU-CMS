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
          setSuccess(false)
          throw new Error("Coudn't logged in")
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
              setSuccess(true)
              //console.log(JSON.parse(localStorage.getItem('user')).role)
            })
            .catch((e) => console.log(e))
        }
      }).catch(e => console.log(e))

  }
  return (
    <div>
      <div className="flex justify-center mt-20 ml-12">
        <img src="../../public/Yıldız_Technical_University_Logo.png" width="100" alt="ytü img"/>
      </div>
      <div className="flex justify-center ml-12 mt-4">
        <h1 className="text-xl">Yıldız Teknik Üniversitesi</h1>
      </div>
      <div className="flex justify-center ml-12 mt-4">
        <h1>SKS Külüp Yönetim Sistemi</h1>
      </div>
      <form onSubmit={handlePost}>
        <div className="flex justify-center mt-12">
          <label className="mr-4">E-mail</label>
          <input type="email" name="email" id="email" className="border-2 border-black" placeholder="email@email.com" />
        </div>
        <div className="flex justify-center mt-4 mr-5">
          <label className="mr-4">Password</label>
          <input type="password" name="password" id="password" className="border-2 border-black" />
        </div>
        <div className="flex justify-center">
          <div className="bg-slate-300 rounded-md mt-4 p-2">
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  )
}