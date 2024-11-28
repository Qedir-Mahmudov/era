import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import Addpage from './addpage';

import Mainlayout from './layout/mainlayout';




function App() {


  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path="Addpage" element={<Addpage />} />
            <Route path="contact" element={<Contact />} />
     
          </Route>
        </Routes>
      </BrowserRouter>
    </>


  )
}

export default App
