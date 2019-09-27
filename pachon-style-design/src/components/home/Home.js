import React, { Component } from 'react'
import './home.css';
import {Link } from 'react-router-dom' 
import Activebuttons from '../navigation/activebuttons'
import Normalbuttons from '../navigation/normalbuttons';

const Home = () => {
    return (
        <div id="home-background">
            <div className="col-12">
                <span id="paragraph1">
                    Pachon Style Design
            </span>
                <h3 className="paragraph2">"Exploring new design concepts through our client's visualization."</h3>
                {/* <button className="buttonhome">HOME</button>
                <button className="buttonabout">ABOUT</button>
                <button className="buttonwork">WORK</button>
                <button className="buttoncontact">CONTACT</button> */}
                    <Activebuttons></Activebuttons>
                    <Normalbuttons></Normalbuttons>
                    {/* <Link to="/" className="nav-item nav-link ml-4">Home </Link> */}

            </div>


        </div>


    )
}


export default Home;

