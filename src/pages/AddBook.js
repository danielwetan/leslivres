import React from 'react'

import NavbarMain from '../components/Navigation/NavbarMain'
import Sidebar from '../components/Navigation/Sidebar'
import Footer from '../components/Footer/Footer'
import Main from '../components/Page/AddBook/Main';

const AddBook = () => {
  return(
    <>
    <div className="container bg-white">
      <NavbarMain />
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