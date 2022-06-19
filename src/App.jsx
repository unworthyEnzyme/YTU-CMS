import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main"
import Popup from "./components/Popup";
import { RecoilRoot } from "recoil";
import { useNavigate } from 'react-router-dom'
import { readAuthToken } from "./helpers/ReadorWriteAuthToken";
import { useEffect } from "react";
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <RecoilRoot>
        <ChakraProvider>
        <div className="flex w-screen h-screen">
          <Popup>
            <div className="w-10 h-10 bg-white"></div>
          </Popup>
          <Sidebar />
          <Outlet />
        </div>
        </ChakraProvider>
      </RecoilRoot>
  )
}

export default App
