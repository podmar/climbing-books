import React, { useState, useEffect } from 'react'
import SeeDetailButton from './SeeDetailButton';

function BookList() {
    // let startIndex = 0;

    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(0);

    const url = "https://www.googleapis.com/books/v1/volumes?q=climbing&key="+process.env.REACT_APP_GOOGLE_BOOKS_API_KEY+"&startIndex="+page;

    const fetchBooks = async () => {
        try {
            const response = await fetch(url);
            const bookData = await response.json();
            const bookList = await bookData.items;
            setBooks(bookList);
        } catch (err) {
            console.log(err);
        };
    };
    useEffect(() => {
        fetchBooks()
    }, [])

  return (
    <>
    <h5>Here are the books:</h5>
    <div>
        {books.map(book => { 
            return (
                <div
                key={book.id}
                >
                    {book.volumeInfo.title} 
                    <SeeDetailButton id={book.id} />
                </div>

            )
        }
        )}
    </div>
    </>
  )
}

export default BookList