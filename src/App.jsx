import { useState, useMemo } from 'react';
import './App.css';
import Header from './components/Header';
import FilterSidebar from './components/FilterSidebar';
import CourseCard from './components/CourseCard';
import HeroSection from './components/HeroSection';
import MotivationalQuote from './components/MotivationalQuote';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';
import coursesData from './data/courses.json';
import { Zap } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [maxPrice, setMaxPrice] = useState(200);
  const [minRating, setMinRating] = useState(0);

  // Get unique categories and levels
  const categories = useMemo(() => {
    return [...new Set(coursesData.map((c) => c.category))];
  }, []);

  const levels = useMemo(() => {
    return [...new Set(coursesData.map((c) => c.level))];
  }, []);

  // Filter courses
  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(course.category);

      const matchesLevel =
        selectedLevels.length === 0 || selectedLevels.includes(course.level);

      const matchesPrice = course.price <= maxPrice;
      const matchesRating = course.rating >= minRating;

      return matchesSearch && matchesCategory && matchesLevel && matchesPrice && matchesRating;
    });
  }, [searchQuery, selectedCategories, selectedLevels, maxPrice, minRating]);

  return (
    <div className="app">
      <Header onSearch={setSearchQuery} />
      
      <HeroSection totalCourses={coursesData.length} />

      <main className="container">
        <div className="main-content">
          {/* Sidebar */}
          <aside className="sidebar">
            <FilterSidebar
              categories={categories}
              levels={levels}
              onCategoryChange={setSelectedCategories}
              onLevelChange={setSelectedLevels}
              onPriceChange={setMaxPrice}
              maxPrice={maxPrice}
              onRatingChange={setMinRating}
              minRating={minRating}
            />
          </aside>

          {/* Main Content */}
          <section className="courses-section">
            <div className="section-header">
              <h2>Discover Courses</h2>
              <p className="results-info">
                <Zap size={16} />
                Showing {filteredCourses.length} of {coursesData.length} courses
              </p>
            </div>

            {filteredCourses.length === 0 ? (
              <div className="no-results">
                <div className="no-results-emoji">🔍</div>
                <h3>No courses found</h3>
                <p>Try adjusting your filters or search query</p>
              </div>
            ) : (
              <div className="courses-grid">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <MotivationalQuote />
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default App;
