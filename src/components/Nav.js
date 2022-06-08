import React, { useContext } from 'react'
import { Button, Container, Navbar, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import GoBackButton from './GoBackButton';

function Nav() {
    const { user, setUser, logout } = useContext(AuthContext);
    const navigateTo = useNavigate();

    const login = () => {
        navigateTo("login");
    };

  return (
    <>
        <Navbar fixed="top" className='Nav'>
          <Container>
            <GoBackButton/>
            <Link className='text-decoration-none Nav' to="/"> home </Link>
            <Link className='text-decoration-none Nav' to="myrack"> my rack </Link>
            {/* <Link className='text-decoration-none Nav' to="data"> Data </Link> */}
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