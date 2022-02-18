import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import EventCards from "./EventCards";
import Navbar from "./Navbar";

export default function Main() {

  return (
    <div className="flex flex-col w-3/4">
      <Navbar/>
      <Outlet/>
    </div>
  )
}