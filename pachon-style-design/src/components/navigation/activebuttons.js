import React from 'react'
import { Link } from 'react-router-dom' 
import './activebuttons.css'

const Activebuttons = () => 

{
    return (
        <div className="roundbutton" >
            <Link className="removelink"to="/">
                <span className="buttoncaption">Home</span>
            </Link>
        </div>

    )
}

export default Activebuttons;