import React, { useState, useEffect } from 'react'
import Pagination from './Pagination';
import { Col, Container, Row } from 'react-bootstrap';
import BookPreview from './BookPreview';

function BookList() {
    const [books, setBooks] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalBookCount, setTotalBookCount] = useState(0)
    const [totalPageCount, setTotalPageCount] = useState(0)
    const [url, setUrl] = useState("https://www.googleapis.com/books/v1/volumes?q=climbing&key="+process.env.REACT_APP_GOOGLE_BOOKS_API_KEY+"&startIndex=");

    const fetchBooks = async () => {
        try {
            const response = await fetch(url+currentIndex);
            const bookData = await response.json();
            const bookCount = await bookData.totalItems;
            setTotalBookCount(bookCount);
            const numberOfPages = Math.ceil(bookCount/10)
            setTotalPageCount(numberOfPages);
            const bookList = await bookData.items;
            setBooks(bookList);
        } catch (err) {
            console.log(err);
        };
    };

    const handlePageClick = (event) => {
        setCurrentIndex(event.selected)
    };

    useEffect(() => {
        fetchBooks()
    }, [currentIndex])

  return (
    <>
        <Row>
            <Col>
                {totalBookCount ? <p>A total of {totalBookCount} results, page {currentIndex+1}</p> : "Loading..." }
            </Col>
        </Row>
        {books && books.map(book => { 
            return (
                <Container
                key={book.id}
                >
                    <BookPreview props={book}/>
                </Container>
            )
        }
        )}

        {totalPageCount && 
            <Pagination handlePageClick={handlePageClick} totalPageCount={totalPageCount}
            />}
    </>
  )
}

export default BookList