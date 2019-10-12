import React from 'react'
import { Link } from 'react-router-dom' 
import './homebuttons.css'

const Homebuttons = ({caption, caption1, caption2, caption3}) => 

{
    return (
        <div>
        <div className="buttonround" id="roundbuttonhome-home"  >
            <Link className="removelink"to={caption}>
                <span className="buttoncaptionhome-home">{caption}</span>
            </Link>
        </div>

        <div className="buttonround" id="roundbuttonhome-about" >
            <Link className="removelink"to={caption2}>
                <span className="buttoncaptionhome-about">{caption2}</span>
            </Link>
        </div>

        <div className="buttonround" id="roundbuttonhome-portfolio" >
            <Link className="removelink"to={caption1}>
                <span className="buttoncaptionhome-portfolio">{caption1}</span>
            </Link>
        </div>

        <div className="buttonround" id="roundbuttonhome-contact" >
            <Link className="removelink"to={caption3}>
                <span className="buttoncaptionhome-contact">{caption3}</span>
            </Link>
        </div>
        </div>

    )
}

export default Homebuttons;

