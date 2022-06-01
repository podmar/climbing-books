import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import SeeDetailButton from './SeeDetailButton'

function BookPreview({props}) {

  return (
      <>
        <Row
        className='justify-content-center'
        >
            <Col>
                <h5>{props.volumeInfo.title} </h5>
            </Col>
        </Row>
        <Row>
            <Col xs={4} md={3} l={2}>
                <Image thumbnail="true" fluid="true" src={props.volumeInfo.imageLinks.thumbnail} alt={`Cover photo of the book ${props.volumeInfo.title}`}/>
            </Col>
            <Col>
                <p>{`${props.volumeInfo.description.slice(0, 100)}...`}</p>
                <SeeDetailButton id={props.id} />
            </Col>
        </Row>
      </>
  )
}

export default BookPreview