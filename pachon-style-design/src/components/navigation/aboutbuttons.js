import React from 'react'
import { Link } from 'react-router-dom' 
import './aboutbuttons.css'

const Aboutbuttons = ({caption, caption1, caption2, caption3}) => 

{
    return (
        <div>
        <div className="buttonround" id="roundbuttonabout-home"  >
            <Link className="removelink"to={caption}>
                <span className="buttoncaptionabout-home">{caption}</span>
            </Link>
        </div>

         <div className="buttonround" id="roundbuttonabout-about" >
            <Link className="removelink"to={caption2}>
                <span className="buttoncaptionabout-about">{caption2}</span>
            </Link>
        </div> 

        <div className="buttonround" id="roundbuttonabout-portfolio" >
            <Link className="removelink"to={caption1}>
                <span className="buttoncaptionabout-portfolio">{caption1}</span>
            </Link>
        </div>

        <div className="buttonround" id="roundbuttonabout-contact" >
            <Link className="removelink"to={caption3}>
                <span className="buttoncaptionabout-contact">{caption3}</span>
            </Link>
        </div>
        </div>

    )
}
export default Aboutbuttons;