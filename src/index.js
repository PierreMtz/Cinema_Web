import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CreeFilm from './Screens/Administration/CreeFilm';
import Home from './Screens/Home/Home';
import AppNavBar from './Screens/AppNavbar';
import Login from './Screens/Login/Login';
import reportWebVitals from './reportWebVitals';
import ProtectedRoute from './ProtectedRoute';
import {
   BrowserRouter as Router,
   Route,
   Switch,
 } from 'react-router-dom'
import Clients from './Screens/Clients/Clients';


const Root = () => {
  return(
    <div className="app-background">
    <Router>
      <Switch>
        <Route exact path='/'  component={Home} />
        <ProtectedRoute exact path='/Admin' component={CreeFilm} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/navbar' component={AppNavBar} />
        <Route exact path='/clients' component={Clients} />
      </Switch>
    </Router>
    </div>
  )
}
ReactDOM.render(<Root />, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
