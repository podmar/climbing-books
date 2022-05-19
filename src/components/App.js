import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home.js';
import Detail from '../views/Detail.js';
import LogIn from '../views/LogIn.js';
import ChatRoom from '../views/ChatRoom.js';
import Data from '../views/Data.js';
import ErrorPage from '../views/ErrorPage.js';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
        <Route path="login" element={<LogIn />} />
        <Route path="chatroom" element={<ChatRoom />} />
        <Route path="data" element={<Data />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App;
