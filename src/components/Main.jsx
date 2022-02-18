import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { readAuthToken } from "../helpers/ReadorWriteAuthToken";
import EventCards from "./EventCards";
import Navbar from "./Navbar";
import ProtectedComponent from "./ProtectedComponent";

export default function Main() {
    return (
      <div className="flex flex-col w-3/4">
        <Navbar />
        <Outlet />
      </div>
    )
}