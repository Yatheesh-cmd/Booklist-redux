import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    editBook: (state, action) => {
      const { id, imageUrl, bookName, author, price } = action.payload;
      const book = state.books.find((book) => book.id === id);
      if (book) {
        book.imageUrl = imageUrl;
        book.bookName = bookName;
        book.author = author;
        book.price = price;
      }
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, editBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;