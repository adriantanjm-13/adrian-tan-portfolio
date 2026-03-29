# Adrian Tan - UX Design Portfolio

A beautiful Art Deco-inspired portfolio website built with [Astro](https://astro.build), showcasing case studies with high-impact storytelling and detailed design processes.

## Design System

### Colors
- **Deep Spruce**: `#2d5016` (Primary)
- **Light Spruce**: `#3d6b1f` (Secondary)
- **Cream**: `#f5f3f0` (Background)
- **Gold**: `#d4af37` (Accent)
- **Black**: `#1a1a1a` (Text)

### Typography
- **Headings**: Prata (serif)
- **Body**: Inter (sans-serif)

### Design Language
- Sharp lines and geometric elements
- Art Deco aesthetic with modern touches
- Emphasis on readability and clear hierarchy
- Subtle animations and interactions

## Project Structure

```
/content                 # Markdown case studies
  ├── improving-wash-tracking-oxwash.md
  ├── building-mercury-oxwash.md
  ├── revamping-chart-of-accounts-cryptio.md
  └── query-plan-comparison-redgate.md

/src
  ├── layouts/
  │   └── Layout.astro   # Main layout with Art Deco styling
  ├── pages/
  │   ├── index.astro    # Portfolio homepage
  │   └── [slug].astro   # Dynamic case study pages
  └── components/        # Reusable components (for future use)

/public               # Static assets
astro.config.mjs      # Astro configuration
tsconfig.json         # TypeScript configuration
package.json          # Project dependencies
```

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:3000` to view the site. Changes auto-reload.

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.

### Preview
```bash
npm run preview
```
Preview the production build locally.

## Case Studies

1. **Improving Wash Tracking in Oxwash** - Redesigning an internal laundry tracking system for operational efficiency
2. **Building Mercury in Oxwash** - Creating a design system and internal platform from scratch
3. **Revamping Chart of Accounts in Cryptio** - Fixing critical retention issues in a complex accounting module
4. **Query Plan Comparison in Redgate Monitor** - Building a high-speed query diagnostic tool for DBAs

Each case study focuses on:
- Real user problems and conflicts
- Research and discovery process
- Design decisions (not just screen descriptions)
- Measurable outcomes and impact

## Deployment

This site can be deployed to:
- **Vercel** (recommended): Connect your Git repo for zero-config deployment
- **Netlify**: Drag and drop or connect Git
- **Static hosting**: `npm run build` generates a static HTML site

## License

© 2026 Adrian Tan. All case studies and designs are original work.
