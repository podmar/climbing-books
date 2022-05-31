import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BookDetail() {
    let { bookid } = useParams();
    const [book, setBook] = useState();
    const url = `https://www.googleapis.com/books/v1/volumes?q=${bookid}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`

    const fetchBookDetail = async () => {
      try {
        const response = await fetch(url);
        const bookData = await response.json();
        const bookDetail =  bookData.items[0];
        setBook(bookDetail);
        console.log(book);
      } catch (err) {
        console.log(err);
      }
  
    }
    useEffect(() => {
      fetchBookDetail()
    },[])

  return (
      <>
        {book &&
        <div>
          <p>{`This is the detailed view of the book ${ book.volumeInfo.title }.`}</p>
          <p>{book.volumeInfo.description}</p>
        </div>
        }
      </>
  )
}

export default BookDetail