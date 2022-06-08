import { Col, Row } from 'react-bootstrap';
import BookDetail from '../components/BookDetail';
import BookReviews from '../components/BookReviews';
import GoBackButton from '../components/GoBackButton';
import SaveNote from '../components/SaveNote';

function Detail() {
  return (
    <>
      <Row className='justify-content-center pt-5 pb-2 mt-4'>
        <Col>
          <BookDetail />
          <GoBackButton/>
        </Col>
      </Row>
      <Row className='justify-content-center pb-2'>
        <Col>
          <SaveNote/> 
        </Col>
      </Row>
      <Row className='justify-content-center py-4'>
        <Col>
          <BookReviews/>
        </Col>
      </Row>
    </>
  )
}

export default Detail