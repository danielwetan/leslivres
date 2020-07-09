import React from 'react';
import MainNavbar from '../../components/public/Navigation/MainNavbar'
import Sidebar from '../../components/public/Navigation/Sidebar'
import Footer from '../../components/public/Footer'
import Main from '../../components/public/BookRoute';
import Menu from '../../components/public/Menu'

const Home = () => {
  return (
    <>
    <div className="container bg-white ">
      {/* <MainNavbar /> */}
      <Menu />
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

export default Home;