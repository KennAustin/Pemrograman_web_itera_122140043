import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import Home from './pages/Home/Home';
import Stats from './pages/Stats/Stats';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <BookProvider>
      <Router>
        <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;