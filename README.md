my-app/
├── public/
│ ├── images/
│ │ ├── logo.svg
│ │ ├── favicon.ico
│ │ ├── icons/
│ │ │ ├── facebook.svg
│ │ │ ├── linkedin.svg
│ │ │ └── twitter.svg
│ │ └── hero/
│ │ ├── hero-desktop.webp
│ │ └── hero-mobile.webp
│ ├── og/
│ │ ├── og-default.jpg
│ │ └── og-home.jpg
│ ├── robots.txt
│ ├── sitemap.xml
│ └── manifest.json
│
├── src/
│ ├── app/
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ ├── favicon.ico
│ │ ├── icon.png
│ │ ├── (routes)/
│ │ │ ├── about/
│ │ │ │ └── page.tsx
│ │ │ ├── contact/
│ │ │ │ └── page.tsx
│ │ │ └── loans/
│ │ │ ├── page.tsx
│ │ │ └── [slug]/page.tsx # Dynamic route
│ │ └── api/
│ │ ├── form/route.ts # Example API endpoint
│ │ └── events/route.ts
│ │
│ ├── components/
│ │ ├── ui/
│ │ │ ├── Button.tsx
│ │ │ ├── Input.tsx
│ │ │ └── Card.tsx
│ │ ├── layout/
│ │ │ ├── Header.tsx
│ │ │ ├── Footer.tsx
│ │ │ └── Navbar.tsx
│ │ └── sections/
│ │ ├── Hero.tsx
│ │ └── Features.tsx
│ │
│ ├── lib/
│ │ ├── utils.ts
│ │ ├── constants.ts
│ │ ├── seo.ts
│ │ └── googleSheetsService.ts
│ │
│ ├── styles/
│ │ ├── globals.css
│ │ ├── variables.css
│ │ └── components/
│ │ ├── hero.css
│ │ └── card.css
│ │
│ ├── types/
│ │ ├── index.d.ts
│ │ └── loan.ts
│ │
│ └── hooks/
│ ├── useMediaQuery.ts
│ ├── useScroll.ts
│ └── useForm.ts
│
├── .env.local
├── next.config.mjs
├── tsconfig.json
├── package.json
└── README.md

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
