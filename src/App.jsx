import react from "react"
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";

export default function App() {
  return (
   <Routes>
      <Route path="/register" element={<Register/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="*" element={<Navigate replace to="/register" />}></Route>
   </Routes>
    
  )
}