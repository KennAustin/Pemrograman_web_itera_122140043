import { createContext, useContext, useState, useEffect } from 'react';

const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(savedBooks);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('books', JSON.stringify(books));
    }
  }, [books, loading]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  const editBook = (id, updatedBook) => {
    setBooks(books.map(book => book.id === id ? { ...updatedBook, id } : book));
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, editBook, deleteBook, loading }}>
      {children}
    </BookContext.Provider>
  );
}

export function useBooks() {
  return useContext(BookContext);
}