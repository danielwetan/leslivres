import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = props => {
    return (
      <>
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse sidenav navbar-collapse">   
          <div class="sidebar-sticky pt-3">
            <div className="sidebar-body">
            <ul class="nav flex-column">
              <li class="nav-item">
                <span class="nav-link sidebar-link">
                  <Link to="/admin">
                  <span><i class="fas fa-home mr-2"></i>Home</span>
                  </Link>
                </span>
              </li>
              <li class="nav-item">
                <span class="nav-link sidebar-link">
                  <Link to="/admin/books">
                  <span><i class="fas fa-book mr-2"></i>Books</span>
                  </Link>
                </span>
              </li>
              <li class="nav-item">
                <span class="nav-link sidebar-link">
                  <Link to="/admin/genres">
                  <span><i class="fas fa-folder mr-2"></i>Genres</span>
                  </Link>
                </span>
              </li>
              <li class="nav-item">
                <span class="nav-link sidebar-link">
                  <Link to="/admin/authors">
                  <span><i class="fas fa-pen mr-2"></i>Authors</span>
                  </Link>
                </span>
              </li>
              <li class="nav-item">
                <span class="nav-link sidebar-link">
                  <Link to="/admin/users">
                  <span><i class="fas fa-user mr-2"></i>Users</span>
                  </Link>
                </span>
              </li>
              </ul>
            </div>        
          </div>
        </nav>
      </>
    );
}

export default Sidebar;