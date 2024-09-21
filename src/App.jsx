import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import Category from "./pages/Category";
import Homepage from "./pages/Homepage";
export default function App(){
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
} 