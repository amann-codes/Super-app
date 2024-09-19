import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
export default function App(){
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
} 