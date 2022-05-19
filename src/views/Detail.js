import React from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  let { bookid } = useParams();

  return (
    <>
    <h1>Detail</h1>
    <p>Welcome to the detail view.</p>
    <p>{`This is the detailed view of the book ${ bookid }.`}</p>

    {/* <BookList/> */}
    </>
  )
}

export default Detail