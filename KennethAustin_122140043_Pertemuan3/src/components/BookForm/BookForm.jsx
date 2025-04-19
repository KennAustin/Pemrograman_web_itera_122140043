import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function BookForm({ onSubmit, initialData, onCancel }) {
  const [book, setBook] = useState(initialData || {
    title: '',
    author: '',
    status: 'owned'
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialData) {
      setBook(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!book.title.trim()) {
      setError('Judul buku tidak boleh kosong');
      return;
    }
    
    if (!book.author.trim()) {
      setError('Penulis tidak boleh kosong');
      return;
    }
    
    setError('');
    onSubmit(book);
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      {error && <div className="error">{error}</div>}
      
      <div className="form-group">
        <label>Judul Buku</label>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Masukkan judul buku"
        />
      </div>
      
      <div className="form-group">
        <label>Penulis</label>
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Masukkan nama penulis"
        />
      </div>
      
      <div className="form-group">
        <label>Status</label>
        <select name="status" value={book.status} onChange={handleChange}>
          <option value="owned">Sudah Dimiliki</option>
          <option value="reading">Sedang Dibaca</option>
          <option value="wishlist">Ingin Dibeli</option>
        </select>
      </div>
      
      <div className="form-actions">
        <button type="submit">Simpan</button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="cancel">
            Batal
          </button>
        )}
      </div>
    </form>
  );
}

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
  onCancel: PropTypes.func
};

export default BookForm;