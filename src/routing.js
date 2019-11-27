import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import App from './App'
import Contact  from './contact/Contact'
import PageNotFound from './error/pageNotFound'
import Header from './header/Header'

function Routing() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={PageNotFound} /> 
      </Switch>
    </Router>
  );
}

export default Routing;
