import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main"
import Popup from "./components/Popup";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <div className="flex w-screen h-screen">
        <Popup>
          <div className="w-10 h-10 bg-white"></div>
        </Popup>
        <Sidebar/>
        <Outlet/>
      </div>
      </RecoilRoot>
    </>
  )
}

export default App
