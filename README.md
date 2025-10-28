# 🏦 OnlineLoans.org

> A modern, fast, and secure online loan application platform built with Next.js 16

[![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Prettier](https://img.shields.io/badge/Prettier-Formatted-pink?style=for-the-badge&logo=prettier)](https://prettier.io/)

## 🚀 Features

- **⚡ Fast & Modern** - Built with Next.js 16 and React 19
- **🔒 Secure** - Bank-level security for loan applications
- **📱 Responsive** - Mobile-first design that works on all devices
- **🎨 Beautiful UI** - Custom component library with consistent design
- **♿ Accessible** - WCAG compliant with proper ARIA attributes
- **🚀 SEO Optimized** - Meta tags, Open Graph, and structured data
- **💨 Performance** - Optimized images, fonts, and code splitting

## 🛠️ Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** CSS Modules + CSS Variables
- **Code Quality:** Prettier + ESLint
- **Icons:** Custom SVG icons
- **Fonts:** Geist Sans & Geist Mono

## 📦 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with header
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── partner-with-us/   # Partner page
│   └── qa/                # QA page
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── PrimaryButton.tsx
│   │   ├── SecondaryButton.tsx
│   │   ├── AmountInput.tsx
│   │   └── UIComponentsShowcase.tsx
│   └── layout/
│       └── Header.tsx     # Navigation header
├── styles/
│   ├── globals.css        # Global styles
│   └── variables.css      # CSS custom properties
└── public/
    └── images/            # Optimized images & icons
        ├── logo/          # Brand assets
        ├── hero/          # Hero images
        ├── customers/     # Customer testimonials
        └── icons/         # UI icons
```

## 🎨 UI Components

### Primary Button
- Green background with white text
- Right-pointing arrow icon
- Hover and focus states
- Disabled state support

### Secondary Button
- Alternative styling for secondary actions
- Consistent with primary button design
- Full accessibility support

### Amount Input
- Pre-set loan amount buttons
- Interactive selection
- Disabled state support

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/onlineloans.org-nextjs-proj.git
   cd onlineloans.org-nextjs-proj
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

## 🎯 Key Features

### 🔐 Security
- Secure loan application process
- Data encryption and protection
- Privacy-focused design

### 📱 Mobile-First
- Responsive design for all screen sizes
- Touch-friendly interface
- Mobile-optimized performance

### ⚡ Performance
- Next.js 16 optimizations
- Image optimization
- Code splitting
- Fast loading times

### 🎨 Design System
- Consistent color palette
- Typography scale
- Component library
- Dark mode support

## 🌐 SEO & Accessibility

- **Meta Tags:** Comprehensive meta descriptions and titles
- **Open Graph:** Social media sharing optimization
- **Structured Data:** Rich snippets for search engines
- **ARIA Labels:** Screen reader accessibility
- **Keyboard Navigation:** Full keyboard support
- **Color Contrast:** WCAG AA compliant

## 📸 Screenshots

### Desktop View
![Desktop Screenshot](public/images/hero/onlineloans-loan-application-hero.png)

### Mobile View
![Mobile Screenshot](public/images/mobile/Logo.svg)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify:** Connect GitHub repository
- **AWS Amplify:** Deploy with CI/CD
- **Railway:** One-click deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website:** [onlineloans.org](https://onlineloans.org)
- **Email:** contact@onlineloans.org
- **GitHub:** [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for hosting and deployment
- [React](https://reactjs.org/) for the UI library
- [TypeScript](https://www.typescriptlang.org/) for type safety

---

<div align="center">
  <p>Built with ❤️ for better online lending experiences</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>