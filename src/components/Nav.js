import React, { useContext } from 'react'
import { Button, Container, Navbar, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import GoBackButton from './GoBackButton';
import { Person, PersonFill } from 'react-bootstrap-icons';

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
            <Link className='text-decoration-none Nav' to="about"> about </Link>
            { user ? 
              <Button 
                size='lg'
                className='d-flex'
                onClick={logout}>
              {/* Logout */}
                {/* <span class="material-symbols-outlined">
                  person_filled
                </span> */}
                <PersonFill 
                // size="s"
                />
              </Button> :
              <Button 
                size='lg'
                className='d-flex'
                onClick={login}>
              {/* Login */}
              {/* <span class="material-symbols-outlined">
                  person_off
              </span> */}
              <Person 
              // size="s"
              />
              </Button>
            }
          </Container>
        </Navbar>
    </>
  )
}

export default Nav;