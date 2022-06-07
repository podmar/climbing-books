import React, { useContext, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import GoToButton from '../components/GoToButton';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    login(email, password)
    console.log("loggedin");
  };

  return (
    <>
      <Row className='justify-content-center py-5  mt-4'>
        <Col>
          <h1>login</h1>
          <h5>already have an account? login below</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label >email:</Form.Label>
            <Form.Control type="email" name="email" onChange={handleEmailChange} 
            // value={email}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>password:</Form.Label>
            <Form.Control type="password" name="password" onChange={handlePasswordChange} 
            // value={password}
            />
          </Form.Group>
            <Button type="primary" onClick={handleLogin}>Login</Button>
            </Form>
        </Col>
      </Row>
      <Row className='py-3'>
        <Col>
          <p>Not a user yet? Register here:</p>
          <GoToButton path="register" element="registration page" />
        </Col>
      </Row>
    </>
  )
}

export default Login