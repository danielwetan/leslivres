import React from 'react'
import Img from '../../images/harry-potter.jpg';

const DetailBook = () => {
  return(
    <>
      <div class="row mt-4">
        <div class="col-md-3 col-sm-8 mb-3 text-center">
          <img src={Img} class="card-img-top" alt="..."></img>
          <button class="btn btn-outline-secondary mt-2 px-5 smallTitle"><i class="fas fa-truck"></i> Borrow</button>
        </div>

        <div class="col-md-6 col-sm-12 mb-3">
          <div class="card border-0">
            <h5 class="mb- smallTitle">Harry Potter and the Order of the Phoenix</h5>
              <p>
                Harry Potter is leaving Privet Drive for the last time. But as he climbs into the sidecar of Hagrid’s motorbike and they take to the skies, he knows Lord Voldemort and the Death Eaters will not be far behind.              </p>
              <p>
                The protective charm that has kept him safe until now is broken. But the Dark Lord is breathing fear into everything he loves. And he knows he can’t keep hiding.              </p>
              <p>
                To stop Voldemort, Harry knows he must find the remaining Horcruxes and destroy them.              </p>
          </div>
        </div>
        
        <div class="col-md-3 col-sm-12">
          <div class="card border-0">
            <div className="book-status mb-1"><span class="badge badge-pill bg-lightgray ">Available</span></div>
            <div><span className="smallTitle">Author:</span> J.K. Rowling</div>
            <div><span className="smallTitle">Genre:</span> Fiction</div>
            <div><button className="book-edit btn bg-white"><i class="fas fa-edit"></i> Edit</button> | <button className="book-edit btn bg-white"><i class="fas fa-trash"></i> Delete</button></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailBook;