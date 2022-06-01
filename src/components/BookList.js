import React, { useState, useEffect } from 'react'
import SeeDetailButton from './SeeDetailButton';
import Pagination from './Pagination';
import { Col, Container, Row } from 'react-bootstrap';

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
                        <Row
                        className='justify-content-center'
                        >
                            <Col>
                                <h5>{book.volumeInfo.title} </h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt={`Cover photo of the book ${book.volumeInfo.title}`}/>
                            </Col>
                            <Col>
                                <p>{`${book.volumeInfo.description.slice(0, 150)}...`}</p>
                                <SeeDetailButton id={book.id} />
                            </Col>
                        </Row>
                    </Container>
                )
            }
            )}
        <Row>
            <Col>
                {totalPageCount && 
                    <Pagination handlePageClick={handlePageClick} totalPageCount={totalPageCount}
                    />}
            </Col>
        </Row>
    </>
  )
}

export default BookList