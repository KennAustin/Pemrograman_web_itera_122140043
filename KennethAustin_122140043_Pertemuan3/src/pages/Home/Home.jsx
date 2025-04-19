import { useState } from 'react';
import { useBooks } from '../../context/BookContext';
import BookForm from '../../components/BookForm/BookForm';
import BookList from '../../components/BookList/BookList';
import BookFilter from '../../components/BookFilter/BookFilter';

function Home() {
  const { books, addBook, editBook, deleteBook } = useBooks();
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [showForm, setShowForm] = useState(false);

  const handleFilter = (status) => {
    if (status === 'all') {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(books.filter(book => book.status === status));
    }
  };

  const handleSearch = (term) => {
    const lowerTerm = term.toLowerCase();
    setFilteredBooks(
      books.filter(
        book =>
          book.title.toLowerCase().includes(lowerTerm) ||
          book.author.toLowerCase().includes(lowerTerm)
      )
    );
  };

  const handleAddBook = (newBook) => {
    addBook(newBook);
    setShowForm(false);
  };

  return (
    <div className="home-page">
      <h1>Manajemen Buku Pribadi</h1>
      
      <BookFilter onFilter={handleFilter} onSearch={handleSearch} />
      
      {showForm ? (
        <BookForm onSubmit={handleAddBook} onCancel={() => setShowForm(false)} />
      ) : (
        <button onClick={() => setShowForm(true)}>Tambah Buku Baru</button>
      )}
      
      <BookList 
        books={filteredBooks} 
        onEdit={editBook} 
        onDelete={deleteBook} 
      />
    </div>
  );
}

export default Home;