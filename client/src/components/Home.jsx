import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Home.css';
import Navbar from './Navbar';
import earthImage from '../assets/earth.png';
import Footer from './Footer';


function Home() {
    return (
        <div className="home-page">
            <Navbar />
            <div className="home-container">
                <div className="home-left">
                    <h1 className="home-title">Welcome to the <span className="highlight">World Journal Project</span></h1>
                    <p className="home-desc">Daily updates. Real people. Around the world.</p>
                    <p className="home-desc">Post short daily updates and explore life as it's lived around the world.</p>
                    <Link to="/explore" className="home-button">Let's Explore</Link>
                </div>
                <div className="home-right">
                    <img src={earthImage} alt="Earth" className="home-image" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;