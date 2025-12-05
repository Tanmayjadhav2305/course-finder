import { Star, Users, Clock, BarChart3, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './CourseCard.css';

function CourseCard({
  id,
  title,
  category,
  image,
  description,
  price,
  rating,
  students,
  instructor,
  duration,
  level,
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      className="course-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: isMobile ? 0.3 : 0.5 }}
      whileHover={isMobile ? {} : { y: -5 }}
    >
      {/* Image Container */}
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
        <div className="card-overlay">
          <motion.button
            className="btn-primary btn-card"
            whileHover={isMobile ? {} : { scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart size={18} />
            Enroll Now
          </motion.button>
        </div>
        <span className="category-badge">{category}</span>
        <span className={`level-badge level-${level.toLowerCase()}`}>{level}</span>
        <div className="price-badge">${price}</div>
      </div>

      {/* Card Content */}
      <div className="card-content">
        {/* Title */}
        <h3 className="card-title">{title}</h3>

        {/* Description */}
        <p className="card-description">{description}</p>

        {/* Instructor */}
        <p className="card-instructor">by {instructor}</p>

        {/* Stats */}
        <div className="card-stats">
          <div className="stat-item">
            <Star size={16} />
            <span>{rating.toFixed(1)}</span>
            <span className="stat-label">({Math.floor(students / 100)} reviews)</span>
          </div>
          <div className="stat-item">
            <Users size={16} />
            <span>{students}+</span>
          </div>
        </div>

        {/* Duration and Level */}
        <div className="card-meta">
          <div className="meta-item">
            <Clock size={16} />
            <span>{duration}hrs</span>
          </div>
          <div className="meta-item">
            <BarChart3 size={16} />
            <span>{level}</span>
          </div>
        </div>

        {/* Mobile Button */}
        <motion.button
          className="btn-primary btn-card-mobile"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Enroll Now
        </motion.button>
      </div>
    </motion.div>
  );
}

export default CourseCard;
