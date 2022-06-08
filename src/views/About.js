import React from 'react'
import { Col, Row } from 'react-bootstrap'
import GoToButton from '../components/GoToButton'

function About() {
  return (
    <>
      <Row className='justify-content-center py-5  mt-4'>
        <Col>
          <h1>data</h1>
          <h5>there is no content here just yet</h5>
        </Col>
        <Row>
          <Col>
            <GoToButton path="/" element="home page"  />
          </Col>
        </Row>
      </Row>
    </>
  )
}

export default About