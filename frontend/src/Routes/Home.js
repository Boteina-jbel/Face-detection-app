import React, { Component } from 'react';
import HomeContent from '../Components/HomeContent';
import Features from '../Components/Features';
import Contact from '../Components/Contact';

class Home extends Component{
    render(){
        return(
            <div>
                {/* Première section */}
                <HomeContent />

                {/* Deuxième section */}
                <Features />
                <Contact />
            </div>
        )
    }
}

export default Home