import React, { useState, useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
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
      <div>
        {book ?
            <>
              <div className='pb-5'>
                <h1>{ book.volumeInfo.title }</h1>
                <h5>{ book.volumeInfo.subtitle }</h5>
              </div>
              <div className='pb-3 d-flex justify-content-end'>
                <Image fluid="true" src={book.volumeInfo.imageLinks.thumbnail} alt={`Cover photo of ${book.volumeInfo.title}`}/>
              </div>
              <p>{book.volumeInfo.description}</p>
            </> : "Loading book preview..."
        }
      </div>
  )
}

export default BookDetail