import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../views/Home.js';
import Detail from '../views/Detail.js';
import Register from '../views/Register.js';
import ChatRoom from '../views/ChatRoom.js';
import Data from '../views/Data.js';
import ErrorPage from '../views/ErrorPage.js';
import { Button } from 'bootstrap';

function App() {
  const login = () => {
    console.log("loggedIn")
  };

  return (
    <>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="detail"> Detail </Link>
        <Link to="register"> Log in </Link>
        <Link to="chatroom"> Chatroom </Link>
        <Link to="data"> Data </Link>
        <Button variant="info" onClick={login}>Login</Button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:bookid" element={<Detail />} />
        <Route path="register" element={<Register />} />
        <Route path="chatroom" element={<ChatRoom />} />
        <Route path="data" element={<Data />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <footer>Copyright info</footer>
    </>
  )
}

export default App;
