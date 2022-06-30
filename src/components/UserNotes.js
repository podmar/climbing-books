import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { db } from "../config";
import { AuthContext } from "../context/AuthContext";
import BookFetchPreview from "./BookFetchPreview";
import NoteCard from "./NoteCard";

function UserNotes() {
  const [notes, setNotes] = useState();
  const { user } = useContext(AuthContext);

  const getNotes = async () => {
    const userNotes = query(
      collection(db, "notes"),
      where("user", "==", user.email)
    );

    try {
      const querySnapshot = await getDocs(userNotes);
      let fetchedNotes = [];
      querySnapshot.forEach((doc) => {
        fetchedNotes.push(doc.data());
      });
      setNotes(fetchedNotes);
      console.log("fetchedNotes", fetchedNotes);
    } catch (error) {
      console.log(error);
    }
  };

  const noteDate = (time) => {
    return new Date(time * 1000).toLocaleDateString();
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <p>Notes on your books: </p>
      {notes ? (
        notes.map((note, index) => {
          return (
            <Container className="py-2" key={index}>
              <BookFetchPreview bookId={note.book_id} />
              <NoteCard note={note} date={noteDate(note.date.seconds)} />
            </Container>
          );
        })
      ) : (
        <div className="py-3">
          <p>Loading your notes...</p>
        </div>
      )}
    </>
  );
}

export default UserNotes;
