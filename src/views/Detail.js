import { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import BookDetail from '../components/BookDetail';
import GoToButton from '../components/GoToButton';
import { AuthContext } from '../context/AuthContext';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../config';

function Detail() {
  const [note, setNote] = useState("");
  const {user} = useContext(AuthContext);
  const { bookid } = useParams();
  const navigateTo = useNavigate();


  const handleNoteChange = (event) => {
    setNote(event.target.value);
    console.log(note);
  }; 

  const handleNoteSave = async (event) => {
    event.preventDefault()
    const noteObj = {
      text: note,
      user: user.email,
      date: new Date(),
      book_id: bookid,
    }
    try {
      const docRef = await addDoc(collection(db, "notes"), noteObj);
      console.log("Document written with ID: ", docRef.id);
      navigateTo("/myrack");
      event.target.value=""
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Row className='justify-content-center py-5 mt-4'>
        <Col>
          <BookDetail />
          <GoToButton path="/" element="home page" />
          <Form>
            <Form.Group className="mb-3">
            <h5>Add a note and place the book on your rack</h5>
              <Form.Control type="text" placeholder="What would you like to remember about this book?" value={note} onChange={handleNoteChange}/>
            </Form.Group>

{/* 
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

            <Button variant="primary" type="submit" onClick={handleNoteSave}>
              Save your note
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default Detail