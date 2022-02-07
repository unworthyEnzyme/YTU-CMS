import EventCard from "./EventCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function EventCards() {
  const currentUrl = useLocation().pathname.split('/')[2]
  const data = useFetch("http://localhost:3001/duzenlenenler")
  console.log(data)
  return (
    <div className="flex justify-center items-center m-6">
      <div className="grid grid-cols-3">
        <EventCard name="Hardlev" description="lorem ipsum so" />
        <EventCard name="Hardlev" description="lorem ipsum so" />
        <EventCard name="Hardlev" description="lorem ipsum so" />
        <EventCard name="Hardlev" description="lorem ipsum so" />
        <EventCard name="Hardlev" description="lorem ipsum so" />
        <EventCard name="Hardlev" description="lorem ipsum so" />
      </div>
    </div>
  );
}
