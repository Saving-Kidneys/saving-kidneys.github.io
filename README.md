# Charity Website

Saving Kidneys

## Project Setup

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

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
├── assets/
│   └── styles/
│       └── main.css       # Global styles and CSS variables
├── components/
│   └── layout/
│       ├── TheHeader.vue  # Site header with navigation
│       └── TheFooter.vue  # Site footer
├── router/
│   └── index.js           # Vue Router configuration
├── views/
│   ├── HomePage.vue       # Landing page
│   ├── AboutPage.vue      # About us page
│   ├── MissionPage.vue    # Mission & goals page
│   ├── DonatePage.vue     # Donation page
│   └── ContactPage.vue    # Contact form page
├── App.vue                # Root component
└── main.js                # Application entry point
```

## Customization

### Colors
Edit the CSS variables in `src/assets/styles/main.css` to match your charity's brand colors:

```css
:root {
  --color-primary: #2563eb;      /* Main brand color */
  --color-secondary: #10b981;    /* Secondary/accent color */
  /* ... more variables */
}
```

### Content
Replace placeholder content in each view component:
- Update text, images, and links
- Add your charity's story, mission, and team info
- Customize the donation amounts and impact descriptions

### Navigation
Edit `src/router/index.js` to add or remove pages.

## Features

- ✅ Vue 3 with Composition API
- ✅ Vue Router for navigation
- ✅ Responsive design (mobile-first)
- ✅ Accessible components
- ✅ Modern CSS with custom properties
- ✅ Ready-to-customize templates

## License

MIT
