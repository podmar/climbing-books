import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { db } from '../config'
import BookFetchPreview from './BookFetchPreview';
import NoteCard from './NoteCard';

function Notes() {
    const [notes, setNotes] = useState()

    const getNotes = async() => {
        try {
            const querySnapshot = await getDocs(collection(db, "notes"));
            let fetchedNotes = [];
            querySnapshot.forEach((doc) => {
                fetchedNotes.push(doc.data());
            });
            setNotes(fetchedNotes)

        } catch (error) {
            console.log(error)
        }
    };

    const noteDate = (time) => {
        return new Date(time*1000).toLocaleDateString();
    };

    useEffect(() => {
        getNotes();
    }, []);

  return (
    <>
    {notes && notes.map((note, index) => {
        return (
            <Container className='py-2' key={index}>
                <BookFetchPreview bookId={note.book_id} />
                <NoteCard note={note} date={noteDate(note.date.seconds)} />
            </Container>
        )
    }) 
    }
    </>
  )
}

export default Notes