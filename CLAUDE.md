# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application with React 19 using the App Router, configured with shadcn/ui components, Tailwind CSS 4, and the React Compiler for optimized performance.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture

### Tech Stack

- **Framework**: Next.js 16.0.8 with App Router
- **React**: React 19.2.1 with React Compiler enabled (`babel-plugin-react-compiler`)
- **Styling**: Tailwind CSS 4 with OKLCH color space
- **UI Components**: shadcn/ui (New York style) with 54+ Radix UI components
- **Theme**: next-themes with dark mode support
- **Forms**: React Hook Form + Zod for validation
- **Icons**: Lucide React

### Project Structure

```
app/                    # Next.js App Router pages and layouts
├── layout.tsx          # Root layout with ThemeProvider
├── page.tsx            # Homepage
└── globals.css         # Tailwind config + CSS variables

components/
├── ui/                 # shadcn/ui primitive components (54 components)
└── theme-provider.tsx  # next-themes wrapper component

lib/
└── utils.ts            # Utility functions (cn for class merging)

hooks/
└── use-mobile.ts       # Custom React hooks
```

### Import Aliases

The project uses TypeScript path aliases configured in `tsconfig.json`:

```typescript
"@/*"           // Root directory
"@/components"  // components/
"@/lib"         // lib/
"@/hooks"       // hooks/
```

### Theming System

- **Color System**: Uses OKLCH color space for better perceptual uniformity
- **CSS Variables**: Defined in `app/globals.css` with light/dark mode variants
- **Theme Provider**: Configured in root layout with system preference support
- **Customization**: Modify CSS variables in `:root` and `.dark` selectors

### Component Architecture

1. **shadcn/ui Components** (`components/ui/`): Pre-built Radix UI primitives with Tailwind styling
   - Installed via shadcn CLI with "New York" style
   - Use `cn()` utility from `@/lib/utils` for conditional classes

2. **Custom Components**: Build on top of ui components
   - Import primitives from `@/components/ui`
   - Compose into domain-specific components

3. **Client Components**: Use `"use client"` directive when needed
   - Required for hooks, event handlers, browser APIs
   - ThemeProvider is already a client component

### React Compiler

React Compiler is enabled in `next.config.ts` for automatic memoization and optimization. This means:
- No manual `useMemo`/`useCallback` needed in most cases
- Components are automatically optimized
- Follow React best practices; compiler handles performance

### Form Handling

Use React Hook Form + Zod pattern:

```typescript
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const schema = z.object({ /* ... */ })
const form = useForm({ resolver: zodResolver(schema) })
```

Form components from shadcn/ui handle integration automatically.

### Styling Conventions

- **Tailwind 4**: Uses `@import` syntax, inline theme configuration
- **Custom Variants**: `@custom-variant dark (&:is(.dark *))` for dark mode
- **Animations**: `tw-animate-css` plugin for additional animations
- **Class Merging**: Always use `cn()` from `@/lib/utils` for conditional classes

### Available shadcn/ui Components

The project has 54 pre-installed UI components including:
- Layout: Card, Separator, Tabs, Accordion, Collapsible, Resizable, Sidebar
- Forms: Input, Textarea, Select, Checkbox, Radio Group, Switch, Slider, Calendar, Command, Input OTP
- Feedback: Alert, Toast (Sonner), Progress, Skeleton, Spinner, Badge, Empty
- Overlays: Dialog, Sheet, Drawer, Popover, Hover Card, Tooltip, Alert Dialog
- Navigation: Breadcrumb, Navigation Menu, Menubar, Pagination
- Data: Table, Chart (Recharts)
- Interactive: Button, Button Group, Toggle, Toggle Group, Dropdown Menu, Context Menu, Carousel, Scroll Area
- Utilities: Avatar, Aspect Ratio, KBD, Label, Field, Item, Input Group, Form

Refer to `components/ui/` for component source or [shadcn/ui docs](https://ui.shadcn.com) for usage.

## Key Configuration Files

- `next.config.ts`: React Compiler enabled
- `components.json`: shadcn/ui configuration (New York style, RSC mode, Lucide icons)
- `app/globals.css`: Tailwind 4 + theme CSS variables (OKLCH color space)
- `tsconfig.json`: Path aliases and strict mode enabled
