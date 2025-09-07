# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a modern technical blog focused on DirectX 11 graphics programming and PhysX physics engine development, built with Next.js 14. It's a static site deployed to GitHub Pages at https://hgl-pong.github.io.

## Common Development Commands

### Installation and Development
```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server (after building)
npm start

# Run linting
npm run lint

# Export static files for GitHub Pages
npm run export
```

### Testing and Debugging
Since this is a Next.js static site without a test suite configured yet, you can:
```bash
# Type-check TypeScript files
npx tsc --noEmit

# Check for ESLint issues
npm run lint

# Build and preview production build locally
npm run build && npm run start
```

### Deployment
The site automatically deploys to GitHub Pages when pushing to the `main` branch via GitHub Actions. The workflow is defined in `.github/workflows/nextjs.yml`.

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS with custom theme configuration
- **Icons**: Lucide React
- **Animations**: Framer Motion and AOS (Animate On Scroll)
- **Deployment**: GitHub Pages via static export

### Directory Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog listing and article pages
│   │   ├── page.tsx       # Blog listing page
│   │   ├── directx11-rendering-pipeline/
│   │   ├── physx-integration-guide/
│   │   └── hlsl-shader-programming/
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
└── components/            # Reusable React components
    ├── Header.tsx         # Navigation header
    ├── Hero.tsx           # Homepage hero section
    ├── TechStack.tsx      # Technology showcase
    ├── LatestPosts.tsx    # Recent blog posts
    ├── ArticleCard.tsx    # Blog post card
    ├── TableOfContents.tsx # Article navigation
    ├── ReadingProgress.tsx # Reading progress bar
    ├── CodeBlock.tsx      # Code highlighting
    └── ... (25+ components total)
```

### Key Design Patterns

1. **Component-Based Architecture**: All UI elements are modular React components with TypeScript interfaces.

2. **Dark Theme First**: The site uses a dark theme by default with light theme classes available (though theme toggle is currently disabled).

3. **Static Generation**: All pages are statically generated at build time for optimal performance.

4. **Glass Morphism UI**: Extensive use of backdrop blur, transparency, and border effects for modern aesthetics.

5. **Motion Design**: Heavy use of animations via Framer Motion and CSS animations for engaging user experience.

### Content Management

Blog posts are currently hardcoded in `src/app/blog/page.tsx` with individual article pages in subdirectories. Each article directory contains a `page.tsx` file with the full article content.

To add a new blog post:
1. Create a new directory under `src/app/blog/[article-slug]/`
2. Add a `page.tsx` file with the article content
3. Update the `blogPosts` array in `src/app/blog/page.tsx`

### Styling System

- **Tailwind Configuration**: Custom color palette with primary grayscale theme
- **Typography Plugin**: Configured for article content styling
- **Utility Classes**: Extensive use of Tailwind utilities with custom glass morphism effects
- **Responsive Design**: Mobile-first approach with breakpoints at sm, md, lg, xl

### Performance Considerations

- **Image Optimization**: Next.js Image component used with `unoptimized: true` for GitHub Pages compatibility
- **Code Splitting**: Automatic code splitting by Next.js
- **Static Export**: `output: 'export'` configuration for GitHub Pages
- **Component Lazy Loading**: Some components use dynamic imports

## Important Configuration Files

### next.config.js
- Configured for static export with `output: 'export'`
- Trailing slashes enabled for GitHub Pages compatibility
- Images unoptimized for static deployment

### tsconfig.json
- Path alias `@/*` maps to `./src/*`
- Strict TypeScript mode enabled
- JSX preserve mode for Next.js

### tailwind.config.js
- Custom grayscale color palette
- Typography plugin configured for dark theme
- Content paths configured for all component files

## Development Tips

1. **Adding Components**: Place new components in `src/components/` with TypeScript interfaces
2. **Route Creation**: Add new pages as directories under `src/app/` with `page.tsx` files
3. **Static Assets**: Place images in `public/` directory
4. **Type Safety**: Always define TypeScript interfaces for component props
5. **Animation Performance**: Use CSS transforms over position changes for smooth animations

## Current Features

- Personal avatar display with animated effects
- Technology stack visualization with skill percentages
- Blog system with search, categories, and tags
- Reading progress indicator and table of contents
- Code syntax highlighting
- Particle background effects
- Smooth page transitions
- Mobile-responsive design

## GitHub Pages Deployment

The site automatically deploys when pushing to `main` branch. The GitHub Actions workflow:
1. Checks out code
2. Sets up Node.js 18
3. Installs dependencies with `npm ci`
4. Builds with `npm run build`
5. Deploys `./out` directory to `gh-pages` branch

Ensure all links use trailing slashes and assets use relative paths for proper GitHub Pages routing.
