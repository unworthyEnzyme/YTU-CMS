import { Route, Routes } from "react-router-dom";
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
        <Routes>
          <Route path="/evraklar/*" element={<Main/>}/>
          <Route path="/etkinlikler/*" element={<Main/>}/>
          <Route path="/profili-duzenle" element={<div>profil</div>}/>
        </Routes>
      </div>
      </RecoilRoot>
    </>
  )
}

export default App
