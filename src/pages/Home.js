import React from 'react';
import NavbarMain from '../components/Navigation/NavbarMain'
import Sidebar from '../components/Navigation/Sidebar'
import MainContent from '../components/Page/Home/MainContent'
import Footer from '../components/Footer/Footer'

import Featured from '../components/Page/Home/Featured'
import Popular from '../components/Page/Home/Popular'
import Genre from '../components/Page/Home/Genre'

import backgroundImg from '../images/background/svg/book-lover.svg'

const Home = () => {
  return (
  <>
  <div className="container bg-white">
    <NavbarMain />
    <div className="container">
      <div className="row">
        <Sidebar />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <div className="row">
            <div className="col-md-6">
              <Featured />
            </div>
            <div className="col-md-6">
              <img src={backgroundImg}
              className="login-img"
              alt="Book"
              width="100%"
              height="100%"></img>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Genre />
            </div>
            <div className="col-md-6">
              <Popular />
            </div>
          </div>
          <div class="col-md-12">
            <MainContent />
          </div>
        </main>
      </div>
    <Footer />
    </div>
  </div>
  </>
  );
}

export default Home;