import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../redux/slices/bookSlice";
import AddBook from "./AddBook";
import EditBook from "./EditBook";

function BookList() {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleEdit = (book) => {
    setSelectedBook(book);
    setShowEditModal(true);
  };

  return (
    <div className="container mt-5 ">
      <h1>Book List</h1>
      <button className="btn btn-primary mb-5 mt-3 px-4 py-2" onClick={() => setShowAddModal(true)}>
       Add Book  
      </button>
      <div className="row">
        {books.map((book) => (
          <div className="col-md-4 mb-4" key={book.id}>
            <div className="card border-danger" >
              <img src={book.imageUrl} className="card-img-top" alt={book.bookName} height={'590px'}  />
              <div className="card-body">
                <h5 className="card-title">{book.bookName}</h5>
                <p className="card-text">Author: {book.author}</p>
                <p className="card-text">Price: ${book.price}</p>
                <div className="d-flex justify-content-between w-30">
                <button className="btn btn-outline-warning me-2" onClick={() => handleEdit(book)}>
                ✎ Edit
                </button>
                <button className="btn btn-outline-danger" onClick={() => dispatch(deleteBook(book.id))}>
                  Delete <i class="fa-solid fa-trash"></i>
                </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AddBook show={showAddModal} onHide={() => setShowAddModal(false)} />
      <EditBook
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        book={selectedBook}
      />
    </div>
  );
}

export default BookList;