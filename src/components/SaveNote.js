import React from "react";
import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config";

function SaveNote() {
  const [note, setNote] = useState("");
  const { user } = useContext(AuthContext);
  const { bookid } = useParams();
  const navigateTo = useNavigate();

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleNoteSave = async (event) => {
    event.preventDefault();
    const noteObj = {
      text: note,
      user: user.email,
      date: new Date(),
      book_id: bookid,
    };
    try {
      // ! you should double check that the input is not empty before adding the doc
      const docRef = await addDoc(collection(db, "notes"), noteObj);
      console.log("Document written with ID: ", docRef.id);
      navigateTo("/myrack");
      event.target.value = "";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Form>
        <Form.Group className="my-3">
          <h5>Add a note and place the book on your rack</h5>
          <Form.Control
            type="text"
            placeholder="What would you like to remember about this book?"
            value={note}
            onChange={handleNoteChange}
          />
        </Form.Group>
        {/* // ! you could disable the button unless you have some text in the input */}
        <Button variant="primary" type="submit" onClick={handleNoteSave}>
          Save your note
        </Button>
      </Form>
    </>
  );
}

export default SaveNote;
