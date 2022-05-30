import React, { useState, useEffect } from 'react'
import SeeDetailButton from './SeeDetailButton';

function BookList() {
    // let startIndex = 0;

    const [books, setBooks] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalBookCount, setTotalBookCount] = useState(0)
    const [totalPageCount, setTotalPageCount] = useState(0)
    const [url, setUrl] = useState("https://www.googleapis.com/books/v1/volumes?q=climbing&key="+process.env.REACT_APP_GOOGLE_BOOKS_API_KEY)

    // const url = "https://www.googleapis.com/books/v1/volumes?q=climbing&key="+process.env.REACT_APP_GOOGLE_BOOKS_API_KEY+"&startIndex="+currentIndex;

    const fetchBooks = async () => {
        try {
            const response = await fetch(url);
            const bookData = await response.json();
            const bookCount = await bookData.totalItems;
            setTotalBookCount(bookCount);
            const bookList = await bookData.items;
            setBooks(bookList);
        } catch (err) {
            console.log(err);
        };
    };

    const countPages = () => {
        let numberOfPages = totalBookCount.Math.ceil(10)
        setTotalPageCount(numberOfPages);
    };



    useEffect(() => {
        fetchBooks()
    }, [currentIndex])

  return (
    <>
    <h5>Here are the books:</h5>
    {totalBookCount ? <p>A total of {totalBookCount} results.</p> : "Loading..." }
    <div>
        {books && books.map(book => { 
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