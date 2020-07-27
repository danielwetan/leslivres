import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';


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
import Swal from 'sweetalert2';


import './Menu.css';

import {connect} from 'react-redux';
import {logout} from '../../../redux/actions/auth'

const Menu = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // const logout = () => {
  //   props.logout()
  //   console.log("Logout!!")
  //   const Toast = Swal.mixin({
  //     toast: true,
  //     position: 'top-end',
  //     showConfirmButton: false,
  //     timer: 3000,
  //     timerProgressBar: true,
  //     onOpen: toast => {
  //       toast.addEventListener('mouseenter', Swal.stopTimer)
  //       toast.addEventListener('mouseleave', Swal.resumeTimer)
  //     }
  //   })
  //   Toast.fire({
  //     icon: 'success',
  //     title: 'Logout success!'
  //   })
  //   props.history.push('/')
  // }


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
              <NavLink href="/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="book">Collection</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Faq</NavLink>
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
const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = { logout };

const routePush = withRouter(Menu)

export default connect(mapStateToProps, mapDispatchToProps)(routePush);