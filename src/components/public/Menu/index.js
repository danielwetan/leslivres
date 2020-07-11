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

// import Logo from '../../../images/logo/logo.png'

import { Link } from 'react-router-dom';

import './Menu.css';

const Menu = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="light" light className="bg-white" expand="md" >
        <NavbarBrand href="/" className="nav-brand-text">
          {/* <img src={Logo} width="160" height="40" alt="" className="logo"></img> */}
          <span className="brand-a">Les</span><span className="brand-b">Livres</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav-text mr-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://localhost:5000/book">Collection</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Faq</NavLink>
            </NavItem>
            <NavItem>
            </NavItem>
          </Nav>
          <NavbarText>
            <Link to="/login">
              <button className="btn bg-white border-0 btn-blue" style={{color: "grey"}}>Login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-blue" >Register</button>
            </Link>
          </NavbarText>
        </Collapse>
      </Navbar>
    </>
  )
}

export default Menu;