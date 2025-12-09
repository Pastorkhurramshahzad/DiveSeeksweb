# Quick Customization Guide

This guide shows you how to quickly customize the navbar and homepage components.

## Changing the Brand Name

### Navbar (3 locations)
**File**: `D:\claudetest\components\navbar.tsx`

```tsx
// Line 64-70: Logo section
<div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-105">
  <span className="text-lg font-bold">A</span>  {/* Change "A" */}
</div>
<span className="hidden text-xl font-bold tracking-tight sm:inline-block">
  Acme  {/* Change "Acme" */}
</span>
```

### Homepage Footer (2 locations)
**File**: `D:\claudetest\app\page.tsx`

```tsx
// Line 302-305: Footer logo
<div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
  <span className="text-sm font-bold">A</span>  {/* Change "A" */}
</div>
<span className="text-lg font-bold">Acme</span>  {/* Change "Acme" */}
```

### Page Metadata
**File**: `D:\claudetest\app\layout.tsx`

```tsx
// Line 6-9
export const metadata: Metadata = {
  title: "Acme - Build Amazing Products Faster",  // Change title
  description: "Your custom description here",     // Change description
};
```

---

## Changing Navigation Links

**File**: `D:\claudetest\components\navbar.tsx`

```tsx
// Line 20-26: Add/remove/modify links
const navLinks = [
  { href: "/", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  // Add more: { href: "/your-page", label: "Your Label" },
]
```

---

## Changing Colors

### Primary Color
**File**: `D:\claudetest\app\globals.css`

```css
/* Line 54: Light mode primary */
:root {
  --primary: oklch(0.205 0 0);  /* Black - change lightness value */
}

/* Line 88: Dark mode primary */
.dark {
  --primary: oklch(0.922 0 0);  /* White - change lightness value */
}
```

#### OKLCH Quick Reference
- First number (0-1): Lightness (0 = black, 1 = white)
- Second number (0-0.4): Chroma/saturation (0 = gray, higher = more vibrant)
- Third number (0-360): Hue (color angle: 0 = red, 120 = green, 240 = blue)

Examples:
```css
--primary: oklch(0.55 0.22 250);  /* Blue */
--primary: oklch(0.6 0.18 145);   /* Green */
--primary: oklch(0.65 0.25 28);   /* Orange */
--primary: oklch(0.5 0.25 330);   /* Purple */
```

### Border Radius
**File**: `D:\claudetest\app\globals.css`

```css
/* Line 47: Change roundness of all components */
:root {
  --radius: 0.625rem;  /* Current: 10px */
  /* --radius: 0.375rem;     6px - Less rounded */
  /* --radius: 0.5rem;       8px - Slightly rounded */
  /* --radius: 1rem;         16px - Very rounded */
  /* --radius: 1.5rem;       24px - Extremely rounded */
}
```

---

## Changing Homepage Content

### Hero Headline
**File**: `D:\claudetest\app\page.tsx`

```tsx
// Line 80-85
<h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
  Build amazing products{" "}
  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
    faster than ever
  </span>
</h1>
```

### Hero Subheadline
**File**: `D:\claudetest\app\page.tsx`

```tsx
// Line 86-90
<p className="mb-8 text-lg text-muted-foreground sm:text-xl md:text-2xl">
  The all-in-one platform to design, develop, and deploy
  applications at scale. Join thousands of developers building the
  future.
</p>
```

### CTA Button Text
**File**: `D:\claudetest\app\page.tsx`

```tsx
// Line 92-96: Primary button
<Button size="lg" asChild className="group">
  <Link href="#signup">
    Get started for free  {/* Change text */}
    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
  </Link>
</Button>

// Line 98-100: Secondary button
<Button size="lg" variant="outline" asChild>
  <Link href="#demo">Watch demo</Link>  {/* Change text */}
</Button>
```

---

## Changing Stats

**File**: `D:\claudetest\app\page.tsx`

```tsx
// Line 62-67: Modify values and labels
const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "10k+", label: "Active Users" },
  { value: "150+", label: "Countries" },
  { value: "24/7", label: "Support" },
]
```

---

## Changing Features

**File**: `D:\claudetest\app\page.tsx`

```tsx
// Line 23-60: Modify features array
const features = [
  {
    icon: Zap,  // Import icon from lucide-react
    title: "Lightning Fast",
    description: "Built with performance in mind. Experience blazing fast load times and instant interactions.",
  },
  // Add more features...
]
```

### Available Icons (import from lucide-react)
Common icons you might want:
- `Rocket` - For launch/speed
- `Lock` - For security
- `Globe` - For global/international
- `Code` - For development
- `Database` - For data
- `Cloud` - For cloud services
- `Smartphone` - For mobile
- `Layout` - For design
- `BarChart` - For analytics
- `MessageSquare` - For communication

Browse all icons: https://lucide.dev/icons/

---

## Changing Testimonial

**File**: `D:\claudetest\app\page.tsx`

```tsx
// Line 200-206: Testimonial quote and author
<blockquote className="mb-4 text-xl font-medium text-foreground sm:text-2xl">
  "This platform has completely transformed how we build and ship
  products. Our team's productivity has increased by 300%."
</blockquote>
<div className="text-muted-foreground">
  <p className="font-semibold text-foreground">Sarah Johnson</p>
  <p className="text-sm">CTO, TechCorp Inc.</p>
</div>
```

---

## Changing Footer Links

**File**: `D:\claudetest\app\page.tsx`

```tsx
// Line 312-330: Product section (example)
<div>
  <h3 className="mb-4 text-sm font-semibold">Product</h3>
  <ul className="space-y-2 text-sm text-muted-foreground">
    <li>
      <Link href="#features" className="hover:text-foreground">
        Features
      </Link>
    </li>
    {/* Add more links */}
  </ul>
</div>
```

---

## Adding New Sections

### Template for New Section

```tsx
<section className="px-4 py-20 sm:px-6 lg:px-8 border-b">
  <div className="container mx-auto">
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <Badge variant="outline" className="mb-4">
        Section Label
      </Badge>
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Section Title
      </h2>
      <p className="text-lg text-muted-foreground">
        Section description
      </p>
    </div>

    {/* Your section content here */}

  </div>
</section>
```

---

## Responsive Design Classes

### Common Breakpoint Pattern
```tsx
className="
  text-sm          {/* Mobile: small text */}
  sm:text-base     {/* Small tablet: base text */}
  md:text-lg       {/* Tablet: large text */}
  lg:text-xl       {/* Desktop: extra large text */}
"
```

### Grid Layouts
```tsx
{/* 1 column mobile, 2 on tablet, 3 on desktop */}
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

{/* 2 columns mobile, 4 on tablet+ */}
<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
```

### Spacing
```tsx
{/* Padding: mobile 16px, desktop 32px */}
<div className="px-4 py-8 lg:px-8 lg:py-16">

{/* Gap: mobile 16px, desktop 24px */}
<div className="flex flex-col gap-4 lg:gap-6">
```

---

## Dark Mode Testing

### Test Your Changes
1. Click the moon/sun icon in the navbar to toggle themes
2. Verify all colors have good contrast in both modes
3. Check that hover states work in both modes

### Adding Dark Mode Variants
```tsx
className="
  bg-white           {/* Light mode */}
  dark:bg-black      {/* Dark mode */}
  text-gray-900      {/* Light mode text */}
  dark:text-gray-100 {/* Dark mode text */}
"
```

---

## Common Customization Patterns

### Adding Hover Effects
```tsx
className="
  transition-all          {/* Smooth transitions */}
  hover:scale-105         {/* Grow on hover */}
  hover:shadow-md         {/* Add shadow on hover */}
  group-hover:translate-x-1  {/* Move inside group */}
"
```

### Adding Focus States
```tsx
className="
  focus:outline-none       {/* Remove default outline */}
  focus:ring-2             {/* Add ring */}
  focus:ring-primary       {/* Primary color ring */}
  focus:ring-offset-2      {/* Space from element */}
"
```

### Gradient Text
```tsx
<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
  Your gradient text
</span>
```

### Gradient Backgrounds
```tsx
className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"
```

---

## Need More Help?

- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **shadcn/ui Components**: https://ui.shadcn.com/
- **Lucide Icons**: https://lucide.dev/icons/
- **Next.js Docs**: https://nextjs.org/docs
- **OKLCH Color Picker**: https://oklch.com/

---

## Pro Tips

1. **Make Small Changes**: Test one change at a time to see the effect
2. **Use Dev Server**: Run `npm run dev` to see changes in real-time
3. **Check Both Themes**: Always test in light and dark mode
4. **Mobile First**: Check mobile view first, then desktop
5. **Use Browser DevTools**: Inspect elements to see what classes are applied
6. **Copy Patterns**: Copy existing component patterns when adding new sections
7. **Keep Consistency**: Use the same spacing, colors, and sizing patterns throughout

---

Happy customizing! Your components are production-ready and built with modern best practices.
