import React from 'react'
import { Link } from 'react-router-dom' 
import './normalbuttons.css'

const Normalbuttons = ({caption, caption1}) => 

{
    return (
        <div>
        <div className="buttonround normal" id="roundbuttonabout" >
            <Link className="removelink"to={caption}>
                <span className="buttoncaption">{caption}</span>
            </Link>
        </div>

        <div className="buttonround normal" id="roundbuttonportfolio" >
            <Link className="removelink"to={caption1}>
                <span className="buttoncaption1">{caption1}</span>
            </Link>
        </div>

        <div className="buttonround normal" id="roundbuttoncontact" >
            <Link className="removelink"to="/Contact">
                <span className="buttoncaption2">Contact</span>
            </Link>
        </div>

        </div>

    )
}

export default Normalbuttons;