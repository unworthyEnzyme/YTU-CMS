import EventCard from "./EventCard";
import { useLinkClickHandler, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useRecoilState } from "recoil";
import displayedDraftEventsState from "../GlobalStates/displayedEvents";

export default function EventCards() {
  const map = {
    'duzenlenenler': 'DRAFT',
    'onay-bekleyenler': 'AWAITING',
    'onaylanmis': 'COMPLETED'
  }

  const currentUrl = useLocation().pathname.split('/')[2]
  // const [data, setData] = useState(null)
  const [displayedDraftEvents, setDisplayedDraftEvents] = useRecoilState(displayedDraftEventsState)
  const [loading, setLoading] = useState(true)
  const fetchData = async (url) => {
    try {
      const jwt = localStorage.getItem('jwt')
      const user = JSON.parse(localStorage.getItem('user'))
      const clubId = user.clubId
      const res = await fetch(`http://localhost:8080/api/events/?status=${map[url]}&club_id=${clubId}`, {
        headers: {
          'Authorization': `Bearer ${jwt}`
        }
      })
      if (res.status !== 200) {
        setDisplayedDraftEvents([])
      } else {
        const json = await res.json()
        setDisplayedDraftEvents(json)
      }
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
        {loading ? <div>"Loading..." </div> : displayedDraftEvents.map(info => ( //data may be undefined. Handle the case where server doesn't return an array
          <div key={info.id}>
            <EventCard name={info.name} id={info.id} />
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