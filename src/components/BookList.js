import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { Col, Container, Row } from "react-bootstrap";
import BookPreview from "./BookPreview";
// ! general observation: everytime you fetch the API with a different startIndex you get back a different totalItems number
// ! so, when you are on page 1 and you click on page 70, your app crashes. did you notice it? do you have an idea why the API gives you different numbers of books?
function BookList() {
  const [books, setBooks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalBookCount, setTotalBookCount] = useState(0);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [url, setUrl] = useState(
    "https://www.googleapis.com/books/v1/volumes?q=climbing&key=" +
      process.env.REACT_APP_GOOGLE_BOOKS_API_KEY +
      "&startIndex="
  );

  const fetchBooks = async () => {
    try {
      const response = await fetch(url + currentIndex);
      const bookData = await response.json();
      console.log("bookData", bookData);
      // ! why do you have to await for the total items? totalItems is just a key of the bookData object
      const bookCount = await bookData.totalItems;
      setTotalBookCount(bookCount);
      const numberOfPages = Math.ceil(bookCount / 10);
      setTotalPageCount(numberOfPages);
      // ! same here, items is part of the object so you don't have to wait
      const bookList = await bookData.items;
      setBooks(bookList);
    } catch (err) {
      // ! here it would be good to set an error message and display it to the user if it occurs
      console.log(err);
    }
  };

  const handlePageClick = (event) => {
    setCurrentIndex(event.selected);
  };

  useEffect(() => {
    fetchBooks();
  }, [currentIndex]);

  return (
    <>
      <Row>
        <Col>
          {totalBookCount ? (
            <p>
              A total of {totalBookCount} results, page {currentIndex + 1}
            </p>
          ) : (
            <div className="py-3">
              <p>Loading list view...</p>
            </div>
          )}
        </Col>
      </Row>
      <Container className="d-flex flex-wrap">
        {books &&
          books.map((book) => {
            return (
              <Container className="py-1" key={book.id}>
                {/*//! calling props a prop is a bit weird, why don't you call it book? */}
                <BookPreview props={book} />
              </Container>
            );
          })}
      </Container>

      {totalPageCount && (
        <Pagination
          handlePageClick={handlePageClick}
          totalPageCount={totalPageCount}
        />
      )}
    </>
  );
}

export default BookList;
