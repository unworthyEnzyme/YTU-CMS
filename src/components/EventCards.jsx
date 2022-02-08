import EventCard from "./EventCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function EventCards() {
  const currentUrl = useLocation().pathname.split('/')[2]
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const fetchData = async (url) => {
    try {
      const res = await fetch(`http://localhost:3001/${url}`)
      const json = await res.json()
      setData(json)
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchData(currentUrl)
  }, [currentUrl])
  
  return (
    <div className="flex justify-center items-center m-6">
      <div className="grid grid-cols-3">
        {loading ? <div>"Loading..." </div> : data.map(info => (
          <div key={info.id}>
            <EventCard name={info.name} description={info.description} />
          </div>
        ))}
      </div>
    </div>
  )
}


/*

{duzenlenenlerData.map(info => (
          <div>
            <EventCard name={info.name} description={info.description} />
          </div>
        ))}

        {onayBekleyenlerData.map(info => (
          <div>
            <EventCard name={info.name} description={info.description} />
          </div>
        ))}


      {onaylanmisData.map(info => (
          <div>
            <EventCard name={info.name} description={info.description} />
          </div>
        ))}

*/

// <EventCard name="Hardlev" description="lorem ipsum so" />

// if (currentUrl === "onaylanmis"){
//   return(
    // <div className="flex justify-center items-center m-6">
    //   <div className="grid grid-cols-3">
    //     {loading ? <div>"Loading..." </div> : onaylanmisData.map(info => (
    //       <div>
    //         <EventCard name={info.name} description={info.description} />
    //       </div>
    //     ))}
    //   </div>
    // </div>
//   )
// }