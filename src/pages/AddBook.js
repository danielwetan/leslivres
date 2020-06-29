import React from 'react'

import MainNavbar from '../components/Navigation/MainNavbar/index'
import Sidebar from '../components/Navigation/Sidebar/index'
import Footer from '../components/Footer/index'
import Main from '../components/AddBook/index';

const AddBook = () => {
  return(
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
      <Footer />
      </div>
    </div>
    </>
  )
}

export default AddBook