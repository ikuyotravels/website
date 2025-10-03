# Ikuyo Travels - Japan Tour Guide Website

A premium, minimalist website for a private tour agency in Japan, built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
ikuyo-travels/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/
│   │   ├── layout/      # Navbar, Footer
│   │   ├── ui/          # Reusable components (Button, Cards)
│   │   └── sections/    # Page-specific sections
│   ├── data/
│   │   └── tourData.ts  # All tour itineraries
│   ├── pages/           # All page components
│   ├── App.tsx          # Main app with routing
│   ├── main.tsx         # Entry point
│   └── index.css        # Tailwind + custom styles
├── public/              # Public assets
└── tailwind.config.js   # Tailwind configuration
```

## 🎨 Design System

### Colors
- Background: `#F4F1ED` (Warm beige)
- Text Primary: `#2A3A3D` (Dark teal)
- Text Secondary: `#6B7280` (Warm grey)
- Accent: `#C46243` (Terracotta/rust - for CTAs)
- Accent Hover: `#A9543A` (Darker terracotta)
- Secondary: `#9CA3AF` (Light sage/grey)

### Typography
- **Body Font**: Figtree (Google Fonts)
- **Heading Font**: Noto Serif JP (Google Fonts)

## 📄 Pages

1. **Home** (`/`) - Hero, social proof, why travel with me, featured tours, about the guide
2. **Tours** (`/tours`) - All tour itineraries with detailed day-by-day breakdowns
3. **About** (`/about`) - Guide's story, philosophy, qualifications
4. **Guest Stories** (`/stories`) - Testimonials and reviews
5. **Blog** (`/blog`) - Travel tips and insights
6. **FAQ** (`/faq`) - Frequently asked questions
7. **Contact** (`/contact`) - Inquiry form and contact information

## ✨ Key Features

- **Mobile-First Responsive Design** - Works perfectly on all devices
- **Premium Aesthetics** - Minimalist, editorial design with warm color palette
- **Accessible** - WCAG 2.1 compliant with semantic HTML
- **Fast Performance** - Optimized with Vite and React
- **Type-Safe** - Built with TypeScript

## 🛠️ Customization Guide

### Update Tour Data
Edit `src/data/tourData.ts` to modify tour information, add new tours, or update pricing.

### Change Colors
Update the color values in `src/index.css` under the `@theme` section.

### Update Guide Information
- Edit `src/pages/HomePage.tsx` for the guide introduction
- Edit `src/pages/AboutPage.tsx` for detailed guide information
- Update contact details in `src/components/layout/Footer.tsx` and `src/pages/ContactPage.tsx`

### Add/Remove Pages
1. Create a new page component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Add navigation link in `src/components/layout/Navbar.tsx`

## 🌐 Deployment

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Vite and configure the build

### Deploy to any static host
1. Run `npm run build`
2. Upload the contents of the `dist` folder to your hosting provider

## 📝 Important Notes

### Images
The site currently uses Unsplash placeholder images. Replace with real photos by:
1. Adding images to `src/assets/images/`
2. Updating image URLs in components
3. Using proper alt text for accessibility

### Form Submission
The contact form currently shows an alert. Integrate with:
- **Formspree**: Easy email forwarding
- **Netlify Forms**: Built-in form handling
- **Custom backend**: API integration

### SEO
Add meta tags and Open Graph tags in `index.html` for better social sharing and search engine optimization.

## 🔧 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **React Router** - Routing
- **React Icons** - Icon library

## 📞 Support

For questions or issues with the website, please contact the developer or refer to the documentation:
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)

---

Built with ❤️ for authentic Japan travel experiences
