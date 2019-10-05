import React from 'react'
import { Link } from 'react-router-dom' 
import './normalbuttons.css'

const Normalbuttons = () => 

{
    return (
        <div>
        <div className="buttonround normal" id="roundbuttonabout" >
            <Link className="removelink"to="/About">
                <span className="buttoncaption">About</span>
            </Link>
        </div>

        <div className="buttonround normal" id="roundbuttonportfolio" >
            <Link className="removelink"to="/Portfolio">
                <span className="buttoncaption1">Portfolio</span>
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