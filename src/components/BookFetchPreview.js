import React, { useState, useEffect } from 'react';
import BookTitlePreview from './BookTitlePreview';

function BookFetchPreview(props) {

    const [book, setBook] = useState();
    const url = `https://www.googleapis.com/books/v1/volumes?q=${props.bookId}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`

    const fetchBook = async () => {
      try {
        const response = await fetch(url);
        const bookData = await response.json();
        const bookDetail =  bookData.items[0];
        setBook(bookDetail);
        console.log(bookDetail);
      } catch (err) {
        console.log(err);
      }
  
    }
    useEffect(() => {
      fetchBook()
    },[])

  return (
      <>
        {book &&
            <>
            <BookTitlePreview props={book}/>
            </>
        }
      </>
  )
}

export default BookFetchPreview