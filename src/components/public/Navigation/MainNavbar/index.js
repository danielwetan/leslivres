import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input
} from 'reactstrap';

import { Link } from 'react-router-dom'

// import Logo from '../../../../images/logo/logo.png'
// import ProfileImg from '../../../../assets/images/profile.jpg'

const NavbarMain = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownToggle = () => setDropdownOpen(prevState => !prevState)

  return (
    <>
      <Navbar light expand="md">
        <span class="navbar-toggler border-0" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-ellipsis-v nav-icon"></i>
        </span>
        <div className="text-center">
          {/* <NavbarBrand>
            <img src={Logo} width="180" height="50" alt="" className="logo"></img>
          </NavbarBrand> */}
        </div>

        <div class="d-sm-block d-md-none">
          <ul class="navbar-nav ">
            <li class="nav-item ">
              <span class="nav-link ">
                {/* Public User */}
                <Dropdown caret direction="left" isOpen={dropdownOpen} toggle={dropdownToggle} className="profile-dropdown-bg">
                  <DropdownToggle className="profile-dropdown-bg border-0 px-0 py-0">
                    <div className="profile-rounded">
                      <span class="fas fa-user"></span>
                    </div>
                  </DropdownToggle>

                  <DropdownMenu className="mt-4">
                    <Link to="/detail"><DropdownItem>Profile</DropdownItem></Link>
                    <Link to="/add-book"><DropdownItem>Add book</DropdownItem></Link>
                    <DropdownItem>Favorite</DropdownItem>
                    <DropdownItem>Logout</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                {/* Logged User */}


                {/* <Dropdown isOpen={dropdownOpen} toggle={dropdownToggle} className="profile-dropdown-bg">
                  <DropdownToggle className="profile-dropdown-bg border-0 px-0 py-0">
                  <div class="profile-img-container">
                    <img src={ProfileImg} alt="Avatar" className="profile-img"></img>
                  </div>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Some Action</DropdownItem>
                    <DropdownItem>Some Action</DropdownItem>
                    <DropdownItem>Some Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown> */}
              </span>
            </li>
          </ul>
        </div>
        <form className="form-inline d-none d-md-block">
          <Input type="text" name="search" placeholder="What are you looking for?" className="pl-3 search-bar" style={{ width: "800px" }} />
        </form>

        <form className="form-inline d-block d-md-none">
          <Input type="text" name="search" placeholder="What are you looking for?" className="pl-3 search-bar" style={{ width: "320px" }} />
        </form>

        <div class="d-none d-md-block">
          <ul class="navbar-nav px-3">
            <li class="nav-item ">
              <span class="nav-link ">
                {/* Public User */}
                {/* <Dropdown caret direction="left" isOpen={dropdownOpen} toggle={dropdownToggle} className="profile-dropdown-bg">
                  <DropdownToggle className="profile-dropdown-bg border-0 px-0 py-0">
                  <div className="profile-rounded">
                  <span class="fas fa-user"></span>
                </div>
                  </DropdownToggle>

                  <DropdownMenu className="mt-4">
                    <Link to="/detail"><DropdownItem>Profile</DropdownItem></Link>
                    <Link to="/add-book"><DropdownItem>Add book</DropdownItem></Link>
                    <DropdownItem>Favorite</DropdownItem>
                    <DropdownItem>Logout</DropdownItem>
                  </DropdownMenu>
                </Dropdown> */}



                {/* <div class="dropdown" className="profile-dropdown-bg">
<button data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="border-0 bg-light">
<div class="profile-img-container">
<img src={ProfileImg} alt="Avatar" className="profile-img" width="40px" height="40px"></img>
</div>
</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
<button class="dropdown-item" onClick={toggle}>Action</button>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
</div>
</div> */}


                {/* Logged User */}
                <Dropdown direction="left" isOpen={dropdownOpen} toggle={dropdownToggle} className="profile-dropdown-bg">
                  <DropdownToggle className="profile-dropdown-bg border-0 px-0 py-0">
                    {/* <div class="profile-img-container">
                      <img src={ProfileImg} alt="Avatar" className="profile-img"></img>
                    </div> */}
                  </DropdownToggle>
                  <DropdownMenu className="mt-4">
                    <Link to="/detail"><DropdownItem>Profile</DropdownItem></Link>
                    <Link to="/add-book"><DropdownItem>Add book</DropdownItem></Link>
                    <DropdownItem>Favorite</DropdownItem>
                    <DropdownItem>Logout</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

              </span>
            </li>
          </ul>
        </div>

      </Navbar>
    </>
  );
}

export default NavbarMain;