import React, { Component } from 'react';
import HomeContent from '../Components/HomeContent';
import Features from '../Components/Features';

class Home extends Component{
    render(){
        return(
            <div>
            {/* Première section */}
            <HomeContent />

            {/* Deuxième section */}
            <Features />
        </div>
        )
    }
}

export default Home