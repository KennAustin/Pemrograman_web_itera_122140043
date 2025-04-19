import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from './BookForm';

describe('BookForm', () => {
  const mockSubmit = jest.fn();
  const mockCancel = jest.fn();

  test('renders form with empty fields when no initial data', () => {
    render(<BookForm onSubmit={mockSubmit} />);
    
    expect(screen.getByLabelText('Judul Buku')).toHaveValue('');
    expect(screen.getByLabelText('Penulis')).toHaveValue('');
    expect(screen.getByLabelText('Status')).toHaveValue('owned');
  });

  test('shows error when submitting empty form', () => {
    render(<BookForm onSubmit={mockSubmit} />);
    
    fireEvent.click(screen.getByText('Simpan'));
    
    expect(mockSubmit).not.toHaveBeenCalled();
    expect(screen.getByText('Judul buku tidak boleh kosong')).toBeInTheDocument();
  });

  test('calls onSubmit with correct data', () => {
    render(<BookForm onSubmit={mockSubmit} />);
    
    fireEvent.change(screen.getByLabelText('Judul Buku'), { 
      target: { name: 'title', value: 'Test Book' } 
    });
    fireEvent.change(screen.getByLabelText('Penulis'), { 
      target: { name: 'author', value: 'Test Author' } 
    });
    fireEvent.click(screen.getByText('Simpan'));
    
    expect(mockSubmit).toHaveBeenCalledWith({
      title: 'Test Book',
      author: 'Test Author',
      status: 'owned'
    });
  });
});