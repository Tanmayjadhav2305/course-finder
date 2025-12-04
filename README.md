# CourseHub - Modern Course Discovery Platform

A beautiful, responsive course discovery and filtering platform built with **React 19**, **Vite 7**, and modern web technologies. Designed to impress recruiters with smooth animations, professional UI, and excellent user experience.

🌐 **Live Demo**: https://course-finder-1w2xtchfh-tanmay-jadhavs-projects.vercel.app

📦 **GitHub Repository**: https://github.com/Tanmayjadhav2305/course-finder

## 🎨 Features

### ✨ User Experience
- **Smart Search & Filters**: Real-time course search with category, difficulty level, price range, and rating filters
- **Responsive Design**: Perfectly optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Beautiful Framer Motion animations for engaging interactions and scroll effects
- **Professional Dark Theme**: Dark mode with purple (#a855f7) and pink (#ec4899) gradients
- **Real-time Filtering**: Instant results as you type and adjust filters
- **No Results Handler**: Helpful messaging when no courses match filters

### 🎓 Course Features
- **10 Pre-loaded Courses**: Complete sample data with realistic course information
- **Detailed Course Cards**: Display ratings (4.6-4.9 ⭐), student count, instructor, duration, price
- **Course Categories**: Web Development, JavaScript, UI/UX Design, Full Stack, Python, React Native, CSS, AWS, ML, TypeScript
- **Difficulty Levels**: Beginner, Intermediate, and Advanced with visual indicators
- **Price Range Filter**: $59.99 to $129.99 with interactive slider
- **Quality Images**: High-quality course images from Unsplash with proper optimization

### 🎨 UI/UX Components
- **Sticky Header**: Navigation bar with search, auto-hide on scroll for better UX
- **Mobile Menu**: Responsive hamburger menu with smooth animations
- **Filter Sidebar**: Collapsible filters with smooth open/close animations
- **Course Grid**: Auto-responsive layout (5 columns desktop, 2 tablet, 1 mobile) with hover zoom effects
- **Hero Section**: Eye-catching landing section with animated statistics
- **Testimonials**: Student reviews with 5-star ratings and smooth stagger animations
- **Professional Footer**: Links, social profiles, and developer credit with gradient styling

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0 (latest with new features)
- **Build Tool**: Vite 7.2.4 (⚡ Lightning-fast builds & HMR)
- **Animations**: Framer Motion (Smooth, performant animations and scroll effects)
- **Icons**: Lucide React (Beautiful, consistent SVG icons throughout UI)
- **Styling**: Pure CSS with CSS Variables (no dependencies, full control)
- **HTTP Client**: Axios (Pre-configured for future API integration)
- **Code Quality**: ESLint (Ensures code consistency and best practices)
- **Version Control**: Git & GitHub
- **Deployment**: Vercel (Automatic builds on git push)

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

## 🚀 Deployment

### Live on Vercel
The application is deployed and live at: **https://course-finder-1w2xtchfh-tanmay-jadhavs-projects.vercel.app**

**Deployment Features:**
- ✅ Auto-deployment on GitHub push
- ✅ Global CDN for fast performance
- ✅ Automatic HTTPS/SSL
- ✅ Zero-config Vite detection
- ✅ Instant rollbacks available

### Deploy Your Own
1. Push code to GitHub
2. Connect to Vercel (automatic setup available)
3. Done! Each commit auto-deploys

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

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

- [ ] Backend API integration for real course data
- [ ] User authentication and accounts
- [ ] Wishlist and saved courses
- [ ] Advanced course reviews and ratings
- [ ] Secure payment processing
- [ ] Learning progress tracking
- [ ] Live chat and support system
- [ ] AI-powered course recommendations
- [ ] Dark/Light mode toggle
- [ ] Multi-language support

## 💡 Performance Optimizations

- ✅ Memoized filter calculations with `useMemo` for optimal React performance
- ✅ Lazy image loading for faster initial page load
- ✅ CSS variables for efficient theme switching
- ✅ Hardware-accelerated animations with Framer Motion
- ✅ Responsive image sizes (600px optimized, quality 70)
- ✅ Minimal bundle size: **111 KB gzipped** (334 KB JS + 28 KB CSS)
- ✅ Vite's ultra-fast HMR for development
- ✅ Production build optimized with code splitting

## 📄 License

MIT License - Feel free to use this project as a template

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report issues
- Suggest features
- Submit pull requests

## 📧 Contact & Support

For questions or support, reach out to:
- **Email**: tanmayjadhav2305@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/tanmay-jadhav-795a96293
- **GitHub**: https://github.com/Tanmayjadhav2305

---

**Designed and Developed by Tanmay Jadhav** ❤️
