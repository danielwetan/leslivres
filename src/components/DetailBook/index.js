import React from 'react'
import Img from '../../images/harry-potter.jpg';

const DetailBook = () => {
  return(
    <>
      <div class="row mt-4">
<div class="col-md-3 col-sm-8 mb-3 text-center">
    <img src={Img} class="card-img-top" alt="..."></img>
    <button class="btn btn-outline-danger mt-2 px-5">Borrow</button>
</div> {/* Col-md-3 */}


<div class="col-md-6 col-sm- mb-3">
  <div class="card border-0">
    <h5 class="mb-3">Harry Potter and the Order of the Phoenix</h5>
    <p>
    There is a door at the end of a silent corridor. And it’s haunting Harry Pottter’s dreams. Why else would he be waking in the middle of the night, screaming in terror?
    </p>
    <p>
    Harry has a lot on his mind for this, his fifth year at Hogwarts: a Defense Against the Dark Arts teacher with a personality like poisoned honey; a big surprise on the Gryffindor Quidditch team; and the looming terror of the Ordinary Wizarding Level exams. But all these things pale next to the growing threat of He-Who-Must-Not-Be-Named - a threat that neither the magical government nor the authorities at Hogwarts can stop.
    </p>
  </div>
  <div class="card border-0">
    <h5 class="mb-3">Harry Potter and the Order of the Phoenix</h5>
    <p>
    There is a door at the end of a silent corridor. And it’s haunting Harry Pottter’s dreams. Why else would he be waking in the middle of the night, screaming in terror?
    </p>
    <p>
    Harry has a lot on his mind for this, his fifth year at Hogwarts: a Defense Against the Dark Arts teacher with a personality like poisoned honey; a big surprise on the Gryffindor Quidditch team; and the looming terror of the Ordinary Wizarding Level exams. But all these things pale next to the growing threat of He-Who-Must-Not-Be-Named - a threat that neither the magical government nor the authorities at Hogwarts can stop.
    </p>
  </div>
</div> {/* Col-md-3 */}



<div class="col-md-3 col-sm-12">
  <div class="card border-0">
  <span class="badge badge-pill badge-primary">Available</span>
  <span>Author: J.K. Rowling</span>
  <span>Genre: Fiction</span>
  <span>Year: 2010</span>
  <div class="row px-1 text-center">
  <div class="col-md-6 col-6">
  <span class="badge badge-primary">Edit</span>
  </div>
  <div class="col-md-6 col-6">
  <span class="badge badge-primary">Delete</span>

  </div>
  </div>

  </div>
</div> {/* Col-md-3 */}


      </div> {/* Row */}
    </>
  )
}

export default DetailBook;