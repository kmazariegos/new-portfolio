import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home} from './Components/Home'
import {Resume} from './Components/Resume'
import {About} from './Components/About'
import {Portfolio} from './Components/Portfolio'
import {NoMatch} from './Components/NoMatch'
import {Layout} from './Layout'
import {Navigation} from './Components/Navigation'
import {Footer} from './Components/Footer'


function App() {
  return (
    <React.Fragment className='cover'>
      <Layout>
      <Navigation/>
      <Router>
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
