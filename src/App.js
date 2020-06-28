import React from 'react';
import Detail from './pages/DetailBook'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register';
import AddBook from './pages/AddBook'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/add-book">
            <AddBook />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
