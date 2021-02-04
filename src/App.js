import React from 'react' 
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './Components/Home'
import {Resume} from './Components/Resume'
import {About} from './Components/About'
import {Portfolio} from './Components/Portfolio'
import {NoMatch} from './Components/NoMatch'
import {Layout} from './Layout'
// import {Navigation} from './Components/Navigation'
import {Footer} from './Components/Footer'
import logo from './Components/Images/logo.png' 


function App() { 
  return (
    <React.Fragment>
      <Layout className='cover'>
      <Router>
        <header className='header'>
        <Link to='/'><img src={logo} alt='Karla' className='App-logo'/></Link>
        <nav className="nav">
        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/About' className='nav-link'>About</Link>
        <Link to='/Resume' className='nav-link'>Resume</Link>
        <Link to='/Portfolio' className='nav-link'>Portfolio</Link>
        </nav>
        </header>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/About' component={About}/>
          <Route exact path='/Resume' component={Resume}/>
          <Route exact path='/Portfolio' component={Portfolio}/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
      <Footer/>
      </Layout>
    </React.Fragment>
  );
}

export default App;
