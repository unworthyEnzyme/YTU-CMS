import { Navigate, useLocation } from "react-router-dom";
import { readAuthToken } from "../helpers/ReadorWriteAuthToken";
import RedirectPage from "./RedirectPage";

export default function ProtectedComponent({ children }) {
  let location = useLocation()

  const authenticated = readAuthToken()

  if(!authenticated){
      return <Navigate to="/login" state={{from: location}} />
  }
  return children
}