import React from 'react';
// import MainNavbar from '../../components/public/Navigation/MainNavbar'
// import Sidebar from '../../components/public/Navigation/Sidebar'
import Footer from '../../components/public/Footer'
// import Main from '../../components/public/Home';
import Main from '../../components/public/Beranda'
import Menu from '../../components/public/Menu';

const Home = () => {
  return (
    <>
    <div className="container body-bg ">
      {/* <MainNavbar /> */}
      <Menu />
        <div className="row">
          {/* <Sidebar /> */}
          {/* <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-white">
            <Main />
          </main> */}
          <main role="main" className="col-12 bg-white">
            <Main />
          </main>
        </div>
      <Footer />
    </div>  
    </>
  );
}

export default Home;