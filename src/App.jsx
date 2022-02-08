import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main"

function App() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar/>
      <Routes>
        <Route path="/evraklar/*" element={<Main/>}/>
        <Route path="/etkinlikler/*" element={<Main/>}/>
        <Route path="/profili-duzenle" element={<div>profil</div>}/>
      </Routes>
    </div>
  )
}

export default App
