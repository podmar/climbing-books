import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home.js';
import Detail from '../views/Detail.js';
import BookList from './BookList';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
      
      <div className='App'>
        <p>This is a test paragraph.</p>
        <h1>And a test heading here.</h1>
      </div>     
      <BookList />
    </>
  );
}

export default App;
