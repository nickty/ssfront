
import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';

function App() {

  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
      </div>
    </Router>
  )
}

export default App;
