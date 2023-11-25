import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Details from "./pages/Details"


export default function App() {
  return (
    <div className=' w-[390px] md:w-full'>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/details" element={<Details/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    </div>
    
  )
}