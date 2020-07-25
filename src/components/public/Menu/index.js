import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
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
              <NavLink href="http://192.168.43.186:5000">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://192.168.43.186:5000/book">Collection</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://192.168.43.186:5000">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://192.168.43.186:5000">Faq</NavLink>
            </NavItem>
            <NavItem>
            </NavItem>
          </Nav>
          <NavbarText>
            <Link to="/login">
              <button className="btn bg-white border-0">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-info btn-blue" >Register</button>
            </Link>
          </NavbarText>
        </Collapse>
      </Navbar>
    </>
  )
}

export default Menu;