import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import UploadImage from './Components/UploadImage';
import CameraCapture from './Components/CameraCapture';
import Start from './Components/Start';
import SelfieGuidelines from './Components/SelfieGuidelines';
import Result from './Components/Result';
import './app.css'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="home-content"> {/* Wrap routes in a div if styling is needed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<Start />} />
          <Route path="/upload" element={<UploadImage />} />
          <Route path="/camera" element={<CameraCapture />} />
          <Route path="/guidelines" element={<SelfieGuidelines />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;