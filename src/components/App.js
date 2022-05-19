import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../views/Home.js';
import Detail from '../views/Detail.js';
import LogIn from '../views/LogIn.js';
import ChatRoom from '../views/ChatRoom.js';
import Data from '../views/Data.js';
import ErrorPage from '../views/ErrorPage.js';

function App() {
  return (
    <>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="detail"> Detail </Link>
        <Link to="login"> Log in </Link>
        <Link to="chatroom"> Chatroom </Link>
        <Link to="data"> Data </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
        <Route path="login" element={<LogIn />} />
        <Route path="chatroom" element={<ChatRoom />} />
        <Route path="data" element={<Data />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <footer>Copyright info</footer>
    </>
  )
}

export default App;
