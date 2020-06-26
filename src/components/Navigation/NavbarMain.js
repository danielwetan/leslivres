import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

import Logo from '../../images/logo/logo.png'

const NavbarMain = (props) => {

  return (
    <>
      <Navbar light expand="md">
        <NavbarBrand>
          <img src={Logo} width="150" height="50" alt=""></img>
        </NavbarBrand>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </Navbar>
    </>
  );
}

export default NavbarMain;