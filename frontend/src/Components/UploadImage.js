import React, { useState } from 'react';
import axios from 'axios';

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData);
      setResult(response.data);
    } catch (error) {
      console.error('Error uploading the image', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit} class="btn" type="button">
          <strong>Upload</strong>
          <div id="container-stars">
              <div id="stars"></div>
          </div>

          <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
          </div>
      </button>


      {result && (
        <div>
          <h2>Analysis Result</h2>
          <p>Category: {result.category}</p>
          <p>Confidence: {result.confidence}</p>
          <h3>Suggested Products:</h3>
          <ul>
            {result.suggested_products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
