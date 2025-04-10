import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import BookList from './pages/BookList';
import Profile from './pages/Profile';
import Library from './pages/Library';
import Login from './pages/Login';
import Register from './pages/Register';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/profile" element={<Profile />} /> {/* Путь к странице профиля */}
        <Route path="/library" element={<Library />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
