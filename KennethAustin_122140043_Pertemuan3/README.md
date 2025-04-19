📚 Book Manager
Book Manager adalah aplikasi web sederhana untuk mengelola daftar bacaan Anda. Aplikasi ini memungkinkan pengguna untuk menambahkan, memfilter, dan melacak status buku (sudah dibaca atau belum). Dibuat dengan React dan disimpan secara lokal di browser menggunakan localStorage, aplikasi ini cepat, ringan, dan tidak memerlukan backend.

---

🚀 Fitur Utama
- Tambah buku dengan judul, penulis, dan status.
- Filter buku berdasarkan status bacaan (Semua, Sudah Dibaca, Belum Dibaca).
- Statistik jumlah buku total, dibaca, dan belum dibaca.
- Penyimpanan data lokal menggunakan `localStorage`.

---

🛠️ Instalasi & Menjalankan Secara Lokal
1. Clone repositori:
   git clone https://github.com/KennAustin/book-manager.git
   cd book-manager
   
2. Instal dependensi:
   npm install
   
3. Jalankan aplikasi:
   npm start

---

🖼️ Screenshot Antarmuka
![Tampilan Beranda](./screenshots/home.png)
![Statistik Buku](./screenshots/stats.png)

---

⚛️ Fitur React yang Digunakan
Fitur	Kegunaan	Contoh Implementasi
useState	Mengelola state lokal komponen	const [books, setBooks] = useState([]);
useEffect	Menangani side effects (sync dengan localStorage)	useEffect(() => { localStorage.setItem('books', JSON.stringify(books)); }, [books]);
Context API	State management global untuk data buku	const { books, addBook } = useBooks();
React Router v6	Navigasi multi-halaman	<Route path="/stats" element={<Stats />} />
Custom Hooks	Logika reusable untuk localStorage dan statistik	const stats = useBookStats();
PropTypes	Validasi props komponen	BookList.propTypes = { books: PropTypes.array.isRequired }
Testing Library	Unit testing komponen	test('renders book list', () => { render(<BookList books={mockBooks} />); });

