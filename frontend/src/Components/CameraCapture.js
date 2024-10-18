import React, { useRef, useState } from 'react';
import axios from 'axios';

const CameraCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [result, setResult] = useState(null);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
  };

  const capturePhoto = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    canvasRef.current.toBlob(uploadPhoto, 'image/jpeg');
  };

  const uploadPhoto = async (blob) => {
    const formData = new FormData();
    formData.append('file', blob, 'photo.jpg');

    try {
      const response = await axios.post('http://localhost:5000/upload', formData);
      setResult(response.data);
    } catch (error) {
      console.error('Error uploading the photo', error);
    }
  };

  return (
    <div>
      <video ref={videoRef} width="320" height="240" autoPlay></video>
      <button onClick={startCamera}>Start Camera</button>
      <button onClick={capturePhoto}>Capture Photo</button>
      <canvas ref={canvasRef} width="320" height="240" style={{ display: 'none' }}></canvas>
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

export default CameraCapture;
