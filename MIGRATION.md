# Next.js App Router Migration Guide

This document outlines the migration from Next.js Pages Router to App Router structure.

## 🚀 Migration Overview

### What Changed

#### 1. **Directory Structure**
- **Before**: `pages/` directory with file-based routing
- **After**: `app/` directory with folder-based routing and layout support

```
app/
├── layout.tsx              # Root layout (replaces _app.js)
├── page.tsx               # Home page (replaces index.js)
├── contact/
│   └── page.tsx          # Contact page
├── work/
│   └── page.tsx          # Work/Projects page
├── project/
│   └── [slug]/
│       └── page.tsx      # Dynamic project pages
├── certifications/
│   └── page.tsx          # Certifications page
├── services/
│   └── page.tsx          # Services page
├── vinyl/
│   └── page.tsx          # Vinyl collection page
└── api/
    ├── send-email/
    │   └── route.ts      # Email API route
    └── spotify/
        └── route.ts      # Spotify API route
```

#### 2. **TypeScript Migration**
- Migrated from JavaScript to TypeScript
- Added comprehensive type definitions in `types/` directory
- Type-safe component props and API responses

#### 3. **Component Organization**
```
components/
├── ui/                    # Reusable UI components
│   ├── MotionDiv.tsx     # Client-side motion wrapper
│   └── ColorModeValues.tsx # Color mode helper
├── layouts/               # Layout components
│   └── Navbar.tsx        # Navigation component
└── forms/                 # Form components
    └── ContactForm.tsx   # Contact form
```

#### 4. **Server Components**
- **Pages**: All pages are now Server Components by default
- **Data Fetching**: Direct async functions instead of `getStaticProps`/`getServerSideProps`
- **Client Components**: Marked with `'use client'` directive where needed

#### 5. **Metadata Management**
- **Before**: `<Head>` component in each page
- **After**: `metadata` export from page components
- SEO optimization with structured metadata

#### 6. **API Routes**
- **Before**: `pages/api/` with default export functions
- **After**: `app/api/` with named export functions (`GET`, `POST`, etc.)
- Better TypeScript support and request/response handling

## 🛠️ Technical Improvements

### Data Fetching Optimization
- Server-side data fetching by default
- Reduced client-side JavaScript bundle
- Better performance with streaming and parallel data fetching

### Type Safety
- Complete TypeScript coverage
- Proper type definitions for:
  - Project data structures
  - API request/response types
  - Component props
  - Service configurations

### SEO Enhancements
- Structured metadata API
- Better Open Graph support
- Improved Twitter Card integration

## 🚦 Running the Migrated Application

### Prerequisites
```bash
npm install
# or
yarn install
```

### Development
```bash
npm run dev
# or
yarn dev
```

### Production Build
```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 🎯 Key Features Maintained

1. **Dark Mode Support** - Full Chakra UI theme integration
2. **Responsive Design** - Mobile-first approach maintained
3. **Static Generation** - Optimized for static site generation
4. **Image Optimization** - Next.js Image component integration
5. **API Integration** - SendGrid email and Spotify API support

## 📝 Notes

- All functionality from the original Pages Router implementation has been preserved
- Performance improvements through server-side rendering and reduced client-side JavaScript
- Better developer experience with TypeScript and improved file organization
- Backward compatibility maintained for all external integrations

## 🐛 Troubleshooting

If you encounter issues:

1. Clear Next.js cache: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check TypeScript compilation: `npx tsc --noEmit`

For specific issues, refer to the [Next.js App Router documentation](https://nextjs.org/docs/app).
