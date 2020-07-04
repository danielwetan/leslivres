import React from 'react';
import Detail from './pages/DetailBook'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register';
import AddBook from './pages/AddBook'
import notFound from './pages/404'
import BookRoute from './pages/BookRoute';

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
          <Route path="/book" component={BookRoute} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/add-book" component={AddBook} />
          <Route path="/" exact component={Home} />
          <Route path="*" component={notFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
