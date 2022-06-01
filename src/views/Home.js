import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import BookList from '../components/BookList';

function Home() {
  return (
    <>
      <Row className='justify-content-center'>
        <Col>
            <h1>vertical library</h1>
            <h5>grow beond the horizon</h5> 
        </Col>
      </Row>
      <BookList />
    </>
  )
}

export default Home;