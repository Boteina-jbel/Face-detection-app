import React from 'react';
import '../Features.css';


const Features = () => {
    return (
        <div className="features">
            <h2>What Makes Our App Exceptional ?</h2>

                <div class="parent-card">
                    <div class="card">
                        <img src="/smart.png" alt="smart"/>
                        <div class="card__content">
                            <p class="card__title">Smart and Accurate Detection</p>
                            <p class="card__description">Powered by advanced AI, the app performs precise analysis of facial 
                                imperfections, such as acne, wrinkles, and dark circles, directly from uploaded images
                                or a live camera feed.</p>
                        </div>
                    </div>

                    <div class="card">
                        <img src="/easy.png" alt="simple"/>
                        <div class="card__content">
                            <p class="card__title">Simple</p>
                            <p class="card__description">No downloads or installations required—users can access the app instantly
                                 from any modern web browser. This ensures seamless compatibility across devices, offering a
                                  hassle-free experience for desktops, tablets, and smartphones alike.</p>
                        </div>
                    </div>

                    <div class="card">
                        <img src="/personalized.png" alt="personalized"/>
                        <div class="card__content">
                            <p class="card__title">Personalized Recommendations</p>
                            <p class="card__description">Beyond detection, the app provides tailored skincare solutions for
                                 detected imperfections. Each recommendation is backed by dermatological insights, helping
                                  users find the most effective products and routines for their unique concerns.</p>
                        </div>
                    </div>

                </div>
        </div>
    );
};

export default Features;

