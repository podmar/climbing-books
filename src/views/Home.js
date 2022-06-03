import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import BookList from '../components/BookList';

function Home() {
  return (
    <>
      <Row className='justify-content-center py-5 mt-4'>
        <Col>
            <h1>vertical library</h1>
            <h5>grow beyond the horizon</h5> 
        </Col>
      </Row>
      <BookList />
    </>
  )
}

export default Home;