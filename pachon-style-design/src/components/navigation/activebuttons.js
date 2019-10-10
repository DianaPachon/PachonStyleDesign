import React from 'react'
import { Link } from 'react-router-dom' 
import './activebuttons.css'

const Activebuttons = ({caption}) => 

{
    return (
        <div className="buttonround active aboutcomponentbuttons" id="roundbuttonactive"  >
            <Link className="removelink"to={caption}>
                <span className="buttoncaption3">{caption}</span>
            </Link>
        </div>

    )
}

export default Activebuttons;