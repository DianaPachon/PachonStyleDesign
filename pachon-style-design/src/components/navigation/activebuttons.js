import React from 'react'
import { Link } from 'react-router-dom' 
import './activebuttons.css'

const Activebuttons = () => 

{
    return (
        <div className="buttonround active" id="roundbuttonactive"  >
            <Link className="removelink"to="/">
                <span className="buttoncaption3">Home</span>
            </Link>
        </div>

    )
}

export default Activebuttons;