import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import './bootstrap.min (8).css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ minHeight: "100vh" }}>
      <Header />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<BookList />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

