import { useBooks } from '../context/BookContext';

export function useBookStats() {
  const { books } = useBooks();
  
  const stats = {
    total: books.length,
    owned: books.filter(book => book.status === 'owned').length,
    reading: books.filter(book => book.status === 'reading').length,
    wishlist: books.filter(book => book.status === 'wishlist').length
  };

  return stats;
}