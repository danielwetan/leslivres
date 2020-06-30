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
          <Route path="/book/:bookId" component={Detail} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/add-book" component={AddBook} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
