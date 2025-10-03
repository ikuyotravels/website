import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ToursPage from './pages/ToursPage';
import AboutPage from './pages/AboutPage';
import GuestStoriesPage from './pages/GuestStoriesPage';
import BlogPage from './pages/BlogPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tours" element={<ToursPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/stories" element={<GuestStoriesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
