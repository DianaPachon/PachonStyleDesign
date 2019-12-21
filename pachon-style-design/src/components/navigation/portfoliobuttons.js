import React from 'react'
import { Link } from 'react-router-dom' 
import './portfoliobuttons.css'

const Portfoliobuttons = ({caption, caption1, caption2, caption3}) => 

{
    return (
        <div>
        <div className="buttonround" id="roundbuttonportfolio-home"  >
            <Link className="removelink"to={caption}>
                <span className="buttoncaptionportfolio-home">{caption}</span>
            </Link>
        </div>

        <div className="buttonround" id="roundbuttonportfolio-about" >
            <Link className="removelink"to={caption2}>
                <span className="buttoncaptionportfolio-about">{caption2}</span>
            </Link>
        </div>

        <div className="buttonround" id="roundbuttonportfolio-portfolio" >
            <Link className="removelink"to={caption1}>
                <span className="buttoncaptionportfolio-portfolio">{caption1}</span>
            </Link>
        </div>

        <div className="buttonround" id="roundbuttonportfolio-contact" >
            <Link className="removelink"to={caption3}>
                <span className="buttoncaptionportfolio-contact">{caption3}</span>
            </Link>
        </div>
        </div>

    )
}
export default Portfoliobuttons;