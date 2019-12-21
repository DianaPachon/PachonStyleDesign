import React, { Component } from 'react'
import './About.css';
import Aboutbuttons from '../navigation/aboutbuttons'




class About extends Component {
  render() {
    return (


      <div className="About">
  
                <Aboutbuttons className="buttoncaptionabout" id="roundbuttonabout" 
        caption="About" 
        caption1="Portfolio" 
        caption2="Home"
        caption3="Contact">
          
        </Aboutbuttons>
        <div> 
          <img src="/images/type.png" alt="logo" className="typer">
            </img>
            </div>
        <div className="upperbackground">


        <div className="title"> Diana Pachon</div>
        <img id="imagediana" src="/images/diapac.png" alt="Diana"></img>
        

          <header className="About-info">Born in Colombia, I have been living in Miami for over 17 years and frequently travel abroad to Latin America, Europe and Africa.
After 10 years of experience in Interior Design, hospitality and Project Management, I am venturing into the world of web development to better reach clients and showcase my skills.
I have demonstrated great ability to assist and coordinate companies team with the execution of multiple sales. I have developed relationships for projects with Eolo Design, Sanandres Construction and Bali Designs.

Always seeking professional challenges, I am eager to contribute to the design and web development community by focusing my expertise in UI/UX design and front end. I work diligently
to provide excellence in all my professional endeavors and have earned a reputation of integrity, initiative, and results-driven
work ethic. Incorporating User Interface Design, HTML, CSS, Javascript, Node.js to my vast experience in Photoshop, Illustrator will
help me to make a great impact on each project I am working on. </header>

            </div>

       

      </div>
    );
  }
}
export default About;
