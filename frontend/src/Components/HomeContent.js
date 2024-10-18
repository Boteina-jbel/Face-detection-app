import React, { Component } from 'react';
import '../HomeContent.css';

class HomeContent extends Component {
    render() {
        return (
            <div className="home-content">
                <div className="text-content">
                    <h2>Reimagine Medicine</h2>
                    <p>Use our powerful AI technology to scan, analyze, and detect skin imperfections.
                        Get instant, personalized recommendations for products and treatments tailored to
                        your unique skin needs. Experience the future of skincare today—quick, accurate, and
                        all at your fingertips.</p>
                        <button class="btn" type="button">
                            <strong>START</strong>
                            <div id="container-stars">
                                <div id="stars"></div>
                            </div>

                            <div id="glow">
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                        </button>
                </div>
                

                <div className="image-container">
                    <img src="/p3.jpg" alt="woman skin" className="styled-image-2" />   
                    <img src="/p2.jpg" alt="woman skin" className="styled-image" />
                </div>
            </div>
        );
    }
}

export default HomeContent;
