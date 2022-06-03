import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../config'

function Notes() {
    const [notes, setNotes] = useState(null)
    const [noteId, setNoteId] = useState(null)

    const getNotes = async() => {
        try {
            const querySnapshot = await getDocs(collection(db, "notes"));
            let fetchedNotes = [];
            querySnapshot.forEach((doc) => {
                fetchedNotes.push(doc.data());
                // console.log(doc.data())
                // console.log(doc.id)
                // console.log(`${doc.id} => ${doc.data()}`);
            });
            setNotes(fetchedNotes)

        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getNotes();
    }, []);

  return (
    <>
    <div>Notes</div>
    {notes && notes.map((note, index) => {
        return (
        <div key={index}>
            <p>{note.text}</p>
            <p>{note.book_id}</p>
            <p>{note.user}</p>
        </div>
        )
    }) 
    }
    </>
  )
}

export default Notes