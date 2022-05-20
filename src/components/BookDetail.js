import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../config.json';

function BookDetail() {
    let { bookid } = useParams();
    const [book, setBook] = useState();
    const url = `https://www.googleapis.com/books/v1/volumes?q=${bookid}&key=${data.API_KEY}`

    const fetchBookDetail = async () => {
      try {
        const response = await fetch(url);
        const bookData = await response.json();
        const bookDetail =  bookData.items[0];
        setBook(bookDetail);
      } catch (err) {
        console.log(err);
      }
  
    }
    useEffect(() => {
      fetchBookDetail()
    },[])

  return (
      <>
        {book &&  <p>{`This is the detailed view of the book ${ book.volumeInfo.title }.`}</p> }
        <div>
{/* placeholder for a separate component with a book view. IS IT NEEDED? WILL IT BE REUSED? */}
    </div>
      </>
  )
}

export default BookDetail