import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Notes from '../components/Notes'

function MyRack() {
  return (
    <>
    <Row className='justify-content-center py-5 mt-4'>
      <Col>
        <h1>my rack</h1>
        <h5>here are the books placed on your rack</h5>
      </Col>
    </Row>
    <Row>
      <Col>
        <Notes />
      </Col>
    </Row>
  </>
  )
}

export default MyRack