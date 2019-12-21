import React, {Component} from 'react'
import'./Portfolio.css';
import Portfoliobuttons from '../navigation/portfoliobuttons'
import Card from './Cards/Card'


class Portfolio extends Component{
    render () {
      return (

        <div className="portfolio-background">
              <img src="/images/dplogoPortfolio.png" alt="logo" className="logo-porfolio"/>
          <div className="buttons-position">
          <Portfoliobuttons caption="Home" caption2="About" caption3="Contact" caption1="Portfolio"></Portfoliobuttons>
          </div>

              <div id="cardset">
          <Card title="click Game" description="play with click!"image="/images/card2.png"></Card>
          <Card title="Eat Like a Champ!" description="Go to Website!"image="/images/card1.png">></Card>
          <Card title="Eat Like a Champ!" description="Go to Website!"image="/images/card3.png"></Card>
          <Card title="Eat Like a Champ!" description="Go to Website!"image="/images/card4.png"></Card>\
              </div>

              <span id="pachonstyle">
                    Pachon Style Design
            </span>
    
        </div>

      );
    }
    }
    export default Portfolio;