import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = props => {
    return (
      <>
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse sidenav navbar-collapse">   
      <div class="sidebar-sticky pt-3">
        <div class="d-flex justify-content-between align-items-center px-3 mt-3 mb-1 text-muted sidebar-title ">
          Author
        </div>
        <div className="sidebar-body">
        <ul class="nav flex-column">
          <li class="nav-item">
            <span class="nav-link sidebar-link">
              <Link to="/">
              <span>J.K. Rowling</span>
              </Link>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link sidebar-link">
              <Link to="/add-book">
              <span>Suzanne Collins</span>
              </Link>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link sidebar-link">
              <Link to="/">
              <span>Plato</span>
              </Link>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link sidebar-link">
              <Link to="/">
              <span>Nelson Mandela</span>
              </Link>
            </span>
          </li>
          </ul>
        </div>

        <div class="d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted sidebar-title">
          Genre
        </div>
        <div className="sidebar-body">
        <ul class="nav flex-column">
        <li class="nav-item">
            <span class="nav-link sidebar-link">
              <Link to="/book?genre=classic">
              {/* <span><i class="fas fa-envelope mr-2"></i>Contact</span> */}
              <span>Classic</span>
              </Link>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link sidebar-link">
              <Link to='/book'>
              {/* <span><i class="fas fa-info-circle mr-2"></i>About</span> */}
                <span>Fiction</span>
              </Link>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link sidebar-link">
              <Link to="/">
              {/* <span><i class="fas fa-question-circle mr-2"></i>Faq</span> */}
              <span>Biography</span>

              </Link>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link sidebar-link">
              <Link to="/">
              {/* <span><i class="fas fa-cog mr-2"></i>Technologies</span> */}
              <span>History</span>
              </Link>
            </span>
          </li>

          {/* <li class="nav-item">
            <span class="nav-link sidebar-link">
              <Link to="/profile">
              <span>Profile</span>
              </Link>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link sidebar-link">
              <Link to="/login">
              <span>Login</span>
              </Link>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link sidebar-link">
              <Link to="/register">
              <span>Register</span>
              </Link>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link sidebar-link">
              <Link to="/admin">
              <span>Admin</span>
              </Link>
            </span>
          </li> */}

          </ul>
        </div>

        

        {/* <div className="sidebar-body ">
        <ul class="nav flex-column my-3">
          <li class="nav-item">
            <span class="nav-link">
              <span data-feather="home"></span>
              <Link to="/login">Login</Link>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link">
              <span data-feather="home"></span>
              Register
            </span>
          </li>
        </ul>
        </div> */}
        
      </div>
    </nav>
      </>
    );
}

export default Sidebar;