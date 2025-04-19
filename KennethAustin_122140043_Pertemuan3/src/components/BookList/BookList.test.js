import { render, screen } from '@testing-library/react';
import BookList from './BookList';

const mockBooks = [
  { id: 1, title: 'Book 1', author: 'Author 1', status: 'owned' },
  { id: 2, title: 'Book 2', author: 'Author 2', status: 'reading' }
];

describe('BookList', () => {
  test('renders list of books', () => {
    render(
      <BookList 
        books={mockBooks} 
        onEdit={jest.fn()} 
        onDelete={jest.fn()} 
      />
    );
    
    expect(screen.getByText('Book 1')).toBeInTheDocument();
    expect(screen.getByText('Book 2')).toBeInTheDocument();
  });

  test('shows message when no books', () => {
    render(
      <BookList 
        books={[]} 
        onEdit={jest.fn()} 
        onDelete={jest.fn()} 
      />
    );
    
    expect(screen.getByText('Tidak ada buku yang ditemukan')).toBeInTheDocument();
  });
});