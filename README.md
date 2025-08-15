# SPARX Technologies - React Frontend

A modern, responsive website for SPARX Technologies built with React and Tailwind CSS.

## Features

- 🚀 **Modern React 18**
- 🎨 **Tailwind CSS** for styling
- 📱 **Fully Responsive** design
- ⚡ **Interactive Components** with smooth animations
- 🔧 **Component-based Architecture**
- 🎯 **SEO Optimized**

## Interactive Features

- **Product Cards**: Click to select products, active card gets red border  
- **Dynamic Images**: Main product image changes based on selection  
- **Smooth Animations**: Professional transitions throughout  
- **Responsive Navigation**: Adapts to all screen sizes  

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx       # Navigation header
│   ├── HeroSection.jsx  # Main banner
│   ├── CoreProductsSection.jsx  # Interactive products
│   ├── ClaimsCommandSection.jsx # Feature showcase
│   ├── WhyChooseSparxSection.jsx # Benefits
│   ├── ValuePropositionSection.jsx # Key messaging
│   ├── IndustriesServedSection.jsx # Target markets
│   ├── TrustedImpactSection.jsx # Statistics
│   ├── Footer.jsx       # Footer with contact info
│   └── ui/             # Reusable UI components
├── pages/              # Page components
│   ├── home.jsx        # Main page
│   └── not-found.jsx   # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utilities and helpers
├── App.jsx             # Main app component
├── main.jsx            # React entry point
└── index.css           # Global styles
```

## Technologies

- **React 18** - Modern React with hooks  
- **Tailwind CSS** - Utility-first CSS  
- **Wouter** - Lightweight routing  
- **Lucide React** - Beautiful icons  
- **Vite** - Fast build tool  

## Sections

1. **Header** - Navigation with SPARX logo  
2. **Hero** - Main banner with call-to-action  
3. **Core Products** - Interactive showcase of AccuraCore, ClaimCore, AccuraCam  
4. **Claims Command** - Feature tabs and capabilities  
5. **Why Choose SPARX** - Key benefits and features  
6. **Value Proposition** - Main messaging  
7. **Industries Served** - Target markets with visuals  
8. **Trusted Impact** - Statistics and metrics  
9. **Footer** - Contact information and links  

## Deployment

Build the project and deploy the `dist/` folder to:

- **Vercel** (recommended)  
- **Netlify**  
- **GitHub Pages**  
- Any static hosting service  

```bash
npm run build
```

## Development

The project uses Vite for fast development and hot module replacement.

### Key Commands

- `npm run dev` - Start development server at http://localhost:3000  
- `npm run build` - Build for production  
- `npm run preview` - Preview production build locally  

## License

MIT License - feel free to use this project as a template for your own websites.
