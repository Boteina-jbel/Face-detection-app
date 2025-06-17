import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../SelfieGuidelines.css";

const SelfieGuidelines = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const fileInputRef = useRef(null); // Reference to file input

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click(); // Opens file explorer when button is clicked
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData);
      navigate("/result", { state: { result: response.data } }); // Redirect to result page
    } catch (error) {
      console.error("Error uploading the image", error);
    }
  };

  return (
    <div className="selfieGuidelines-container">
        <div className="selfieGuidelines-content">
            <h2>TAKE YOUR SELFIE</h2>
            <p>For an accurate skin analysis:</p>
            <ul>
            <li>Pull hair back, remove makeup and glasses</li>
            <li>Use the front-facing camera and minimize shadows</li>
            <li>Center entire face and have a neutral expression</li>
            </ul>

                  <button className="button">TAKE SELFIE</button>
                  {/* Hidden file input */}
                  <input
                      type="file"
                      ref={fileInputRef}
                      className="input-file"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                  />
                  
                  <p>Or:</p>

                  {/* Choose File button */}
                  <button onClick={handleUploadClick} className="button">
                    CHOOSE FILE
                  </button>

                  {/* Show selected file name */}
                  {file && (
                    <p style={{ marginTop: "10px", color: "gray", fontStyle: "italic" }}>
                      Selected file: {file.name}
                    </p>
                  )}

                  {/* Upload button (only visible after selecting a file) */}
                  {file && (
                    <button onClick={handleSubmit} className="btnn">
                      UPLOAD ✔️
                    </button>
                  )}

          </div>
    </div>
  );
};

export default SelfieGuidelines;
