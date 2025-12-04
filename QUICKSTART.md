# Quick Start Guide

## 🚀 Getting Started in 2 Minutes

### 1️⃣ Installation
```bash
cd course-finder
npm install
```

### 2️⃣ Run Development Server
```bash
npm run dev
```

Open `http://localhost:5173/` in your browser

### 3️⃣ Build for Production
```bash
npm run build
npm run preview
```

## 📋 Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build for production (optimized) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

## 🎨 Customization Quick Tips

### Change Color Theme
Edit `src/index.css`:
```css
:root {
  --primary: #a855f7;     /* Your primary color */
  --secondary: #ec4899;   /* Your secondary color */
  --dark-bg: #0f1117;
  --card-bg: #1e293b;
  --text-light: #f1f5f9;
  --text-gray: #94a3b8;
}
```

### Add More Courses
Edit `src/data/courses.json`:
```json
{
  "id": 11,
  "title": "Your Course Title",
  "category": "Your Category",
  "image": "image-url",
  "description": "Course description",
  "price": 99.99,
  "rating": 4.8,
  "students": 10000,
  "instructor": "Instructor Name",
  "duration": 20,
  "level": "Beginner"
}
```

### Modify Testimonials
Edit `src/components/TestimonialSection.jsx`:
```javascript
const testimonials = [
  {
    id: 1,
    name: 'Your Name',
    role: 'Your Role',
    image: 'avatar-url',
    rating: 5,
    text: 'Your testimonial text',
  },
];
```

### Update Hero Statistics
Edit `src/components/HeroSection.jsx` - Pass `totalCourses` prop from App.jsx

## 🎯 Key File Locations

```
src/
├── index.css           ← Global styles & theme variables
├── App.jsx             ← Filter logic and state management
├── App.css             ← Main layout grid
├── data/
│   └── courses.json    ← Course data (add/edit here)
└── components/
    ├── Header.jsx      ← Navigation & search
    ├── FilterSidebar.jsx   ← All filters
    ├── CourseCard.jsx  ← Course display
    ├── HeroSection.jsx ← Landing section
    ├── TestimonialSection.jsx ← Reviews
    └── Footer.jsx      ← Footer links
```

## 🔧 Troubleshooting

### Port Already in Use?
```bash
npm run dev -- --port 3000
```

### Clear Node Modules & Reinstall?
```bash
rm -r node_modules package-lock.json
npm install
```

### Build Errors?
```bash
npm run lint  # Check for code issues
npm run build -- --debug  # Debug mode
```

## 💾 Version Info

- **React**: 19.2.0
- **Vite**: 7.2.4
- **Framer Motion**: Latest
- **Lucide React**: Latest
- **Axios**: Latest

## 📚 Learn More

- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)

## ✨ Next Steps

1. ✅ Customize colors and branding
2. ✅ Replace sample courses with real data
3. ✅ Update testimonials
4. ✅ Connect to backend API
5. ✅ Deploy to hosting platform

## 🎁 Pro Tips

- **Dark Mode**: Already built in! The entire app uses a dark theme
- **Animations**: Smooth Framer Motion animations throughout
- **Mobile First**: Fully responsive design
- **Performance**: Optimized with useMemo and CSS variables
- **Scalability**: Easy to add more filters or courses

Enjoy building! 🚀
