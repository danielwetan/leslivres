import React from 'react';
import MainNavbar from '../../components/admin/Menu'
import Sidebar from '../../components/admin/Navigation/Sidebar'
import Main from '../../components/admin/Authors'

const Authors = () => {
  return (
    <>
    <div className="container bg-white ">
      <MainNavbar />
      <div className="container">
        <div className="row">
          <Sidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-white">
            <Main />
          </main>
        </div>
      </div>
    </div>  
    </>
  );
}

export default Authors;