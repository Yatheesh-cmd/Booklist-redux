import React from "react";
import {  Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import './bootstrap.min (8).css'

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
      </Routes>
      <Footer />
      </>
 
  );
}

export default App;
