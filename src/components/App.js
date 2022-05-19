import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home.js';
import Detail from '../views/Detail.js';
import LogIn from '../views/LogIn.js';
import ChatRoom from '../views/ChatRoom.js';

function App() {
  return (
    <>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
        <Route path="login" element={<LogIn />} />
        <Route path="chatroom" element={<ChatRoom />} />
      </Routes>
    </>
  );
}

export default App;
