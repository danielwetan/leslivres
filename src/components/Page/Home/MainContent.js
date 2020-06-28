import React from 'react';
// import Featured from './Featured';
// import Popular from './Popular';
// import Genre from './Genre';
import Book from './Book';

const MainContent = () => {
  return(
    <>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <div className="content-title">
        <h1 class="h1">Home</h1>
        </div>
      </div>


      {/* Header content */}
       {/* <div className="row">
       <div className="row">
        <div className="col-md-6 col-12">
          <ul>
            <li>Hello</li>
          </ul>
        </div>
        </div>
        
        <div className="col-md-6 col-12 ">
          <div className="row">
          <ul>
            <li>Hello</li>
          </ul>
          </div>
          <div className="row mt-3">
          <ul>
            <li>Hello</li>
          </ul>
          </div>
        </div>
      </div> */}



      
      

      {/* Book section */}
      <div className="row mt-3">
        <div className="col-md-2 col-6">
          <Book />
        </div>
        <div className="col-md-2 col-6">
          <Book />
        </div>
        <div className="col-md-2 col-6">
          <Book />
        </div>
        <div className="col-md-2 col-6">
          <Book />
        </div>
        <div className="col-md-2 col-6">
          <Book />
        </div>
        <div className="col-md-2 col-6">
          <Book />
        </div>
      </div>


      

    </>
  )
}

export default MainContent;