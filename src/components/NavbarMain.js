import React, { useState } from 'react';
import {
  Container, 
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Main Navbar */}
      <Container>
      <Navbar light expand="md" className="bg-light">
        <NavbarBrand href="/">National Library</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      {/* Sidebar */}
      <Row>
        <Col md="3" className="bg-light mt-3 sticky-top">
          <div className="card sticky-top">
          <h3>National Library</h3>
          <p><b>Library</b></p>
          <p>Home</p>
          <p>Newest</p>
          <p>Categories</p>
          <p>Favourites</p>
          <p><b>Discover</b></p>
          <p>About</p>
          <p>Contact</p>
          <p>Faq</p>
          <p>Technologies</p>
          <p><b>Login</b></p>
          <p><b>Register</b></p>
          </div>
        </Col>
        <Col md="9" className="bg-light mt-3 main-content">
          <p>Main</p>
        </Col>
      </Row>
      <Row>
          <Col className="bg-light mt-3 offset-md-3 text-center">
            <p>Footer</p>
          </Col>
          </Row>



      </Container>
    </>
  );
}

export default Example;