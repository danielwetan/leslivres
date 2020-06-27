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

import Logo from '../../images/logo/logo.png'
// import ProfileImg from '../../images/profile.jpg'

import { Link } from 'react-router-dom'

const NavbarMain = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const dropdownToggle = () => setDropdownOpen(prevState => !prevState)
 
  return (
    <>
      <Navbar light expand="md">
      <span class="navbar-toggler border-0" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-ellipsis-v nav-icon"></i>
      </span>
        <div className="text-center">
        <NavbarBrand>
          <img src={Logo} width="150" height="50" alt="" className="logo"></img>
        </NavbarBrand>
        </div>

        <div class="d-sm-block d-md-none">
        <ul class="navbar-nav ">
            <li class="nav-item ">
              <span class="nav-link ">
                  {/* Public User */}
                  <Dropdown direction="left" isOpen={dropdownOpen} toggle={dropdownToggle} className="profile-dropdown-bg">
                  <DropdownToggle className="profile-dropdown-bg border-0 px-0 py-0">
                  <div className="profile-rounded">
                  <span class="fas fa-user"></span>
                  </div>
                  </DropdownToggle>
                  <DropdownMenu className="mt-4">
                    {/* <DropdownItem>Login</DropdownItem>
                    <DropdownItem>Register</DropdownItem> */}
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownItem>Add book</DropdownItem>
                    <DropdownItem>Favorite</DropdownItem>
                    <DropdownItem>Logout</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                 {/* Logged User */}


                {/* <Dropdown isOpen={dropdownOpen} toggle={dropdownToggle} className="profile-dropdown-bg">
                  <DropdownToggle className="profile-dropdown-bg border-0 px-0 py-0">
                  <div class="profile-img-container">
                    <img src={ProfileImg} alt="Avatar" className="profile-img" width="40px" height="40px"></img>
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
        
        <Input type="text" name="Search" placeholder="What are you looking for?" className="pl-3 search-bar" />
        <div class="d-none d-md-block">
        <ul class="navbar-nav px-3">
            <li class="nav-item ">
              <span class="nav-link ">

                  {/* Public User */}
                  <Dropdown direction="left" isOpen={dropdownOpen} toggle={dropdownToggle} className="profile-dropdown-bg">
                  <DropdownToggle className="profile-dropdown-bg border-0 px-0 py-0">
                  <div className="profile-rounded">
                  <span class="fas fa-user"></span>
                </div>
                  </DropdownToggle>
                  <DropdownMenu className="mt-4">
                    {/* <DropdownItem>Login</DropdownItem>
                    <DropdownItem>Register</DropdownItem> */}
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownItem>Add book</DropdownItem>
                    <DropdownItem>Favorite</DropdownItem>
                    <DropdownItem>Logout</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                 {/* Logged User */}


                {/* <Dropdown isOpen={dropdownOpen} toggle={dropdownToggle} className="profile-dropdown-bg">
                  <DropdownToggle className="profile-dropdown-bg border-0 px-0 py-0">
                  <div class="profile-img-container">
                    <img src={ProfileImg} alt="Avatar" className="profile-img" width="40px" height="40px"></img>
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

      </Navbar>
    </>
  );
}

export default NavbarMain;