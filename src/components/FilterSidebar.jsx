import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './FilterSidebar.css';

function FilterSidebar({
  categories,
  levels,
  onCategoryChange,
  onLevelChange,
  onPriceChange,
  maxPrice,
  onRatingChange,
  minRating,
}) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    level: true,
    price: true,
    rating: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCategoryToggle = (category) => {
    onCategoryChange((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleLevelToggle = (level) => {
    onLevelChange((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const handleResetFilters = () => {
    onCategoryChange([]);
    onLevelChange([]);
    onPriceChange(200);
    onRatingChange(0);
  };

  return (
    <motion.aside
      className="filter-sidebar"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="filter-header">
        <h3>Filters</h3>
        <button className="reset-btn" onClick={handleResetFilters}>
          Reset
        </button>
      </div>

      {/* Category Filter */}
      <div className="filter-section">
        <button
          className="filter-title"
          onClick={() => toggleSection('category')}
        >
          Category
          <motion.div
            animate={{ rotate: expandedSections.category ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </button>

        <AnimatePresence>
          {expandedSections.category && (
            <motion.div
              className="filter-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {categories.map((category) => (
                <label key={category} className="checkbox-label">
                  <input
                    type="checkbox"
                    onChange={() => handleCategoryToggle(category)}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Level Filter */}
      <div className="filter-section">
        <button
          className="filter-title"
          onClick={() => toggleSection('level')}
        >
          Level
          <motion.div
            animate={{ rotate: expandedSections.level ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </button>

        <AnimatePresence>
          {expandedSections.level && (
            <motion.div
              className="filter-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {levels.map((level) => (
                <label key={level} className="checkbox-label">
                  <input
                    type="checkbox"
                    onChange={() => handleLevelToggle(level)}
                  />
                  <span>{level}</span>
                </label>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Price Filter */}
      <div className="filter-section">
        <button
          className="filter-title"
          onClick={() => toggleSection('price')}
        >
          Max Price
          <motion.div
            animate={{ rotate: expandedSections.price ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </button>

        <AnimatePresence>
          {expandedSections.price && (
            <motion.div
              className="filter-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="price-range">
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={maxPrice}
                  onChange={(e) => onPriceChange(parseInt(e.target.value))}
                  className="range-slider"
                />
                <div className="price-display">
                  <span>${maxPrice}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Rating Filter */}
      <div className="filter-section">
        <button
          className="filter-title"
          onClick={() => toggleSection('rating')}
        >
          Min Rating
          <motion.div
            animate={{ rotate: expandedSections.rating ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </button>

        <AnimatePresence>
          {expandedSections.rating && (
            <motion.div
              className="filter-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rating-buttons">
                {[0, 3, 3.5, 4, 4.5].map((rating) => (
                  <motion.button
                    key={rating}
                    className={`rating-btn ${minRating === rating ? 'active' : ''}`}
                    onClick={() => onRatingChange(rating)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {rating === 0 ? 'All' : `${rating}★+`}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.aside>
  );
}

export default FilterSidebar;
