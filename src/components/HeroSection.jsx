import { motion } from 'framer-motion';
import { Zap, Users, BookOpen, ArrowRight } from 'lucide-react';
import './HeroSection.css';

function HeroSection({ totalCourses }) {
  return (
    <section className="hero-section">
      {/* Animated Background Elements */}
      <div className="hero-bg-blur hero-blur-1"></div>
      <div className="hero-bg-blur hero-blur-2"></div>
      <div className="hero-bg-blur hero-blur-3"></div>

      <div className="hero-container">
        {/* Left Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Zap size={16} />
            <span>🎉 Limited Time: 50% Off All Courses</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Master New Skills
            <span className="gradient-text"> Today</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Learn from industry experts with interactive courses. Start your journey to success with our comprehensive learning platform.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.button
              className="btn-primary btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Courses
              <ArrowRight size={20} />
            </motion.button>
            <motion.button
              className="btn-secondary btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Statistics */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="stat-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="stat-icon">
              <BookOpen size={32} />
            </div>
            <div className="stat-info">
              <div className="stat-number">{totalCourses}+</div>
              <div className="stat-label">Courses</div>
            </div>
          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            style={{ marginTop: '1rem' }}
          >
            <div className="stat-icon">
              <Users size={32} />
            </div>
            <div className="stat-info">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Active Learners</div>
            </div>
          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            style={{ marginTop: '1rem' }}
          >
            <div className="stat-icon">
              <Zap size={32} />
            </div>
            <div className="stat-info">
              <div className="stat-number">95%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="scroll-dot"></div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}

export default HeroSection;
