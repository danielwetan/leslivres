import React from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import backgroundImg from '../images/library-1.jpg';

function Login() {
  return(
    <>
    <Container>
      <Row>
        <Col md="8" className="bg-dark text-white">
          <img src={backgroundImg}
          alt="Book"
          width="100%"
          />
        </Col>
        <Col md="4" className="bg-white form-login">
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Check me out
              </Label>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
      </Col>
    </Row>
  </Container>
    </>
  )
}

export default Login;