import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Header from "./components/Header"
import Footer from "./components/Footer"


export default function App() {
  return (
    <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}