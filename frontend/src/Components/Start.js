import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";
import '../Start.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Start = () => {
  const navigate = useNavigate();

  return (
    <div className="start-content">
        <div className="">
            <img src="/selfie-bathroom.jpg" alt="a women picking up a phone" class="pentagon-image" />   
        </div>

        <div className="steps-container">
            {/* Step 1 */}
            <div className="step">
                <div className="step-number">1</div>
                <h3>SNAP YOUR SELFIE</h3>
                <p>If you're ready for your best skin day, use our AI to perform your facial skin analysis from just 1 selfie</p>
                <i className="fas fa-face-smile icon"></i>
            </div>

            {/* Step 2 */}
            <div className="step">
                <div className="step-number">2</div>
                <h3>TELL US ABOUT YOUR SKIN</h3>
                <p>Answer a few questions about your skin concerns and preferences so we can tailor the products to fit your lifestyle</p>
                <i className="fas fa-comment icon"></i>
            </div>

            {/* Step 3 */}
            <div className="step">
                <div className="step-number">3</div>
                <h3>GET YOUR RESULTS</h3>
                <p>In just a few seconds you’ll be able to see your Skin Age and a personalized product recommendation from Olay</p>
                <i className="fas fa-clipboard-check icon"></i>
            </div>
                        
        </div>
      
        <button className="sticky-bottom-button" onClick={() => navigate("/start")}>
            GET STARTED
        </button>
    </div>
  );
};

export default Start;
