import React from 'react'
import'./Card.css';

const Card=(props)=>{
    return (
        <div id="card1">
            <img src={props.image} alt="image1"></img>
            <div id="avatar1"></div>
                <div id="profile1">
                <h1>{props.title}</h1>
                <h3>{props.description}</h3>
            </div>
        </div>
    )
}

export default Card;