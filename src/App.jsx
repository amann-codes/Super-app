import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import Category from "./pages/Category";
import Homepage from "./pages/Homepage";
import Browse from "./pages/Browse";
export default function App(){
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/browse" element={<Browse/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
} 