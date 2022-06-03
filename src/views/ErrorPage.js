import React from 'react'
import { Col, Row } from 'react-bootstrap'
import GoToButton from "../components/GoToButton"

function ErrorPage() {
  return (
    <>
      <Row className='justify-content-center py-5 mt-4'>
        <Col>
          <h1>snap!</h1>
          <h5>The page you're trying to access does not exist. </h5>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col>
        
          <p>How about you take a look at some books on the main page instead?</p>
          <GoToButton path="/" element="main page" />

        </Col>
      </Row>
    </>
  )
}

export default ErrorPage