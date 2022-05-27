import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Nav() {
    const { user, setUser } = useContext(AuthContext);

    const login = () => {
        setUser({ userName: "Marta" })
        console.log(user)
    }
  return (
    <>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="detail"> Detail </Link>
          <Link to="register"> Register </Link>
          <Link to="chatroom"> Chatroom </Link>
          <Link to="data"> Data </Link>
          <Button variant="info" onClick={login}>Login</Button>
        </nav>
    </>
  )
}

export default Nav;