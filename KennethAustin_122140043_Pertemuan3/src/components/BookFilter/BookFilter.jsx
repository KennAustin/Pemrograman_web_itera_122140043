import { useState } from 'react';
import PropTypes from 'prop-types';

function BookFilter({ onFilter, onSearch }) {
  const [status, setStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    onFilter(newStatus);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="book-filter">
      <div className="filter-group">
        <label>Filter berdasarkan status:</label>
        <select value={status} onChange={handleStatusChange}>
          <option value="all">Semua</option>
          <option value="owned">Sudah Dimiliki</option>
          <option value="reading">Sedang Dibaca</option>
          <option value="wishlist">Ingin Dibeli</option>
        </select>
      </div>
      
      <div className="search-group">
        <label>Cari buku:</label>
        <input
          type="text"
          placeholder="Cari berdasarkan judul atau penulis"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}

BookFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default BookFilter;