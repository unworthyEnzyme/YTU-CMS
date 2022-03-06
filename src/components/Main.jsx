import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { readAuthToken } from "../helpers/ReadorWriteAuthToken";
import EventCards from "./EventCards";
import Navbar from "./Navbar";
import ProtectedComponent from "./ProtectedComponent";

export default function Main() {
    const role = JSON.parse(localStorage.getItem("user")).role
    let showNavbar = !( role === "ADVISOR" || role === "DEPARTMENT" )

    return (
      <div className="flex flex-col w-3/4">
        {showNavbar ? <Navbar /> : <div></div>}
        <Outlet />
      </div>
    )
}