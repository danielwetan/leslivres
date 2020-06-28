import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar(props) {
    return (
      <>
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse sidenav navbar-collapse">   
      <div class="sidebar-sticky pt-3">
        <div class="d-flex justify-content-between align-items-center px-3 mt-3 mb-1 text-muted sidebar-title">
          Discover
        </div>
        <div className="sidebar-body">
        <ul class="nav flex-column">
          <li class="nav-item">
            <span class="nav-link sidebar-link">
              <Link to="/">
              <span><i class="fas fa-home mr-2"></i>Home</span>
              </Link>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link sidebar-link">
              <Link to="/add-book">
              <span><i class="fas fa-clock mr-2"></i>Newest</span>
              </Link>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link sidebar-link">
              <Link to="/">
              <span><i class="fas fa-chart-line mr-2"></i>Popular</span>
              </Link>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link sidebar-link">
              <Link to="/">
              <span><i class="fas fa-folder mr-2"></i>Categories</span>
              </Link>
            </span>
          </li>
          </ul>
        </div>

        <div class="d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted sidebar-title">
          Get in touch
        </div>
        <div className="sidebar-body">
        <ul class="nav flex-column">
          <li class="nav-item">
            <span class="nav-link sidebar-link">
              <Link to="/detail">
              <span><i class="fas fa-info-circle mr-2"></i>About</span>
              </Link>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link sidebar-link">
              <Link to="/">
              <span><i class="fas fa-envelope mr-2"></i>Contact</span>
              </Link>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link sidebar-link">
              <Link to="/">
              <span><i class="fas fa-question-circle mr-2"></i>Faq</span>
              </Link>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link sidebar-link">
              <Link to="/">
              <span><i class="fas fa-cog mr-2"></i>Technologies</span>
              </Link>
            </span>
          </li>
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