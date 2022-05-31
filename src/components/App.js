import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom';
import Home from '../views/Home.js';
import Detail from '../views/Detail.js';
import Register from '../views/Register.js';
import ChatRoom from '../views/ChatRoom.js';
import Data from '../views/Data.js';
import ErrorPage from '../views/ErrorPage.js';
import Nav from './Nav.js';
import { AuthContextProvider } from '../context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import { app } from "../config"

function App() {
  console.log(app);
  return (
    <>
      <AuthContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:bookid" element={<ProtectedRoute><Detail /></ProtectedRoute>} />
          <Route path="register" element={<Register />} />
          <Route path="chatroom" element={<ProtectedRoute><ChatRoom /></ProtectedRoute>} />
          <Route path="data" element={<Data />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextProvider>

      <footer>Copyright info</footer>
    </>
  )
}

export default App;
