import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Mainpage from './bir006-home.jsx'
import Bir006Response from './components/Bir006-Response';
import Bir006Sendwish from './components/Bir006-Sendwish';
import Bir006Gallery from './components/Bir006-Gallery';
import "./App.css"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/response" element={<Bir006Response />} />
        <Route path="/sendwish" element={<Bir006Sendwish />} />
        <Route path="/gallery" element={<Bir006Gallery />} />
      </Routes>
  </BrowserRouter>  
  )
}
export default App;

<Bir006Gallery />  