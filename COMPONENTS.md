# Component Documentation

This document describes the components built for the Next.js application.

## Components Created

### 1. Navbar Component (`components/navbar.tsx`)

A professional, production-ready navigation bar with the following features:

#### Features
- **Responsive Design**: Adapts seamlessly from mobile to desktop
- **Sticky Positioning**: Stays at the top of the page as users scroll
- **Scroll Effect**: Background blur and shadow appear when scrolling
- **Theme Toggle**: Dark/light mode switcher using next-themes
- **Mobile Menu**: Sheet-based hamburger menu for mobile devices
- **Accessibility**: Proper ARIA labels and keyboard navigation support
- **Hydration-Safe**: Prevents hydration mismatches with theme toggle

#### Navigation Links
- Home
- Features
- Pricing
- About
- Contact

#### Actions
- Log in (outline button)
- Sign up (primary button)
- Theme toggle (ghost icon button)

#### Usage
The navbar is integrated into the root layout (`app/layout.tsx`) and appears on all pages.

```tsx
import { Navbar } from "@/components/navbar"

<Navbar />
```

#### Customization
To modify navigation links, edit the `navLinks` array in `components/navbar.tsx`:

```tsx
const navLinks = [
  { href: "/", label: "Home" },
  { href: "#features", label: "Features" },
  // Add more links here
]
```

---

### 2. Homepage (`app/page.tsx`)

A modern, engaging homepage with multiple sections showcasing shadcn/ui components.

#### Sections

##### Hero Section
- Eye-catching headline with gradient text
- Compelling subheadline
- Two CTA buttons (primary and outline)
- Trust indicators (14-day trial, no credit card, cancel anytime)
- Badge component with icon
- Responsive typography (4xl to 7xl)

##### Stats Section
- 4 key metrics displayed in a responsive grid
- Social proof through numbers
- Responsive layout (2 columns mobile, 4 columns desktop)

##### Features Section
- 6 feature cards in a responsive grid
- Lucide React icons for each feature
- Hover effects with shadow and icon color transition
- Uses Card, CardHeader, CardTitle, and CardDescription components
- Semantic section heading with badge

##### Social Proof Section
- Customer testimonial with 5-star rating
- Avatar group display (overlapping circles)
- Quote from fictional customer
- Centered layout with max-width constraint

##### CTA Section
- Two-column layout (text + benefits)
- Large card with border emphasis
- Multiple benefits listed with checkmark icons
- Gradient background on benefits column
- Two action buttons (Start trial + Contact sales)

##### Footer
- 4-column responsive grid
- Company branding
- Link sections: Product, Company, Legal
- Copyright notice
- Hover states on all links

#### shadcn/ui Components Used
- Button (multiple variants: default, outline, ghost, sizes)
- Card (with Header, Title, Description, Content)
- Badge (outline and default variants)
- Sheet (for mobile menu in navbar)

#### Icons Used (from lucide-react)
- ArrowRight
- CheckCircle2
- Zap, Shield, Users, TrendingUp, Star, Sparkles
- Menu, Moon, Sun, X

---

## Layout Updates (`app/layout.tsx`)

### Changes Made
1. **Added Navbar**: Imported and included Navbar component
2. **Updated Metadata**: Changed title and description to match the brand
3. **Structure**: Navbar appears above all page content via layout

### Metadata
- **Title**: "Acme - Build Amazing Products Faster"
- **Description**: SEO-friendly description of the platform

---

## Design System Features

### Color System
- Uses OKLCH color space for perceptually uniform colors
- Full dark mode support via CSS custom properties
- Semantic color tokens (primary, secondary, muted, accent, destructive)
- Automatic theme switching with next-themes

### Responsive Breakpoints
- **Mobile**: Default (< 640px)
- **sm**: 640px - Small tablets
- **md**: 768px - Tablets
- **lg**: 1024px - Laptops
- **xl**: 1280px+ - Desktops

### Typography
- Responsive text sizes using Tailwind's responsive prefixes
- Tracking (letter-spacing) optimized for different sizes
- Line height adjustments for readability

### Spacing
- Consistent padding/margin using Tailwind's spacing scale
- Container with responsive padding
- Section spacing optimized for visual hierarchy

---

## Accessibility Features

### Navbar
- Semantic HTML (`header`, `nav`)
- ARIA labels on icon buttons ("Toggle theme", "Open menu")
- Screen reader text for close icons
- Keyboard navigation support
- Focus states on all interactive elements

### Homepage
- Proper heading hierarchy (h1, h2, h3)
- Alt text ready structure (images would need alt attributes)
- Semantic HTML5 sections
- Color contrast meets WCAG AA standards
- Focus-visible states on interactive elements

---

## Performance Optimizations

### Next.js Optimizations
- Static site generation (SSG) for homepage
- Automatic code splitting
- Image optimization ready (Next.js Image component compatible)
- CSS optimized with Tailwind CSS purge

### Component Optimizations
- Client components only where needed ("use client" directive)
- useEffect for side effects (scroll listener, hydration)
- Memoization-ready structure
- Lazy state updates to prevent unnecessary re-renders

### CSS Performance
- Utility-first approach reduces CSS bundle size
- Tailwind's JIT compiler generates only used styles
- OKLCH colors with fallbacks
- GPU-accelerated transitions

---

## Browser Support

- Modern browsers (last 2 versions)
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

---

## Development

### Running the Application
```bash
npm run dev     # Development server
npm run build   # Production build
npm run start   # Production server
npm run lint    # Run ESLint
```

### File Structure
```
D:\claudetest\
├── app/
│   ├── layout.tsx          # Root layout with Navbar
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles & theme
├── components/
│   ├── navbar.tsx          # Navigation component
│   ├── theme-provider.tsx  # Theme context provider
│   └── ui/                 # shadcn/ui components (54 components)
└── lib/
    └── utils.ts            # cn() utility
```

---

## Next Steps & Customization Ideas

### Branding
1. Replace "Acme" with your brand name in:
   - `components/navbar.tsx` (logo text)
   - `app/page.tsx` (footer)
   - `app/layout.tsx` (metadata)

2. Update the logo placeholder with your actual logo:
   - Currently using a simple "A" letter in a colored box
   - Replace with Next.js Image component

### Content
1. Update homepage copy to match your product
2. Customize feature cards with your actual features
3. Add real customer testimonials
4. Update stats with real metrics
5. Modify CTA text and links

### Styling
1. Customize colors in `app/globals.css`:
   - Change primary color values
   - Adjust border radius (--radius)
   - Modify spacing tokens

2. Add your brand fonts:
   - Update font imports in layout
   - Modify --font-sans and --font-mono

### Functionality
1. Add actual navigation pages (features, pricing, about, contact)
2. Implement authentication (log in, sign up)
3. Add analytics tracking
4. Implement actual demo functionality
5. Create forms for contact/signup

### Additional Sections
1. Logo cloud (companies using your product)
2. Pricing tables
3. FAQ accordion
4. Blog preview
5. Integration showcase
6. Video demo embed

---

## Component Props & Variants

### Button Variants
- `default` - Primary button (bg-primary)
- `outline` - Outlined button with border
- `ghost` - Transparent with hover effect
- `secondary` - Secondary background
- `destructive` - For dangerous actions
- `link` - Underlined text link

### Button Sizes
- `default` - h-9 (standard)
- `sm` - h-8 (small)
- `lg` - h-10 (large)
- `icon` - size-9 (square icon button)
- `icon-sm` - size-8
- `icon-lg` - size-10

### Badge Variants
- `default` - Solid background
- `secondary` - Secondary color
- `outline` - Border only
- `destructive` - Error/warning state

### Card Components
- `Card` - Container
- `CardHeader` - Top section
- `CardTitle` - Heading
- `CardDescription` - Subtitle
- `CardContent` - Main content
- `CardFooter` - Bottom section
- `CardAction` - Action area in header

---

## Tips for Maintenance

1. **Keep components modular**: Extract repeated patterns into reusable components
2. **Use cn() utility**: Always use the cn() function from lib/utils for className merging
3. **Follow naming conventions**: Use data-slot attributes for component identification
4. **Maintain accessibility**: Test with keyboard navigation and screen readers
5. **Test dark mode**: Always verify components in both light and dark themes
6. **Mobile-first**: Design for mobile, then enhance for larger screens
7. **Performance monitoring**: Use Next.js analytics to track performance metrics

---

Built with Next.js 16, React 19, Tailwind CSS 4, and shadcn/ui components.
