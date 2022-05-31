import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap';
import GoToButton from '../components/GoToButton'
import { AuthContext } from '../context/AuthContext';

function Register() {
  const {register} = useContext(AuthContext);
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

  const handleRegister = (event) => {
    console.log("registered");
    register(email, password)
  };

  return (
    <>
      <div>Register</div>
      <div>
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" onChange={handleEmailChange} 
        // value={email}
        />
        <label htmlFor="password"></label>
        <input type="password" name="password" id="password" onChange={handlePasswordChange} 
        // value={password}
        />
        <Button type="primary" onClick={handleRegister}>Register</Button>
      </div>
      <GoToButton path="/" element="home page" />
    </>
  )
}

export default Register