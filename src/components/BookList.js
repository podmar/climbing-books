import React, { useState, useEffect } from 'react'
import SeeDetailButton from './SeeDetailButton';
import ReactPaginate from 'react-paginate';

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
        console.log(currentIndex);
    };

    useEffect(() => {
        fetchBooks()
    }, [currentIndex])

  return (
    <>
    <h5>Here are the books:</h5>
    {totalBookCount ? <p>A total of {totalBookCount} results, page {currentIndex+1}</p> : "Loading..." }
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
    {totalPageCount && 
        <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={totalPageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="page-item active"
        activeLinkClassName="page-link active"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        disabledClassName="page-item disabled"
        disabledLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        />}
    </>
  )
}

export default BookList