import { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import BookDetail from '../components/BookDetail';
import GoToButton from '../components/GoToButton';
import { AuthContext } from '../context/AuthContext';

function Detail() {
  const [note, setNote] = useState();
  const {user} = useContext(AuthContext);

  const hangleNoteChange = (event) => {
    setNote(event.target.value);
  }; 

  const handleNoteSave = (event) => {
    const noteObj = {
      text: note,
      user: user,
      date: new Date(),
    }
  };

  return (
    <>
      <Row className='justify-content-center py-5 mt-4'>
        <Col>
          <BookDetail />
          <GoToButton path="/" element="home page" />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <h5>Add a note and place the book on your rack</h5>
              {/* <Form.Label>Add a note and place the book on your rack</Form.Label> */}
              <Form.Control type="text" placeholder="What would you like to remember about this book?" value={note} onChange={hangleNoteChange}/>
            </Form.Group>
{/* 
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="outline-primary" type="submit" onClick={handleNoteSave}>
              Save your note
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default Detail