import { useState } from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

function BookList({ books, onEdit, onDelete }) {
  const [editingId, setEditingId] = useState(null);

  const handleEditClick = (id) => {
    setEditingId(id);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p>Tidak ada buku yang ditemukan</p>
      ) : (
        books.map(book => (
          <BookItem
            key={book.id}
            book={book}
            isEditing={editingId === book.id}
            onEditClick={handleEditClick}
            onCancelEdit={handleCancelEdit}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default BookList;