import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Research } from './pages/Research';
import { Article } from './pages/Article';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/:id" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;