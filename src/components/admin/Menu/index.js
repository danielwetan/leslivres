import React from 'react';

import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

// import Logo from '../../../images/logo/logo.png'


const Menu = props => {

  return (
    <>
      <Navbar color="light" light className="bg-white" expand="md" >
        <NavbarBrand href="/" className="nav-brand-text">
          {/* <img src={Logo} width="160" height="40" alt="" className="logo"></img> */}
          <span className="brand-a">Le</span><span className="brand-b">Livre</span>
        </NavbarBrand>
      </Navbar>
    </>
  )
}

export default Menu;