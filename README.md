# CourseHub - Modern Course Discovery Platform

A beautiful, responsive course discovery and filtering platform built with React, Vite, and modern web technologies. Designed to impress recruiters with smooth animations, professional UI, and excellent user experience.

## 🎨 Features

### ✨ User Experience
- **Smart Search & Filters**: Real-time course search with category, difficulty level, price range, and rating filters
- **Responsive Design**: Perfectly optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Beautiful Framer Motion animations for engaging interactions
- **Professional Theme**: Dark mode with purple/pink gradient color scheme
- **No Results Handler**: Helpful messaging when no courses match filters

### 🎓 Course Management
- **10+ Pre-loaded Courses**: Sample data with complete course information
- **Detailed Course Cards**: Display ratings, reviews, instructor, duration, and difficulty
- **Course Categories**: Web Development, Data Science, Design, DevOps, and more
- **Difficulty Levels**: Beginner, Intermediate, and Advanced courses
- **Price Range**: $59.99 to $129.99 with filter support

### 🚀 UI Components
- **Header**: Sticky navigation with search bar, responsive mobile menu
- **Filter Sidebar**: Collapsible filters with smooth animations
- **Course Grid**: Auto-responsive layout with hover effects
- **Hero Section**: Animated landing section with statistics
- **Testimonials**: Student reviews with ratings
- **Footer**: Comprehensive footer with links and contact info

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4 (Lightning-fast builds)
- **Animations**: Framer Motion (Smooth, performant animations)
- **Icons**: Lucide React (Beautiful SVG icons)
- **Styling**: Pure CSS with CSS variables and gradients
- **HTTP Client**: Axios (for future API integration)
- **Code Quality**: ESLint

## 📦 Installation

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Setup Steps

```bash
# Clone the repository
cd course-finder

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173/`

## 🎨 Color Palette

The application uses a professional dark theme with purple/pink accents:

- **Primary**: `#a855f7` (Purple)
- **Secondary**: `#ec4899` (Pink)
- **Background**: `#0f1117` (Dark)
- **Card Background**: `#1e293b` (Dark Blue-Gray)
- **Text Light**: `#f1f5f9` (Light Gray)
- **Text Gray**: `#94a3b8` (Medium Gray)

## 📁 Project Structure

```
src/
├── App.jsx                 # Main application component with filter logic
├── App.css                 # Main layout and grid styles
├── index.css              # Global styles and CSS variables
├── main.jsx               # Application entry point
├── components/            # React components
│   ├── Header.jsx         # Navigation header with search
│   ├── Header.css
│   ├── FilterSidebar.jsx  # Course filters
│   ├── FilterSidebar.css
│   ├── CourseCard.jsx     # Individual course card
│   ├── CourseCard.css
│   ├── HeroSection.jsx    # Landing hero section
│   ├── HeroSection.css
│   ├── TestimonialSection.jsx  # Student reviews
│   ├── TestimonialSection.css
│   ├── Footer.jsx         # Footer with links
│   └── Footer.css
└── data/
    └── courses.json       # Sample course data
```

## 🔧 Configuration Files

- `vite.config.js`: Vite build configuration
- `eslint.config.js`: ESLint code quality rules
- `package.json`: Project dependencies and scripts
- `index.html`: HTML entry point

## ✨ Key Features Implementation

### 1. Real-time Search & Filtering
```javascript
// Search across title, category, instructor, and description
const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());

// Multiple filter support
const filteredCourses = courses.filter(course => 
  matchesSearch && 
  matchesCategory && 
  matchesLevel && 
  matchesPrice && 
  matchesRating
);
```

### 2. Responsive Grid Layout
```css
.courses-grid {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
```

### 3. Smooth Animations
- Page load animations with Framer Motion
- Hover effects on cards and buttons
- Filter expansion/collapse animations
- Scroll indicators

### 4. Professional Styling
- Gradient backgrounds and text
- Glassmorphism effects with backdrop-filter
- Custom scrollbars
- Consistent spacing and typography

## 📱 Responsive Breakpoints

- **Desktop**: Full layout (1024px+)
- **Tablet**: 2-column grid, adjusted spacing (768px - 1023px)
- **Mobile**: Single column layout with stacked components (480px - 767px)
- **Small Mobile**: Optimized for very small screens (<480px)

## 🎯 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Sample Data

The application includes 10 sample courses with:
- Course title and description
- Category (Web Dev, Data Science, Design, etc.)
- High-quality course images (from Unsplash)
- Price ($59.99 - $129.99)
- Rating (4.6 - 4.9 stars)
- Student count (5K - 50K+)
- Instructor name
- Duration (6 - 40 hours)
- Difficulty level (Beginner/Intermediate/Advanced)

## 🚀 Future Enhancements

- [ ] Backend integration with real API
- [ ] User authentication and wishlist
- [ ] Course reviews and ratings
- [ ] Payment integration
- [ ] Learning progress tracking
- [ ] Live chat support
- [ ] Course recommendations
- [ ] Dark/Light mode toggle

## 💡 Performance Optimizations

- Memoized filter calculations with `useMemo`
- Lazy image loading
- CSS variable usage for theme switching
- Optimized animations with hardware acceleration
- Responsive image sizes
- Minimal bundle size

## 📄 License

MIT License - Feel free to use this project as a template

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report issues
- Suggest features
- Submit pull requests

## 📧 Contact & Support

For questions or support, reach out to:
- **Email**: support@coursehub.com
- **Website**: coursehub.com
- **Social**: @coursehub on all platforms

---

**Built with ❤️ to help learners discover amazing courses**
