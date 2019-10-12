import React, { Component } from 'react'
import './home.css';
import {Link } from 'react-router-dom' 
import Homebuttons from '../navigation/homebuttons'


const Home = () => {
    return (
        <div id="home-background">
            <div className="col-12">
                <span id="paragraph1">
                    Pachon Style Design
            </span>
                <h3 className="paragraph2">"Exploring new design concepts through our client's visualization."</h3>
         
                    <Homebuttons caption="Home" caption2="About" caption3="Contact" caption1="Portfolio"></Homebuttons>
          

            </div>


        </div>


    )
}


export default Home;

