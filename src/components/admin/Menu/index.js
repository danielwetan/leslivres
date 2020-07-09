import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Input,
  Button
} from 'reactstrap';

import Logo from '../../../images/logo/logo.png'


const Menu = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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