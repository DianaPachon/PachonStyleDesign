import React, {Component} from 'react'
// import Navbar from './Navbar/Navbar.js'; 
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';



class App extends Component{
render () {
  return (
    <BrowserRouter>
    <div className="SecondBorder">
       <div className="App">
      
            <Switch>
              <Route exact path='/' component={Home} />
              <Route  path='/About' component={About} />
              <Route  path='/Portfolio' component={Portfolio} />
              <Route  path='/Contact' component={Contact} />

            </Switch>




      </div>
    </div>
    </BrowserRouter>
  );
}
}
export default App;