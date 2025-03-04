import React from "react";
import { useNavigate } from "react-router-dom";
import "../HomeContent.css";

const HomeContent = () => {
    const navigate = useNavigate();

    return (
        <div className="home-content">
            <div className="text-content">
                <h2>Scan Your Skin, Unlock Your Glow</h2>
                <p>
                    Use our powerful AI technology to scan, analyze, and detect skin imperfections.
                    Get instant, personalized recommendations for products and treatments tailored to
                    your unique skin needs. Experience the future of skincare today—quick, accurate, and
                    all at your fingertips.
                </p>
                <button className="btn" type="button" onClick={() => navigate("/start")}>
                    <strong>START</strong>
                    <div id="container-stars">
                        <div id="stars"></div>
                    </div>
                    <div id="glow">
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </button>
            </div>

            <div className="image-container">
                <img src="/p3.jpg" alt="woman skin" className="styled-image-2" />
                <img src="/p2.jpg" alt="woman skin" className="styled-image" />
            </div>
        </div>
    );
};

export default HomeContent;
