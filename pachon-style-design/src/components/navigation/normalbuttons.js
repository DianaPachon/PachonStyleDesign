import React from 'react'
import { Link } from 'react-router-dom' 
import './normalbuttons.css'

const Normalbuttons = () => 

{
    return (
        <div>
        <div className="roundbuttonabout" >
            <Link className="removelink"to="/About">
                <span className="buttoncaption1">About</span>
            </Link>
        </div>

        <div className="roundbuttonportfolio" >
            <Link className="removelink"to="/">
                <span className="buttoncaption">Portfolio</span>
            </Link>
        </div>

        <div className="roundbuttoncontact" >
            <Link className="removelink"to="/">
                <span className="buttoncaption">Contact</span>
            </Link>
        </div>

        </div>

    )
}

export default Normalbuttons;