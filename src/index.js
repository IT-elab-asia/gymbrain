import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Home from './pages/home.js'
import Gym1 from './pages/gym1';
import SignUp from './pages/signup';
import LogIn from './pages/login';
import GymDetail from './pages/gym-detail';
import Passing from './pages/course-passing';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path="/gym1" component={Gym1} />
      <Route exact path="/gym-detail" component={GymDetail} />
      <Route exact path="/passing" component={Passing} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={LogIn} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
