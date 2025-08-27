# Overview

This is a React-based digital agency website for Devsera, built with a full-stack architecture using Express.js backend and React frontend. The application serves as a marketing website showcasing the agency's services, projects, team, and technology stack, with a contact form functionality for lead generation.

The project emphasizes a warm, minimalist design system with organic sophistication, featuring custom color palettes (terracotta, sage, amber) and modern UI components. The application is designed to help startups and businesses understand the agency's capabilities and initiate contact for potential projects.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing without the overhead of React Router
- **Styling**: Tailwind CSS with custom design tokens and shadcn/ui component library for consistent, accessible UI components
- **Animations**: Framer Motion for smooth page transitions and scroll-based animations, plus custom GSAP integration for advanced effects
- **State Management**: TanStack Query (React Query) for server state management and API data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript throughout the entire stack for consistency and type safety
- **API Design**: RESTful architecture with specific endpoints for contact form submissions and data retrieval
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Development Tools**: Custom request logging middleware for API monitoring and debugging

## Data Storage Solutions
- **Database**: PostgreSQL as the primary database (configured via Drizzle)
- **ORM**: Drizzle ORM for type-safe database interactions and schema management
- **Migrations**: Drizzle Kit for database schema versioning and migrations
- **Development Storage**: In-memory storage implementation for development and testing purposes
- **Schema**: Defined shared schema for Users and Contacts with proper TypeScript type inference

## Design System & UI Architecture
- **Component Library**: shadcn/ui for accessible, customizable UI components
- **Design Tokens**: Custom CSS variables for consistent theming (warm-bg, terracotta, sage, amber, premium colors)
- **Typography**: Custom font hierarchy with DM Sans and other Google Fonts
- **Responsive Design**: Mobile-first approach with custom breakpoints and mobile menu implementation
- **Animation System**: Intersection Observer API for scroll-triggered animations with smooth performance

## Content Management
- **Static Data**: Structured data files for projects, team members, and testimonials stored as TypeScript modules
- **Assets**: Integrated asset management through Vite with path aliasing
- **SEO**: Semantic HTML structure with proper meta tags and accessibility considerations

## Development & Build Tools
- **Build System**: Vite for fast development and optimized production builds
- **Bundling**: ESBuild for server-side code bundling with external package handling
- **Development**: Hot Module Replacement (HMR) for rapid development cycles
- **Type Checking**: Strict TypeScript configuration across client, server, and shared modules

# External Dependencies

## Database & Cloud Services
- **Database Provider**: Neon (PostgreSQL-compatible serverless database)
- **Database Connection**: `@neondatabase/serverless` for optimized serverless database connections

## UI & Design Libraries
- **Component Framework**: Radix UI primitives for accessible, unstyled components
- **Styling Framework**: Tailwind CSS for utility-first styling approach
- **Icon Library**: Lucide React for consistent, lightweight SVG icons
- **Animation Libraries**: Framer Motion for React animations and GSAP for advanced scroll effects

## Development & Build Tools
- **Package Manager**: npm with lockfile for consistent dependency resolution
- **Development Server**: Vite with React plugin for fast development experience
- **Code Quality**: TypeScript strict mode for compile-time error prevention
- **Asset Processing**: PostCSS with Autoprefixer for CSS vendor prefixes

## Form & Validation
- **Form Library**: React Hook Form for performant, uncontrolled forms
- **Validation**: Zod for runtime type validation and schema definition
- **Form Resolvers**: Hookform/resolvers for integration between React Hook Form and Zod

## Fonts & External Resources
- **Typography**: Google Fonts integration (DM Sans, Architects Daughter, Fira Code, Geist Mono)
- **Performance**: Font preloading and optimization for improved loading times

## Development Platform Integration
- **Replit Integration**: Specialized plugins for Replit development environment
- **Error Handling**: Runtime error modal overlay for development debugging
- **Development Banner**: Replit development environment indicators