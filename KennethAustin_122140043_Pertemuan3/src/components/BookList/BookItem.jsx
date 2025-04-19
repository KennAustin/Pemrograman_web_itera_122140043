import PropTypes from 'prop-types';

function BookItem({ book, isEditing, onEditClick, onCancelEdit, onEdit, onDelete }) {
  return (
    <div className="book-item">
      {isEditing ? (
        <div className="edit-form">
          {/* Form edit bisa ditambahkan di sini */}
          <button onClick={() => onEdit(book.id, book)}>Simpan</button>
          <button onClick={onCancelEdit}>Batal</button>
        </div>
      ) : (
        <div className="book-details">
          <h3>{book.title}</h3>
          <p>Penulis: {book.author}</p>
          <p>Status: {book.status}</p>
          <button onClick={() => onEditClick(book.id)}>Edit</button>
          <button onClick={() => onDelete(book.id)}>Hapus</button>
        </div>
      )}
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  isEditing: PropTypes.bool,
  onEditClick: PropTypes.func,
  onCancelEdit: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};

export default BookItem;