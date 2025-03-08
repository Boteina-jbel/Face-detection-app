import React from 'react';
import '../SelfieGuidelines.css';

const SelfieGuidelines = () => {
    return (
        <div className="selfieGuidelines-container">
            <div className="selfieGuidlines-content">
                <h2>TAKE YOUR SELFIE</h2>
                <p>For an accurate skin analysis:</p>
                <ul>
                    <li>Pull hair back, remove makeup and glasses</li>
                    <li>Use the front-facing camera and minimize shadows</li>
                    <li>Center entire face and have a neutral expression</li>
                </ul>
                <button className="button">GET STARTED</button>
                <button className="button">GET STARTED</button>
            </div>
        </div>
    );
};

export default SelfieGuidelines;
