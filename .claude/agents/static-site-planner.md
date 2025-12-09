# Static Website Architectural Plan - Next.js + Shadcn/UI

## Executive Summary

This document provides a comprehensive architectural plan for building a production-ready static website using Next.js 16 (App Router) with Shadcn/UI components. The existing project has been initialized with a robust foundation including Tailwind CSS 4, React 19.2, comprehensive Radix UI primitives, and a complete Shadcn/UI component library (54 components installed).

**Current State Analysis:**
- Next.js 16.0.8 with App Router architecture
- React Compiler enabled for automatic performance optimization
- Shadcn/UI "new-york" style variant with full component suite
- Tailwind CSS 4 with CSS variables theming system
- Dark mode support via next-themes
- TypeScript with strict mode enabled
- Path aliases configured (@/components, @/lib, @/hooks, @/ui)

---

## 1. Technology Stack & Justification

### 1.1 Core Framework: Next.js 16 (App Router)

**Why Next.js for Static Sites:**
- **Static Site Generation (SSG)**: Next.js excels at generating static HTML at build time via `export` configuration
- **Image Optimization**: Built-in `next/image` component with automatic WebP/AVIF conversion, lazy loading, and responsive srcsets
- **File-Based Routing**: Intuitive App Router structure mirrors URL architecture
- **React Server Components**: Default server-side rendering reduces client-side JavaScript
- **Incremental Static Regeneration (ISR)**: Optional hybrid approach for content that updates periodically
- **Bundle Optimization**: Automatic code splitting and tree shaking
- **React Compiler**: Enabled in this project for automatic memoization and re-render optimization

**Specific Next.js 16 Advantages:**
- **Turbopack**: Faster local development and builds
- **React 19 Support**: Access to latest React features including actions and optimistic updates
- **Enhanced Caching**: Improved fetch cache and route cache mechanisms
- **Partial Prerendering**: Combine static and dynamic content seamlessly

**Configuration Status:**
```typescript
// next.config.ts - Already configured
const nextConfig: NextConfig = {
  reactCompiler: true, // Automatic performance optimization
};
```

**For Full Static Export (if needed):**
```typescript
const nextConfig: NextConfig = {
  output: 'export', // Generate static HTML/CSS/JS
  reactCompiler: true,
  images: {
    unoptimized: true, // Required for static export OR use image loader
  },
};
```

### 1.2 Component System: Shadcn/UI

**Already Installed - Analysis:**

The project has a complete Shadcn/UI setup with 54 components installed, using the "new-york" design variant. This is optimal for static sites because:

**Architecture Benefits:**
1. **Components Live in Your Codebase**: All components are copied to `D:\claudetest\components\ui\`, giving full ownership and customization control
2. **No Runtime Dependencies**: Only relies on Radix UI primitives (already installed) and Tailwind utilities
3. **Tree-Shakeable**: Unused component code is automatically removed during builds
4. **Zero-JS Options**: Many components (Card, Badge, Separator) are pure CSS with no JavaScript
5. **Accessibility Built-In**: All interactive components use Radix UI primitives with WCAG 2.1 AA compliance

**Installed Components Inventory:**

**Layout & Structure (10):**
- `Card` - Content containers with header/footer/content sections
- `Separator` - Visual dividers
- `Aspect Ratio` - Responsive media containers
- `Resizable` - Adjustable panels
- `Scroll Area` - Custom scrollbars
- `Sidebar` - Navigation sidebars
- `Sheet` - Slide-out panels
- `Breadcrumb` - Navigation trails
- `Pagination` - Multi-page navigation
- `Table` - Data tables

**Navigation (4):**
- `Navigation Menu` - Horizontal/vertical menus
- `Menubar` - Application menu bars
- `Context Menu` - Right-click menus
- `Dropdown Menu` - Action dropdowns

**Interactive Components (15):**
- `Button` - Primary/secondary/ghost/outline variants
- `Button Group` - Grouped button layouts
- `Toggle` - Binary state switches
- `Toggle Group` - Radio-style toggle groups
- `Switch` - On/off toggles
- `Checkbox` - Multi-select inputs
- `Radio Group` - Single-select options
- `Select` - Dropdown selections
- `Slider` - Range inputs
- `Progress` - Loading/progress indicators
- `Accordion` - Collapsible sections
- `Collapsible` - Show/hide content
- `Tabs` - Tabbed interfaces
- `Command` - Command palette (⌘K style)
- `Carousel` - Image/content sliders

**Forms (7):**
- `Form` - React Hook Form integration
- `Input` - Text inputs
- `Input Group` - Labeled input groupings
- `Input OTP` - One-time password inputs
- `Textarea` - Multi-line text inputs
- `Label` - Form labels
- `Field` - Complete form field wrapper

**Feedback & Overlays (10):**
- `Dialog` - Modal dialogs
- `Alert Dialog` - Confirmation dialogs
- `Drawer` - Bottom/side drawers (Vaul)
- `Popover` - Floating popovers
- `Tooltip` - Hover hints
- `Hover Card` - Rich hover content
- `Alert` - Notification banners
- `Sonner` - Toast notifications
- `Skeleton` - Loading placeholders
- `Spinner` - Loading spinners

**Data Display (5):**
- `Avatar` - User avatars with fallbacks
- `Badge` - Status/tag indicators
- `Calendar` - Date picker
- `Chart` - Recharts integration
- `Empty` - Empty state placeholders

**Utility Components (3):**
- `Item` - Reusable list items
- `KBD` - Keyboard shortcuts display
- `theme-provider` - Dark mode integration

### 1.3 Styling System: Tailwind CSS 4

**Why Tailwind CSS 4:**
- **Native CSS Features**: Uses @import and CSS variables natively (no PostCSS transforms)
- **Performance**: Faster builds with streamlined architecture
- **Design Tokens**: CSS variables for dynamic theming
- **Responsive by Default**: Mobile-first breakpoint system
- **Dark Mode**: Class-based dark mode already configured

**Current Configuration Analysis:**

```css
/* app/globals.css - Modern Tailwind 4 Setup */
@import "tailwindcss";
@import "tw-animate-css"; // Animation utilities

@custom-variant dark (&:is(.dark *)); // Dark mode variant

@theme inline {
  // CSS variables mapped to Tailwind utilities
  --color-background: var(--background);
  --radius-lg: var(--radius);
  // ... 44 design tokens configured
}

:root {
  --radius: 0.625rem; // 10px base radius
  --background: oklch(1 0 0); // Pure white
  --foreground: oklch(0.145 0 0); // Near black
  // OKLCH color space for perceptual uniformity
}

.dark {
  --background: oklch(0.145 0 0); // Dark background
  --foreground: oklch(0.985 0 0); // Light text
  // Automatic dark mode color swaps
}
```

**Design System Features:**
- **OKLCH Color Space**: More perceptual uniform than HSL/RGB
- **Neutral Base Color**: Professional grayscale foundation
- **5 Chart Colors**: Recharts theming support
- **Sidebar Design Tokens**: Dedicated navigation theming
- **Configurable Radius**: 4 radius sizes (sm/md/lg/xl)

### 1.4 Supporting Technologies

**Icon Library: Lucide React (v0.556)**
- 1,000+ open-source icons
- Tree-shakeable imports
- TypeScript support
- Consistent 24x24 design grid

**Form Management: React Hook Form + Zod**
- `react-hook-form` (v7.68): Performance-focused form library
- `zod` (v4.1.13): Runtime type validation
- `@hookform/resolvers`: Zod integration
- Shadcn Form component wraps these for consistent UX

**Date Handling:**
- `date-fns` (v4.1.0): Modular date utilities
- `react-day-picker` (v9.12.0): Calendar component integration

**Animations:**
- `tw-animate-css`: Tailwind animation utilities
- `embla-carousel-react`: Touch-friendly carousels
- `vaul`: Performant drawer component

**Type Safety:**
- TypeScript 5 with strict mode
- Path aliases configured (`@/components`, `@/lib`, `@/hooks`, `@/ui`)
- React 19 types included

---

## 2. Project Structure & Architecture

### 2.1 Recommended Directory Structure

```
D:\claudetest\
├── .claude/                    # Agent configurations
│   └── agents/
│       └── static-site-planner.md
├── app/                        # Next.js App Router
│   ├── (marketing)/           # Route group for marketing pages
│   │   ├── page.tsx           # Homepage (/)
│   │   ├── about/
│   │   │   └── page.tsx       # /about
│   │   ├── features/
│   │   │   └── page.tsx       # /features
│   │   ├── pricing/
│   │   │   └── page.tsx       # /pricing
│   │   └── contact/
│   │       └── page.tsx       # /contact
│   ├── blog/                  # Blog section
│   │   ├── page.tsx           # Blog index (/blog)
│   │   └── [slug]/
│   │       └── page.tsx       # Individual posts (/blog/post-title)
│   ├── docs/                  # Documentation (if needed)
│   │   ├── page.tsx           # Docs home
│   │   └── [[...slug]]/
│   │       └── page.tsx       # Catch-all for nested docs
│   ├── layout.tsx             # Root layout (already configured)
│   ├── globals.css            # Global styles (already configured)
│   ├── error.tsx              # Error boundary
│   ├── not-found.tsx          # 404 page
│   ├── sitemap.ts             # Dynamic sitemap generation
│   ├── robots.ts              # Robots.txt generation
│   └── opengraph-image.tsx    # OG image generation
├── components/
│   ├── ui/                    # Shadcn components (54 installed)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ... (52 more)
│   ├── theme-provider.tsx     # Dark mode provider (installed)
│   ├── layout/                # Layout components
│   │   ├── header.tsx         # Site header
│   │   ├── footer.tsx         # Site footer
│   │   ├── navigation.tsx     # Main navigation
│   │   └── mobile-nav.tsx     # Mobile navigation
│   ├── sections/              # Page sections
│   │   ├── hero.tsx           # Hero sections
│   │   ├── features.tsx       # Feature grids
│   │   ├── testimonials.tsx   # Social proof
│   │   ├── cta.tsx            # Call-to-action sections
│   │   └── faq.tsx            # FAQ accordions
│   ├── content/               # Content-specific components
│   │   ├── blog-card.tsx      # Blog post cards
│   │   ├── author-bio.tsx     # Author information
│   │   └── table-of-contents.tsx
│   └── marketing/             # Marketing-specific
│       ├── pricing-card.tsx
│       ├── feature-card.tsx
│       └── logo-cloud.tsx
├── content/                   # Content files
│   ├── blog/                  # Blog posts
│   │   ├── index.ts           # Post metadata export
│   │   └── posts/
│   │       ├── getting-started.mdx
│   │       └── introduction.mdx
│   ├── docs/                  # Documentation
│   │   └── ... .mdx files
│   └── data/                  # Static data
│       ├── navigation.ts      # Navigation config
│       ├── features.ts        # Features data
│       ├── testimonials.ts    # Testimonials data
│       └── pricing.ts         # Pricing plans
├── lib/
│   ├── utils.ts              # cn() utility (installed)
│   ├── constants.ts          # Site constants
│   ├── metadata.ts           # SEO metadata helpers
│   ├── content.ts            # Content loading utilities
│   └── mdx/                  # MDX processing
│       ├── serialize.ts      # MDX serialization
│       └── components.tsx    # MDX component mappings
├── hooks/
│   ├── use-mobile.ts         # Mobile detection (installed)
│   ├── use-scroll.ts         # Scroll position tracking
│   └── use-mounted.ts        # Hydration safety
├── public/
│   ├── images/               # Static images
│   │   ├── hero/
│   │   ├── features/
│   │   └── team/
│   ├── fonts/                # Custom fonts (if needed)
│   ├── favicon.ico
│   └── robots.txt            # Static fallback
├── types/
│   ├── index.ts              # Global types
│   ├── content.ts            # Content types
│   └── metadata.ts           # SEO types
└── config/
    ├── site.ts               # Site configuration
    └── seo.ts                # SEO defaults
```

### 2.2 Route Groups Strategy

**Why Route Groups:**
Route groups `(folder-name)` allow logical organization without affecting URLs.

**Example Structure:**
```typescript
app/
├── (marketing)/          // No /marketing in URL
│   ├── layout.tsx       // Marketing-specific layout
│   ├── page.tsx         // Homepage at /
│   ├── about/page.tsx   // /about
│   └── pricing/page.tsx // /pricing
├── (legal)/             // Separate layout for legal pages
│   ├── layout.tsx       // Simple layout, no navigation
│   ├── privacy/page.tsx // /privacy
│   └── terms/page.tsx   // /terms
└── blog/                // Normal route
    └── page.tsx         // /blog
```

**Benefits:**
- Shared layouts without URL nesting
- Different navigation for different sections
- Easier code organization
- No impact on SEO or URLs

### 2.3 File Naming Conventions

**Pages:**
- `page.tsx` - Route entry point
- `layout.tsx` - Shared layout
- `loading.tsx` - Suspense fallback
- `error.tsx` - Error boundary
- `not-found.tsx` - 404 handling

**Components:**
- Kebab-case: `blog-card.tsx`, `feature-grid.tsx`
- Match file name to default export: `BlogCard`, `FeatureGrid`

**Content:**
- Lowercase with hyphens: `getting-started.mdx`, `introduction-to-react.mdx`

**Configuration:**
- Descriptive names: `site.ts`, `navigation.ts`, `seo-defaults.ts`

---

## 3. Component Architecture & Shadcn/UI Integration

### 3.1 Component Composition Strategy

**Three-Layer Architecture:**

1. **Primitive Layer**: Shadcn/UI components (in `components/ui/`)
2. **Composite Layer**: Domain-specific components combining primitives
3. **Section Layer**: Full page sections composing multiple composites

**Example - Homepage Hero:**

```typescript
// Layer 1: Shadcn Primitives (already installed)
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Layer 2: Composite Component
// components/sections/hero.tsx
export function Hero({ title, subtitle, badge, cta }: HeroProps) {
  return (
    <section className="container flex flex-col items-center gap-8 py-24 lg:py-32">
      {badge && (
        <Badge variant="secondary" className="px-4 py-1.5">
          {badge}
        </Badge>
      )}
      <h1 className="max-w-4xl text-center text-5xl font-bold tracking-tight lg:text-7xl">
        {title}
      </h1>
      <p className="max-w-2xl text-center text-xl text-muted-foreground">
        {subtitle}
      </p>
      <div className="flex gap-4">
        <Button size="lg">{cta.primary}</Button>
        <Button size="lg" variant="outline">{cta.secondary}</Button>
      </div>
    </section>
  );
}

// Layer 3: Page Implementation
// app/(marketing)/page.tsx
export default function HomePage() {
  return (
    <>
      <Hero
        badge="New: Feature Release"
        title="Build Amazing Products Faster"
        subtitle="Modern tools for modern teams"
        cta={{ primary: "Get Started", secondary: "Learn More" }}
      />
      <Features />
      <Testimonials />
    </>
  );
}
```

### 3.2 Component Mapping by Page Type

#### 3.2.1 Homepage

**Purpose**: Convert visitors, communicate value proposition, drive primary CTA

**Shadcn Components:**
- `Badge` - Announcement banners ("New", "Beta", "v2.0")
- `Button` - Primary/secondary CTAs with size="lg"
- `Card` - Feature showcases, benefit cards
- `Avatar` - Team members, testimonials
- `Accordion` - FAQ section
- `Separator` - Section dividers

**Section Breakdown:**

```typescript
// Hero Section
<section>
  <Badge>New Feature</Badge>
  <h1>Main Headline</h1>
  <p>Subheadline</p>
  <Button size="lg">Primary CTA</Button>
  <Button size="lg" variant="outline">Secondary CTA</Button>
</section>

// Features Grid
<section className="grid md:grid-cols-3 gap-6">
  {features.map(feature => (
    <Card key={feature.id}>
      <CardHeader>
        <CardTitle>{feature.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{feature.description}</p>
      </CardContent>
    </Card>
  ))}
</section>

// Social Proof
<section>
  <h2>What Our Users Say</h2>
  <div className="grid md:grid-cols-3 gap-8">
    {testimonials.map(testimonial => (
      <Card key={testimonial.id}>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={testimonial.avatar} />
              <AvatarFallback>{testimonial.initials}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base">{testimonial.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p>{testimonial.quote}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</section>

// FAQ
<section>
  <h2>Frequently Asked Questions</h2>
  <Accordion type="single" collapsible className="max-w-3xl">
    {faqs.map((faq, i) => (
      <AccordionItem key={i} value={`item-${i}`}>
        <AccordionTrigger>{faq.question}</AccordionTrigger>
        <AccordionContent>{faq.answer}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
</section>
```

**Accessibility:**
- `<h1>` only once per page (hero headline)
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels on Buttons for screen readers
- Focus management in interactive components

**Responsive Strategy:**
- Mobile-first grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Stack CTAs on mobile: `flex-col sm:flex-row`
- Adjust hero text size: `text-4xl lg:text-6xl`

---

## 4. Theming & Customization Strategy

### 4.1 Current Theme Configuration Analysis

The project uses Tailwind CSS 4's modern approach with CSS variables for dynamic theming. The existing configuration in `app/globals.css` provides a complete foundation with:

- OKLCH color space for perceptual uniformity
- Neutral base color scheme
- Full dark mode support
- 44 design tokens configured
- Sidebar theming
- Chart color palette

### 4.2 Brand Customization Workflow

**Step 1: Define Brand Colors**

Convert your brand colors to OKLCH format using tools like:
- https://oklch.com/
- https://bottosson.github.io/posts/oklab/

**Step 2: Update CSS Variables in globals.css**

Modify the `:root` and `.dark` selectors to match your brand:

```css
:root {
  --primary: oklch(0.55 0.20 250); /* Brand blue */
  --accent: oklch(0.65 0.24 150); /* CTA green */
  /* Update other variables as needed */
}
```

**Step 3: Component-Level Customization**

Use the `cn()` utility to extend component styling:

```typescript
<Button className="bg-gradient-to-r from-primary to-accent">
  Gradient CTA
</Button>
```

---

## 5. Content Management Strategy

### 5.1 Recommended Approach: MDX for Content-Heavy Sites

**Why MDX:**
- Write content in Markdown with React component embeds
- Type-safe frontmatter with Zod validation
- Build-time processing (no runtime overhead)
- Full control over rendering
- Git-based workflow (version control, pull requests, diffs)

**Installation:**

```bash
npm install next-mdx-remote gray-matter reading-time
npm install -D @types/mdx
```

### 5.2 Content Loading Utilities

Create utilities to load and process MDX content:

```typescript
// lib/content.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { z } from "zod";
import readingTime from "reading-time";

const PostMetadataSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  date: z.string(),
  author: z.object({
    name: z.string(),
    avatar: z.string(),
  }),
  category: z.string(),
  tags: z.array(z.string()).optional(),
});

export function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "content/blog/posts");
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter(fileName => fileName.endsWith(".mdx"))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, "");
      return getPostBySlug(slug);
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
```

---

## 6. Build & Deployment Workflow

### 6.1 Static Export Configuration

For full static site generation:

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};
```

### 6.2 Deployment Platforms

**Vercel (Recommended):**
- Zero-configuration deployment
- Automatic HTTPS
- Edge network
- Preview deployments
- Built-in analytics

**Setup:**
```bash
npm install -g vercel
vercel --prod
```

**Netlify:**
- Excellent form handling
- Built-in redirects
- Split testing

**Cloudflare Pages:**
- Fastest global CDN
- Unlimited bandwidth
- DDoS protection

---

## 7. SEO & Performance Optimization

### 7.1 Metadata Management

```typescript
// config/seo.ts
export const siteConfig = {
  name: "Your Brand",
  description: "Build amazing products faster",
  url: "https://yourdomain.com",
  ogImage: "https://yourdomain.com/og.jpg",
};

export const defaultMetadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};
```

### 7.2 Sitemap Generation

```typescript
// app/sitemap.ts
import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/content";
import { siteConfig } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogPosts = posts.map(post => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const staticPages = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
  ];

  return [...staticPages, ...blogPosts];
}
```

---

## 8. Step-by-Step Implementation Guide

### Phase 1: Foundation Setup (Week 1)

**Day 1-2: Project Configuration**
1. Project already initialized with Next.js 16
2. Shadcn/UI already installed with 54 components
3. Configure for static export if needed
4. Create configuration files

**Day 3-4: Core Layout Components**
1. Create Header component
2. Create Footer component
3. Create ThemeToggle component
4. Update root layout

**Day 5-7: Design System Customization**
1. Define brand colors
2. Update CSS variables
3. Test dark mode
4. Set up typography

### Phase 2: Content & Pages (Week 2)

**Day 1-2: Homepage**
1. Create hero section
2. Build features grid
3. Add testimonials
4. Implement FAQ
5. Add CTA section

**Day 3: Secondary Pages**
1. About page
2. Features page
3. Pricing page
4. Contact page

**Day 4-5: Blog System**
1. Install MDX dependencies
2. Create content utilities
3. Build blog index
4. Create post template
5. Write sample posts

### Phase 3: SEO & Performance (Week 3)

**Day 1-2: SEO Setup**
1. Configure metadata
2. Create sitemap
3. Add robots.txt
4. Implement structured data
5. Create OG images

**Day 3-4: Performance Optimization**
1. Optimize images
2. Set up font optimization
3. Run bundle analysis
4. Optimize dependencies

**Day 5: Testing**
1. Test all pages
2. Check responsive design
3. Verify dark mode
4. Run Lighthouse audits
5. Test accessibility

### Phase 4: Launch (Week 4)

**Day 1-2: Deployment**
1. Deploy to production
2. Configure DNS
3. Test production build

**Day 3-4: Post-Launch**
1. Submit sitemap
2. Monitor performance
3. Set up analytics

---

## 9. Maintenance Workflows

### Adding New Blog Posts

1. Create MDX file in `content/blog/posts/`
2. Add frontmatter and content
3. Build and deploy

### Updating Components

```bash
npx shadcn@latest add button --overwrite
```

### Performance Monitoring

Set up Vercel Analytics or Google Analytics to track Core Web Vitals and user engagement.

---

## 10. Conclusion & Next Steps

### Current Project Strengths

Your project is excellently configured with:
- Modern tech stack (Next.js 16, React 19, Tailwind CSS 4)
- Complete component library (54 Shadcn/UI components)
- Performance optimizations (React Compiler)
- Design system with dark mode
- Type safety with TypeScript

### Immediate Action Items

**Priority 1:**
1. Define brand value proposition
2. Customize color palette
3. Create Header/Footer
4. Build homepage hero

**Priority 2:**
1. Install MDX dependencies
2. Build core pages
3. Write initial content
4. Configure SEO

**Priority 3:**
1. Optimize assets
2. Deploy to production
3. Monitor performance

### Success Metrics

- Lighthouse scores: 90+ across all metrics
- Core Web Vitals: All in "good" range
- Page load time: < 2 seconds
- Zero accessibility issues

---

**This architectural plan provides a complete roadmap from the current state to a production-ready static website, tailored specifically to your Next.js + Shadcn/UI setup.**

**Estimated Timeline:** 4-5 weeks for full implementation, or 2 weeks for MVP launch.
