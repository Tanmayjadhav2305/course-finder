import { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import './Header.css';

function Header({ onSearch }) {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    onSearch(value);
  };

  return (
    <motion.header
      className={`header ${isSticky ? 'sticky' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-content">
        {/* Logo */}
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="logo-icon">📚</div>
          <span>CourseHub</span>
        </motion.div>

        {/* Search Bar - Desktop */}
        <div className="search-bar-container">
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search courses, instructors..."
              value={searchInput}
              onChange={handleSearch}
            />
          </div>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="nav-links">
          <motion.a href="#" whileHover={{ color: 'var(--primary)' }}>
            Browse
          </motion.a>
          <motion.a href="#" whileHover={{ color: 'var(--primary)' }}>
            My Learning
          </motion.a>
          <motion.a href="#" whileHover={{ color: 'var(--primary)' }}>
            Wishlist
          </motion.a>
        </nav>

        {/* CTA Button - Desktop */}
        <motion.button
          className="btn-primary btn-header"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign Up
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="mobile-search">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchInput}
            onChange={handleSearch}
          />
        </div>
        <nav className="mobile-nav">
          <a href="#">Browse</a>
          <a href="#">My Learning</a>
          <a href="#">Wishlist</a>
        </nav>
        <button className="btn-primary btn-mobile">Sign Up</button>
      </motion.div>
    </motion.header>
  );
}

export default Header;
