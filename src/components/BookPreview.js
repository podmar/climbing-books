import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import FavButton from "./FavButton";
import SeeDetailButton from "./SeeDetailButton";

function BookPreview({ props }) {
  return (
    <>
      <Row className="justify-content-center">
        {/* <Col xs={2} md={1} className='d-flex'>
                <SeeDetailButton id={props.id} />
                <FavButton/>
            </Col> */}
        <Col>
          <h5>{props.volumeInfo.title} </h5>
        </Col>
      </Row>
      <Row>
        <Col xs={4} md={3} l={2}>
          <Image
            thumbnail="true"
            fluid="true"
            src={props.volumeInfo.imageLinks.thumbnail}
            alt={`Cover photo of the book ${props.volumeInfo.title}`}
          />
        </Col>
        <Col>
          <p>{`${props.volumeInfo.description.slice(0, 100)}...`}</p>
          {/* // ! nice that you created specific components for it */}
          <SeeDetailButton id={props.id} />
          <FavButton />
        </Col>
      </Row>
    </>
  );
}

export default BookPreview;
