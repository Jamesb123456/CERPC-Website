# Central East Roleplay Community Website

[![CI](https://github.com/Jamesb123456/CERPC-Website/actions/workflows/ci.yml/badge.svg)](https://github.com/Jamesb123456/CERPC-Website/actions/workflows/ci.yml)
[![CodeQL](https://github.com/Jamesb123456/CERPC-Website/actions/workflows/codeql.yml/badge.svg)](https://github.com/Jamesb123456/CERPC-Website/actions/workflows/codeql.yml)

A professional UK police-themed website for the Central East Roleplay Community (CERPC) FiveM server, featuring authentic Metropolitan Police styling and comprehensive community features.

## 🚀 Features

### Core Pages
- **Home**: Professional landing page with hero section and community highlights
- **About**: Community background, mission, and leadership profiles
- **ORBAT**: Interactive organizational chart with authentic UK police hierarchy
- **Departments**: Specialized units overview (Emergency Response, Firearms, etc.)
- **Join Us**: Recruitment information and application process
- **Rules & Guidelines**: Community rules and roleplay standards
- **Community**: Social features and Discord integration
- **Gallery**: Visual showcase of community activities
- **Resources**: Training materials and downloads
- **Members**: Member portal and authentication

### Design Features
 - **Authentic UK Police Theme**: Professional blue/gold color scheme
 - **Responsive Design**: Mobile-first approach with desktop enhancements
 - **Interactive Elements**: Hover effects, animations, and smooth transitions
 - **Professional Typography**: Clean, readable fonts with proper hierarchy

## 🛠️ Technology Stack

### Frontend
 - **React.js** (18.2.0) - Component-based UI framework
 - **React Router DOM** (6.8.0) - Client-side routing
 - **Styled Components** (5.3.6) - CSS-in-JS styling solution
 - **React Icons** (4.7.1) - Comprehensive icon library

### Build Tools
- **Create React App** (5.0.1) - Zero-configuration build setup
- **Node.js** (18.x) - Runtime environment
- **npm** - Package management

### Deployment
- **Netlify** - Static site hosting with CDN
- **Automatic builds** from Git repository
- **HTTPS** enabled by default

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js        # Navigation header
│   └── Footer.js        # Site footer
├── pages/               # Page components
│   ├── Home.js          # Landing page
│   ├── About.js         # About page
│   ├── Structure.js     # Organizational chart (ORBAT)
│   └── JoinUs.js        # Recruitment page
├── data/                # Static data files
├── assets/              # Images and media
├── styles/              # Global styles
├── App.js               # Main application component
└── index.js             # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (18.x or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CERPC-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App (irreversible)

## 🎨 Design System

### Color Palette
- **Primary Navy**: `#0a1a2e` - Headers, primary text
- **Police Blue**: `#1557a0` - Buttons, accents
- **Gold Accent**: `#FFD700` - Highlights, active states
- **Background**: `#f8fafc` - Light grey background
- **White**: `#ffffff` - Card backgrounds

### Typography
- **Headings**: Arial Black, Arial, sans-serif
- **Body Text**: Arial, Helvetica, sans-serif
- **Font Weights**: 400 (normal), 600 (semi-bold), 700 (bold), 900 (black)

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📱 Features Overview

### ORBAT (Organizational Chart)
- Authentic UK Metropolitan Police hierarchy
- Visual rank insignia for each position
- Interactive hover effects
- Responsive design for all screen sizes
- Professional connector lines between levels

### Header Navigation
 - Fixed header with gradient background
 - External members login link
 - Mobile hamburger menu
 - Smooth transitions and animations

### Content Management
- All content is easily editable through component files
- Image assets organized in dedicated folders
- Consistent styling through styled-components

## 🔧 Customization

### Updating Content
1. **Page Content**: Edit respective files in `src/pages/`
2. **Navigation**: Modify `src/components/Header.js`
3. **Styling**: Update styled-components in individual files
4. **Images**: Replace files in `Branding/` directory

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route in `src/App.js`
3. Update navigation in `src/components/Header.js`

## 🗺️ Roadmap

- **Departments**: Specialized units overview
- **Rules & Guidelines**: Community rules and standards
- **Community**: Social and Discord integrations
- **Gallery**: Image gallery and media
- **Resources**: Training materials and downloads
- **Members**: Member portal and authentication

## 🚀 Deployment

### Netlify Deployment
The site is configured for automatic deployment on Netlify:

1. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: 18.x

2. **Configuration Files**:
   - `netlify.toml` - Deployment configuration
   - `.gitignore` - Files to exclude from deployment

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy the build folder to your hosting provider
```

## 📋 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Android Chrome)

## 🔒 Security Features

- HTTPS enforcement
- Security headers (XSS protection, content type options)
- Frame options to prevent clickjacking
- Referrer policy for privacy

## 🎯 Performance Optimizations

## 📞 Support & Community
 - **Discord**: https://discord.gg/YkBj8hMfqz
 - **Issues**: Report bugs and feature requests via GitHub issues
 - **Documentation**: Comprehensive docs in `/docs` folder

## 📄 License
This project is licensed under the MIT License — see the [`LICENSE`](LICENSE) file for details.

## 🤝 Contributing
We welcome contributions! Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) for guidelines on branching, commits, and pull requests.

## 🧭 Code of Conduct
By participating in this project, you agree to abide by our [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

## 🔐 Security
Please review [`SECURITY.md`](SECURITY.md) for how to report vulnerabilities. Use GitHub's private vulnerability reporting rather than public issues.

## 🧪 Continuous Integration
All pull requests are automatically built via GitHub Actions ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)). Ensure `npm run build` passes locally before opening a PR.

## 🙏 Acknowledgments
- UK Metropolitan Police for authentic rank structure inspiration
- FiveM community for roleplay standards
- React.js team for the excellent framework
- All community members who contributed to the project
