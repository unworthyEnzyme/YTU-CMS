import EventCard from "./EventCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function EventCards() {
  const currentUrl = useLocation().pathname.split('/')[2]
  const duzenlenenlerData = useFetch("http://localhost:3001/duzenlenenler") || []
  const onayBekleyenlerData = useFetch("http://localhost:3001/onayBekleyenler") || []
  const onaylanmisData = useFetch("http://localhost:3001/onaylanmis") || []

  if (currentUrl === "duzenlenenler"){
    return(
      <div className="flex justify-center items-center m-6">
        <div className="grid grid-cols-3">
          {duzenlenenlerData.map(info => (
            <div>
              <EventCard name={info.name} description={info.description} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (currentUrl === "onay-bekleyenler"){
    return(
      <div className="flex justify-center items-center m-6">
        <div className="grid grid-cols-3">
          {onayBekleyenlerData.map(info => (
            <div>
              <EventCard name={info.name} description={info.description} />
            </div>
          ))}
        </div>
      </div>
    )
  } 

  if (currentUrl === "onaylanmis"){
    return(
      <div className="flex justify-center items-center m-6">
        <div className="grid grid-cols-3">
          {onaylanmisData.map(info => (
            <div>
              <EventCard name={info.name} description={info.description} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center m-6">
      <div className="grid grid-cols-3">
      </div>
    </div>
  );
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