# 🏦 OnlineLoans.org

> A modern, fast, and secure online loan application platform built with Next.js 16

[![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Prettier](https://img.shields.io/badge/Prettier-Formatted-pink?style=for-the-badge&logo=prettier)](https://prettier.io/)

## 🚀 Features

- **⚡ Fast & Modern** - Built with Next.js 16 and React 19
- **🔒 Secure** - Bank-level security for loan applications
- **📱 Responsive** - Mobile-first design with rem-based scaling system
- **🎨 Beautiful UI** - Custom component library with consistent design
- **♿ Accessible** - WCAG compliant with proper ARIA attributes
- **🚀 SEO Optimized** - Meta tags, Open Graph, and structured data
- **💨 Performance** - Optimized images, fonts, and code splitting
- **📝 Multi-Step Forms** - Interactive loan application with validation
- **🔄 Real-time Formatting** - Automatic currency formatting for amounts
- **📊 Lender Comparison** - Side-by-side lender comparison table

## 🛠️ Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript 5
- **Styling:** SCSS Modules + CSS Variables + Rem-based responsive system
- **Code Quality:** Prettier + ESLint + Stylelint
- **Icons:** Custom SVG icons
- **Carousel:** Swiper.js for customer testimonials
- **State Management:** React Hooks (useState, useCallback, useMemo)

## 📦 Project Structure

```
src/
├── app/                          # Next.js App Router (all routes)
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── business/
│   │   └── page.tsx             # Business loans homepage
│   ├── business-loan/
│   │   └── page.tsx             # Business loan application form
│   ├── personal/
│   │   └── page.tsx             # Personal loans homepage
│   ├── partner-with-us/
│   │   └── page.tsx             # Partner page
│   └── qa/
│       └── page.tsx             # QA page
├── components/                   # Reusable components (GLOBAL)
│   ├── ui/                      # Buttons, inputs, selects
│   │   ├── Button/              # Primary/Secondary buttons
│   │   ├── Input/               # Text input with validation
│   │   ├── Select/              # Dropdown select component
│   │   ├── AmountInput/         # Amount input with currency formatting
│   │   ├── AppLink/             # Next.js Link wrapper
│   │   └── Loader/              # Loading spinner
│   ├── layout/                  # Header, footer, nav
│   │   └── Header/              # Navigation header with mobile menu
│   └── shared/                  # Shared components across features
├── features/                     # Page-specific business logic + components
│   ├── home/                    # Homepage components
│   │   ├── components/
│   │   │   ├── CreditTabs/      # Loan type tabs (Personal/Business)
│   │   │   ├── Rating/          # Rating display component
│   │   │   ├── Reviews/         # Customer reviews carousel (Swiper)
│   │   │   └── Legend/          # Hero legend with customer count
│   │   ├── HomePage.tsx
│   │   └── HomePage.module.scss
│   ├── business/                # Business loan components
│   │   ├── components/
│   │   │   ├── Footer/          # Lender comparison footer
│   │   │   │   └── components/
│   │   │   │       └── LenderTable/ # Lender comparison table
│   │   │   └── FinalStep/       # Completion step
│   │   ├── LoanPage.tsx
│   │   └── LoanPage.module.scss
│   ├── personal/                # Personal loan components
│   └── forms/                   # Multi-step loan forms
│       └── StepForm/            # Multi-step form with validation
│           ├── components/
│           │   ├── Steps/       # Step indicator
│           │   ├── OfferBanner/ # Sidebar offer banner
│           │   └── Note/        # Form notes
│           ├── config.ts        # Form configuration
│           ├── types/           # Form types
│           ├── StepForm.tsx
│           └── StepForm.module.scss
├── lib/                          # Helper functions
│   ├── classNames.ts            # CSS class name utility
│   └── index.ts                 # Barrel export
├── config/                       # Config files (URLs, constants)
│   ├── urlConfig.ts             # URL configuration
│   └── index.ts                 # Barrel export
├── types/                        # TypeScript interfaces + schemas
│   ├── index.ts                 # LoanTypes and other types
│   └── ...                      # Future type definitions
├── styles/                       # Global styles
│   ├── index.css                # Main styles with root font-size scaling
│   ├── variables.css            # CSS custom properties (colors, breakpoints)
│   └── reset.css                # CSS reset
└── public/
    └── images/                   # Images + icons
        ├── logo/                # Brand assets
        ├── hero/                # Hero images
        ├── customers/           # Customer testimonials
        └── icons/               # UI icons (features, navbar, ratings, etc.)
```

## 🎨 UI Components

### Button

- Primary variant: Green background with white text
- Secondary variant: Green border with green text
- Right-pointing arrow icon support
- Hover, active, and disabled states
- Responsive padding and font sizes

### Input

- Text input with validation support
- Hover and focus states
- Placeholder support
- Responsive font sizing

### Select

- Custom dropdown component
- Active/open states with visual feedback
- Keyboard navigation support
- Responsive design

### AmountInput

- Currency formatting (auto-formats to $X,XXX)
- Pre-set loan amount buttons
- Interactive selection
- Real-time formatting as user types
- URL parameter support for pre-filled amounts

### StepForm

- Multi-step form with slide animation
- Field validation with visual feedback
- Progress indicator
- Mobile-optimized height calculation
- Form submission to Google Sheets

## 🎨 Design System

### Responsive Breakpoints

- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px
- **2xl:** 1536px

### Responsive System

The app uses a **rem-based scaling system** with root font-size adjustments:

- Base: `16px` (default)
- Tablet (< 768px): `15px`
- Mobile (< 640px): `15px`

All sizing (padding, margins, font-sizes, etc.) uses `rem` units, ensuring automatic scaling across breakpoints.

### Color Palette

- **Primary:** `#2a3d66` (Dark blue)
- **Secondary:** `#5ec189` (Green)
- **Secondary-2:** `#ffcb66` (Yellow)
- **Background:** `#eff7ff` (Light blue)
- Full grayscale palette (gray-1 through gray-7)

### Typography

- Font sizes: xs, sm, base, lg, xl, 2xl
- Font weights: regular (400), medium (500), bold (700)
- Line heights: 100%, 120%, 150%, 190%

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

| Script                 | Description                             |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start development server (clears cache) |
| `npm run build`        | Build for production                    |
| `npm run start`        | Start production server                 |
| `npm run format`       | Format code with Prettier               |
| `npm run format:check` | Check code formatting                   |
| `npm run stylelint`    | Lint SCSS files                         |

## 🎯 Key Features

### 🔐 Security

- Secure loan application process
- Data encryption and protection
- Privacy-focused design
- Form submission to secure Google Sheets endpoint

### 📱 Mobile-First

- Responsive design for all screen sizes (sm, md, lg, xl, 2xl)
- Touch-friendly interface
- Mobile-optimized performance
- Rem-based scaling system
- Mobile navigation menu

### ⚡ Performance

- Next.js 16 optimizations
- Image optimization with Next.js Image
- Code splitting
- Fast loading times
- Optimized animations

### 🎨 Design System

- Consistent color palette
- Typography scale
- Component library
- Rem-based responsive system
- CSS Variables for theming

### 📝 Form Features

- Multi-step form with progress tracking
- Real-time validation
- Currency formatting
- URL parameter support for pre-filled forms
- Form submission with loading states

## 🌐 Pages

- **/** - Homepage (redirects to /business)
- **/business** - Business loans homepage
- **/personal** - Personal loans homepage
- **/business-loan** - Business loan application form
- **/about** - About page
- **/partner-with-us** - Partner page
- **/qa** - QA page

## 🔄 Form Flow

1. User enters amount on homepage (`/business` or `/personal`)
2. Amount is formatted and passed via URL parameter
3. User navigates to `/business-loan?amount=$200,000`
4. Form pre-fills with amount from URL
5. User completes multi-step form
6. Form validates and submits to Google Sheets
7. User sees final step with lender comparison

## 🌐 SEO & Accessibility

- **Meta Tags:** Comprehensive meta descriptions and titles
- **Open Graph:** Social media sharing optimization
- **Structured Data:** Rich snippets for search engines
- **ARIA Labels:** Screen reader accessibility
- **Keyboard Navigation:** Full keyboard support
- **Color Contrast:** WCAG AA compliant
- **Focus States:** Visible focus indicators

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
- **Email:** business@onlineloans.org
- **GitHub:** [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for hosting and deployment
- [React](https://reactjs.org/) for the UI library
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Swiper](https://swiperjs.com/) for the carousel component

---

<div align="center">
  <p>Built with ❤️ for better online lending experiences</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
