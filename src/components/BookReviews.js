import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { db } from '../config'
import { AuthContext } from '../context/AuthContext';
import NoteCard from './NoteCard';

function BookReviews() {
    const [reviews, setReviews] = useState()
    let { bookid } = useParams();
    const {user} = useContext(AuthContext);
    const bookReviews = query(collection(db, "notes"), where("book_id", "==", bookid), where("user", "!=", user.email));

    const getReviews = async() => {
        try {
            const querySnapshot = await getDocs(bookReviews);
            let fetchedReviews = [];
            querySnapshot.forEach((doc) => {
                fetchedReviews.push(doc.data());
            });
            setReviews(fetchedReviews)

        } catch (error) {
            console.log(error)
        }
    };

    const noteDate = (time) => {
        return new Date(time*1000).toLocaleDateString();
    };

    useEffect(() => {
        getReviews();
    }, []);

  return (
    <>
    {reviews && <h5>what other users say about this book</h5>}
    {reviews ? (reviews.map((note, index) => {
        return (
            <Container className='py-2' key={index}>
                <NoteCard note={note} date={noteDate(note.date.seconds)} />
            </Container>
        )})) :
        <div className='py-3'>
            <p>Loading reviews...</p>
        </div> 
    } 
    </>
  )
}

export default BookReviews