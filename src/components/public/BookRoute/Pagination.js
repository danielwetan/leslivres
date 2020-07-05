import React from 'react';

import { Link } from 'react-router-dom';

const Pagination = () => {
  return(
    <>
      <nav>
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <Link to="/" className="page-link" tabIndex="-1" aria-disabled="true">
              Previous
            </Link>
          </li>
          <li className="page-item"><a href="/book?page=1" className="page-link">1</a></li>
          <li className="page-item"><a href="/book?page=2" className="page-link">2</a></li>
          <li className="page-item"><a href="/book?page=3" className="page-link">3</a></li>
          <li className="page-item">
            <Link to="/" className="page-link">
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Pagination;