import React from 'react';
import NavbarMain from '../components/Navigation/NavbarMain'
import Sidebar from '../components/Navigation/Sidebar'
import MainContent from '../components/Page/Home/MainContent'
import Footer from '../components/Footer/Footer'
const Home = () => {
  return (
  <>
  <div className="container bg-white">
    <NavbarMain />
    <div className="container">
      <div className="row">
        <Sidebar />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <MainContent />
        </main>
      </div>
    <Footer />
    </div>
  </div>
  </>
  );
}

export default Home;