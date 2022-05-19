import React from 'react'
import { useParams } from 'react-router-dom'

function BookDetail() {
    let { bookid } = useParams();

  return (
      <>
        <div>BookDetail</div>
        <p>{`This is the detailed view of the book ${bookid}.`}</p>
      </>
  )
}

export default BookDetail