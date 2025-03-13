import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import UploadImage from './Components/UploadImage';
import CameraCapture from './Components/CameraCapture';
import Start from './Components/Start';
import SelfieGuidelines from './Components/SelfieGuidelines';
import Result from './Components/Result';
import Footer from './Components/Footer'; // Import Footer component
import './app.css';

function App() {
  return (
    <Router>
      <div className="app-container"> {/* Wrapper to push footer to the bottom */}
        <Navbar />
        <div className="content"> {/* Main content wrapper */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start" element={<Start />} />
            <Route path="/upload" element={<UploadImage />} />
            <Route path="/camera" element={<CameraCapture />} />
            <Route path="/guidelines" element={<SelfieGuidelines />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </div>
        <Footer /> {/* Footer placed at the bottom */}
      </div>
    </Router>
  );
}

export default App;
