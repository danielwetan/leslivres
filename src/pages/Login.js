import React from 'react';
import MainNavbar from '../components/Navigation/MainNavbar'
import Sidebar from '../components/Navigation/Sidebar'
import Footer from '../components/Footer'
import Main from '../components/Login';

class Login extends React.Component {
  render() {
    return (
      <>
      <div className="container bg-white">
      <MainNavbar />
        <div className="container">
          <div className="row">
            <Sidebar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-white">
              <Main />
            </main>
          </div>
        <Footer />
        </div>
      </div>
      </>
      );
  }
}

export default Login;