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
    login(email, password)
    console.log("loggedin");
    // register(email, password)
  };

  return (
    <>
      <Row className='justify-content-center py-5  mt-4'>
        <Col>
          <h1>login</h1>
        </Col>
      </Row>
      <Row>
        <Col>
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" onChange={handleEmailChange} 
            // value={email}
            />
        </Col>
        <Col>
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" onChange={handlePasswordChange} 
            // value={password}
            />
        </Col>
        <Col className='align-items-flex-end'>
            <Button type="primary" onClick={handleLogin}>Login</Button>
        </Col>
      </Row>
      <Row>
        <GoToButton path="/" element="home page" />
      </Row>

      {/* <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form> */}

    </>
  )
}

export default Login