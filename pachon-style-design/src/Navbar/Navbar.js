import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
return (

    <nav className="navbar navbar-expand-lg nav">
           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
           <span align="center" class="navbar-text" >
      Pachon Style Design
    </span>
   
            <div className= "col-12" id="background">
               <img className="img-responsive" align="left" id="dplogo" src='/images/logDP9.12.19.png' alt=""></img>
               </div>
      

           <div className="navbar-nav ml-auto">
           {/* <Link to="/"className="nav-item nav-link ml-4">Home </Link>
                     <Link to="/About"className="nav-item nav-link ml-4">About</Link>
                     <Link to="/Portfolio" className="nav-item nav-link ml-4">Portfolio</Link>
                     <Link to="/Contact" className="nav-item nav-link ml-4"> Contact Me</Link>
               </div> */}

           {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button> */}

           </div>
       </nav>
)
}

/*{ class Navbar extends Component{

    render(){
        console.log(this.props);
        return(
            <div className="navi-link">
                 < div className="col">
                     <a href="About.js">About</a>
                <div className="col">
                        <a href="Portfolio.html">PORTFOLIO</a>
                </div>
                <div className="col-auto" id="contact">
                        <a href="Contact.html">CONTACT ME</a>
                </div>
                     
                 </div>
            </div>
        )
    }
} */

export default Navbar;