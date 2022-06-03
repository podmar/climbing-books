import React, { useContext } from 'react'
import { Button, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Nav() {
    const { user, setUser } = useContext(AuthContext);

    const login = () => {
        setUser({ userName: "Marta" })
        console.log(user)
    }

    const logout = () => {
        setUser(null)
        console.log(user)
    }

  return (
    <>
        <Navbar fixed="top" className='Nav'>
          <Container>         
            <Link className='text-decoration-none Nav' to="/"> Home </Link>
            <Link className='text-decoration-none Nav' to="detail"> Detail </Link>
            <Link className='text-decoration-none Nav' to="register"> Register </Link>
            <Link className='text-decoration-none Nav' to="chatroom"> Chatroom </Link>
            <Link className='text-decoration-none Nav' to="data"> Data </Link>
            { user ? 
              <Button onClick={logout}>Logout</Button> :
              <Button onClick={login}>Login</Button>
            }
          </Container>
        </Navbar>
    </>
  )
}

export default Nav;