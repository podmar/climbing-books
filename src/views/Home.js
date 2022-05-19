import React from 'react'
import BookList from '../components/BookList';

function Home() {
  return (
    <div className='App'>
        <h1>Home</h1>
        <p>Welcome to the home view.</p> 
        <BookList />
    </div>
  )
}

export default Home;