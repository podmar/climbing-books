import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../config.json';

function Detail() {
  let { bookid } = useParams();

  const url = `https://www.googleapis.com/books/v1/volumes?q=${bookid}&key=${data.API_KEY}`

  const [book, setBook] = useState();

  const fetchBook = async () => {
    try {
      const response = await fetch(url);
      const bookData = await response.json();
      const bookDetail = await bookData.items[0];
      setBook(bookDetail);
    } catch (err) {
      console.log(err);
    }

  }
  useEffect(() => {
    fetchBook()
  },[])

  return (
    <>

    <div>    
      <h1>Detail</h1>
      <p>Welcome to the detail view.</p>
      <p>{`This is the detailed view of the book ${ book.volumeInfo.title }.`}</p>
    </div>

    <div>

    </div>
    </>
  )
}

export default Detail