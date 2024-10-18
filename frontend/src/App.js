import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import UploadImage from './Components/UploadImage';
import CameraCapture from './Components/CameraCapture';
import './app.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadImage />} />
        <Route path="/camera" element={<CameraCapture />} />
      </Routes>
    </Router>
  );
}

export default App;
