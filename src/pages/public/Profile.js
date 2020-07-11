import React from 'react';
import MainNavbar from '../../components/public/Menu'
import Footer from '../../components/public/Footer'
import Main from '../../components/public/Profile';

class Profile extends React.Component {
  render() {
    return (
      <>
      <div className="container bg-white">
      <MainNavbar />
        <div className="container">
          <div className="row">
            <main role="main" className="col-md-12 ml-sm-auto bg-white">
              <Main />
            </main>
        <Footer />
          </div>
        </div>
      </div> 
      </>
      );
  }
}

export default Profile;