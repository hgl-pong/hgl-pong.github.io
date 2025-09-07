# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Core Development:**
- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build production version with static export
- `npm run lint` - Run ESLint for code quality checks
- `npm run start` - Start production server (requires build first)
- `npm run export` - Static export for GitHub Pages deployment

**Testing & Validation:**
- Type checking is automatically handled by Next.js TypeScript integration
- No separate test framework configured - focus on build/lint validation

## Project Architecture

**Framework:** Next.js 14 with App Router
- **Type System:** TypeScript with strict mode enabled
- **Styling:** Tailwind CSS with custom DirectX-inspired color palette
- **Icons:** Lucide React for consistent iconography
- **Deployment:** GitHub Pages with static export

**Key Configurations:**
- `next.config.js`: Static export (`output: 'export'`) for GitHub Pages
- `tailwind.config.js`: Custom typography styles for technical content
- `tsconfig.json`: Path mapping with `@/*` alias for src directory

## Directory Structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # Professional profile page
│   ├── blog/              # Technical articles
│   │   ├── directx11-rendering-pipeline/    # Deep technical content
│   │   ├── physx-integration-guide/        # Physics engine articles
│   │   └── hlsl-shader-programming/         # Shader programming
│   ├── contact/           # Contact form page
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/            # Reusable UI components (30+ components)
│   ├── ArticleCard.tsx   # Blog post preview cards
│   ├── CodeBlock.tsx     # Syntax highlighted code blocks
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Homepage hero section
│   ├── ReadingProgress.tsx # Article progress indicator
│   ├── TableOfContents.tsx # Dynamic table of contents
│   ├── TechStack.tsx    # Skills and technology showcase
│   └── SearchBox.tsx    # Article search functionality
public/
├── avatar.jpg           # Professional profile image
└── favicon.ico          # Site favicon
```

## Component Architecture

**Core Components:**
- `Header`: Navigation with mobile responsiveness
- `Hero`: Homepage introduction with animated typing
- `TechStack`: Visual technology proficiency display
- `ArticleCard`: Blog post previews with metadata
- `CodeBlock`: Professional code display with copy functionality

**Advanced UX Components:**
- `ReadingProgress`: Real-time reading progress indicator
- `TableOfContents`: Auto-generated from article headings
- `SearchBox`: Client-side article search and filtering
- `ParticleBackground`: Animated background effects

**Technical Content Components:**
- Specialized for DirectX 11, PhysX, HLSL, and C++ content
- Optimized for long-form technical articles with code samples
- Support for complex rendering pipeline diagrams and explanations

## Content Management

**Adding New Articles:**
1. Create directory in `src/app/blog/[article-name]/`
2. Add `page.tsx` with article content
3. Follow existing article structure with proper heading hierarchy
4. Use `CodeBlock` component for code snippets
5. Update blog listing page if adding to main navigation

**Article Structure Template:**
```tsx
export default function ArticlePage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-8">
        <h1>Article Title</h1>
        {/* Technical content with proper heading structure */}
        <CodeBlock language="cpp" code={codeSnippet} />
      </main>
      <Footer />
    </>
  )
}
```

## Deployment Process

**GitHub Pages Automation:**
- Configured via GitHub Actions in `.github/workflows/`
- Auto-deploys on push to `main` branch
- Static export via `npm run build && npm run export`
- No additional configuration needed

**Manual Deployment:**
```bash
npm run build    # Build production version
npm run export   # Export static files to 'out' directory
# Deploy 'out' directory contents to web server
```

## Performance Optimizations

**Build Optimizations:**
- Static Site Generation (SSG) for all pages
- Automatic code splitting and lazy loading
- Optimized images via Next.js Image component
- Tailwind CSS purging for minimal CSS bundle

**Runtime Optimizations:**
- Client-side navigation with App Router
- Efficient re-rendering with React best practices
- Optimized animations with Framer Motion
- Responsive design with mobile-first approach

## Special Considerations

**Technical Content Focus:**
- Articles are highly technical with complex code samples
- Requires proper syntax highlighting and formatting
- Math equations and diagrams may need special handling
- Long-form content structure with deep nesting

**Game Development Specifics:**
- DirectX 11 rendering pipeline explanations
- PhysX physics engine integration guides
- HLSL shader programming techniques
- C++ performance optimization patterns

**SEO Optimization:**
- Technical keyword optimization for game development terms
- Structured data for technical articles
- Mobile-friendly design for technical content
- Fast loading for code-heavy pages

## Common Development Tasks

1. **Add new technical article:** Create directory in `src/app/blog/`
2. **Update profile information:** Modify `src/app/about/page.tsx`
3. **Change styling:** Update Tailwind classes or `tailwind.config.js`
4. **Add new component:** Create in `src/components/` with TypeScript types
5. **Update dependencies:** Use `npm install` with version pinning

## Troubleshooting

**Build Issues:**
- Ensure Node.js version compatibility (18+ recommended)
- Clear `node_modules` and reinstall dependencies
- Check TypeScript type errors with `npm run build`

**Deployment Issues:**
- Verify GitHub Pages source is set to `gh-pages` branch
- Check GitHub Actions workflow logs for errors
- Ensure `basePath` is empty in `next.config.js` for GitHub Pages

---

*This DirectX 11 & PhysX blog is optimized for technical content delivery with a focus on game engine development expertise.*