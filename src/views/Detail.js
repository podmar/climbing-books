import { Col, Row } from 'react-bootstrap';
import BookDetail from '../components/BookDetail';
import GoBackButton from '../components/GoBackButton';
import SaveNote from '../components/SaveNote';

function Detail() {
  return (
    <>
      <Row className='justify-content-center py-5 mt-4'>
        <Col>
          <BookDetail />
          <GoBackButton/>
          <SaveNote/> 
        </Col>
      </Row>
    </>
  )
}

export default Detail