import React, { Component } from 'react';
import '../Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-container">
                    <a href="/" className="navbar-logo">
                        <img src="/SkinSight_smalll.png" alt="Logo" className="navbar-logo-img" />
                        SkinSight
                    </a>
                    <ul className="navbar-menu">
                        <li className="navbar-item">
                            <a href="/" className="navbar-link">Home</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#Features" className="navbar-link">Features</a>
                        </li>
                        <li className="navbar-item">
                            <a href="/services" className="navbar-link">Services</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#Contact" className="navbar-link">Contact</a>
                        </li>
                        <li className="navbar-item">
                            <a href="/start" className="navbar-link">Start</a>
                        </li>
                        <li className="navbar-item">
                            <a href="/upload" className="navbar-link">Start</a>
                        </li>
                        <li className="navbar-item">
                            <a href="/camera" className="navbar-link">Start</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
