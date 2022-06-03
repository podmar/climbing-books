import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import SeeDetailButton from './SeeDetailButton'

function BookTitlePreview({props}) {

  return (
      <>
        <Row
        className='justify-content-center py-2'
        >
            <Col xs={4} md={3} l={2}>
                <Image thumbnail="true" fluid="true" src={props.volumeInfo.imageLinks.smallThumbnail} alt={`Cover photo of the book ${props.volumeInfo.title}`}/>
            </Col>
            <Col>
                <h5>{props.volumeInfo.title} </h5>
                <Container className='d-flex justify-content-end'>
                    <SeeDetailButton id={props.id} />
                </Container>
            </Col>
        </Row>
      </>
  )
}

export default BookTitlePreview