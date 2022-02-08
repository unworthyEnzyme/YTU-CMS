import { Navigate, Route, Routes } from "react-router-dom";
import EventCards from "./EventCards";
import Navbar from "./Navbar";

export default function Main() {

  return (
    <div className="flex flex-col w-3/4">
      <Navbar/>
      <Routes>
        <Route path="/" index element={<Navigate to="duzenlenenler"/>}/>
        <Route path="/duzenlenenler" element={<EventCards/>}/>
        <Route path="/onay-bekleyenler" element={<EventCards/>}/>
        <Route path="/onaylanmis" element={<EventCards/>}/>
      </Routes>
    </div>
  )
}