import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PublicRoutes, AdminRoutes } from '../src/routes';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          {PublicRoutes.map((route, index) => <Route key={index} {...route} />)}
          {AdminRoutes.map((route, index) => <Route key={index} {...route} />)}
        </Switch>
      </Router>
    </>
  );
}

export default App;
