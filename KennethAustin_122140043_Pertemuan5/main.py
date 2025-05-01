from abc import ABC, abstractmethod
from typing import List, Dict, Optional

# Abstract class sebagai dasar untuk semua item perpustakaan
class LibraryItem(ABC):
    def __init__(self, item_id: str, title: str):
        self._item_id = item_id  # protected attribute untuk ID item
        self._title = title      # protected attribute untuk judul
        self.__available = True  # private attribute untuk status ketersediaan
    
    # Property decorator untuk mengakses atribut protected/private
    @property
    def item_id(self) -> str:
        return self._item_id
    
    @property
    def title(self) -> str:
        return self._title
    
    @property
    def available(self) -> bool:
        return self.__available
    
    # Setter untuk mengubah status ketersediaan
    @available.setter
    def available(self, status: bool):
        self.__available = status
    
    # Abstract method yang harus diimplementasikan oleh subclass
    @abstractmethod
    def display_info(self) -> str:
        pass
    
    @abstractmethod
    def get_type(self) -> str:
        pass

# Subclass untuk buku yang mewarisi LibraryItem
class Book(LibraryItem):
    def __init__(self, item_id: str, title: str, author: str, pages: int):
        super().__init__(item_id, title)
        self._author = author  # protected attribute untuk penulis
        self._pages = pages    # protected attribute untuk jumlah halaman
    
    # Property untuk mengakses atribut
    @property
    def author(self) -> str:
        return self._author
    
    @property
    def pages(self) -> int:
        return self._pages
    
    # Implementasi method abstract untuk menampilkan info buku
    def display_info(self) -> str:
        status = "Available" if self.available else "Borrowed"
        return (f"Book ID: {self.item_id}\n"
                f"Title: {self.title}\n"
                f"Author: {self.author}\n"
                f"Pages: {self.pages}\n"
                f"Status: {status}\n")
    
    # Implementasi method abstract untuk mendapatkan tipe item
    def get_type(self) -> str:
        return "Book"

# Subclass untuk majalah yang mewarisi LibraryItem
class Magazine(LibraryItem):
    def __init__(self, item_id: str, title: str, issue: int, publisher: str):
        super().__init__(item_id, title)
        self._issue = issue      # protected attribute untuk nomor edisi
        self._publisher = publisher  # protected attribute untuk penerbit
    
    # Property untuk mengakses atribut
    @property
    def issue(self) -> int:
        return self._issue
    
    @property
    def publisher(self) -> str:
        return self._publisher
    
    # Implementasi method abstract untuk menampilkan info majalah
    def display_info(self) -> str:
        status = "Available" if self.available else "Borrowed"
        return (f"Magazine ID: {self.item_id}\n"
                f"Title: {self.title}\n"
                f"Issue: {self.issue}\n"
                f"Publisher: {self.publisher}\n"
                f"Status: {status}\n")
    
    # Implementasi method abstract untuk mendapatkan tipe item
    def get_type(self) -> str:
        return "Magazine"

# Class utama untuk mengelola perpustakaan
class Library:
    def __init__(self):
        self.__items: Dict[str, LibraryItem] = {}  # private dictionary untuk menyimpan item
    
    # Method untuk menambahkan item baru ke perpustakaan
    def add_item(self, item: LibraryItem) -> bool:
        if item.item_id in self.__items:
            return False  # Item dengan ID yang sama sudah ada
        self.__items[item.item_id] = item
        return True
    
    # Method untuk menghapus item dari perpustakaan
    def remove_item(self, item_id: str) -> bool:
        if item_id in self.__items:
            del self.__items[item_id]
            return True
        return False  # Item tidak ditemukan
    
    # Method untuk menampilkan semua item di perpustakaan
    def display_all_items(self) -> None:
        if not self.__items:
            print("No items in the library.")
            return
        
        print("\n=== Library Items ===")
        for item in self.__items.values():
            print(item.display_info())
    
    # Method untuk mencari item berdasarkan judul (case-insensitive)
    def find_by_title(self, title: str) -> List[LibraryItem]:
        return [item for item in self.__items.values() if title.lower() in item.title.lower()]
    
    # Method untuk mencari item berdasarkan ID
    def find_by_id(self, item_id: str) -> Optional[LibraryItem]:
        return self.__items.get(item_id, None)
    
    # Method untuk meminjam item
    def borrow_item(self, item_id: str) -> bool:
        item = self.find_by_id(item_id)
        if item and item.available:
            item.available = False
            return True
        return False  # Item tidak tersedia atau tidak ditemukan
    
    # Method untuk mengembalikan item
    def return_item(self, item_id: str) -> bool:
        item = self.find_by_id(item_id)
        if item and not item.available:
            item.available = True
            return True
        return False  # Item tidak dipinjam atau tidak ditemukan

# Fungsi utama untuk menjalankan program
def main():
    library = Library()
    
    # Menambahkan beberapa item ke perpustakaan
    book1 = Book("B001", "Python Programming", "John Doe", 350)
    book2 = Book("B002", "Clean Code", "Robert Martin", 400)
    magazine1 = Magazine("M001", "Tech Today", 42, "Tech Media")
    magazine2 = Magazine("M002", "Science Weekly", 15, "Science Press")
    
    library.add_item(book1)
    library.add_item(book2)
    library.add_item(magazine1)
    library.add_item(magazine2)
    
    # Menampilkan semua item
    print("\n=== All Library Items ===")
    library.display_all_items()
    
    # Mencari item berdasarkan judul
    print("\n=== Search Results for 'Python' ===")
    results = library.find_by_title("Python")
    for item in results:
        print(item.display_info())
    
    # Meminjam dan mengembalikan item
    print("\n=== Borrowing and Returning Items ===")
    if library.borrow_item("B001"):
        print("Successfully borrowed 'Python Programming'")
    
    if library.return_item("B001"):
        print("Successfully returned 'Python Programming'")
    
    # Menampilkan status setelah peminjaman
    print("\n=== After Borrowing ===")
    library.display_all_items()

# Menjalankan program utama
if __name__ == "__main__":
    main()