import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Production from './pages/Production/Production'
import Service from './pages/Service/Service'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


export default function App() {
  return (<>
    <BrowserRouter>
    <Header buttonText='Скачать прайс' buttonColor='red'/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/production" element={<Production />} />
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

