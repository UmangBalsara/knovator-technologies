import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Posts from './components/Posts';
import NotFound from './components/NotFound';

const App=()=> {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/post" component={Posts}/>
          <Route exact path="*" component={NotFound}/>
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
