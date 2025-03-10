import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const result = location.state?.result;

  if (!result) {
    return <h2>No result found. Please upload an image.</h2>;
  }

  return (
    <div>
      <h2>Skin Analysis Result</h2>
      <p><strong>Category:</strong> {result.category}</p>
      <p><strong>Confidence:</strong> {result.confidence}</p>
      <h3>Suggested Products:</h3>
      <ul>
        {result.suggested_products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
