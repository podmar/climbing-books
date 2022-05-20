import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../config.json';

function Detail() {
  const [book, setBook] = useState([]);
  let { bookid } = useParams();
  console.log(bookid)

  const url = `https://www.googleapis.com/books/v1/volumes?q=${bookid}&key=${data.API_KEY}`
console.log(url)

  const fetchBook = async () => {
    try {
      const response = await fetch(url);
      const bookData = await response.json();
      console.log(response, bookData)
      const bookDetail =  bookData.items[0];
      console.log(bookDetail)
      setBook(bookDetail);
    } catch (err) {
      console.log(err);
    }

  }
  useEffect(() => {
    console.log("first")
    fetchBook()
    console.log(book)
  },[])
  

  return (
    <>

    <div>    
      <h1>Detail</h1>
      <p>Welcome to the detail view.</p>
      {/* {console.log(book.volumeInfo.title)} */}
      {book &&  <p>{ book.volumeInfo.title }</p> }
      {/* <p>{`This is the detailed view of the book ${ book.volumeInfo.title }.`}</p> */}
      {/* <p>{ book.volumeInfo.title }</p> */}
      {/* <p>{`this is the book ${ book.volumeInfo.title }`}</p> */}
    </div>

    <div>
{/* placeholder for a separate component with a book view. IS IT NEEDED? WILL IT BE REUSED? */}
    </div>
    </>
  )
}

export default Detail