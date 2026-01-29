import { useState } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Explore from './components/Explore';
import Submit from './components/Submit';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/submit' element={<Submit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App