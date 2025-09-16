# Founder Workspace - Professional Software Product Showcase

## Overview

Founder Workspace is a comprehensive multi-page professional software product showcase website featuring CRM, ERP, and Billing software solutions. The application serves as a B2B marketing platform designed to attract enterprise customers through professional presentation, lead generation forms, and appointment booking systems. Built with modern web technologies, it emphasizes clean design, user experience, and conversion optimization for software sales.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and component-based development
- **Routing**: Wouter for lightweight client-side routing with pages for Home, CRM, ERP, Billing, FAQ, Contact, and booking flows
- **Styling**: Tailwind CSS with custom design system following enterprise software aesthetics (inspired by Salesforce, HubSpot, Notion)
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible interface elements
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Type System**: TypeScript throughout the entire stack for consistency
- **Data Storage**: Currently using in-memory storage with interface designed for database migration
- **Database ORM**: Drizzle ORM configured for PostgreSQL (ready for database integration)
- **API Design**: RESTful API structure with /api prefix routing

### Component Design System
- **Design Tokens**: Professional color palette with primary blue (216 100% 50%) and supporting colors
- **Typography**: Inter font family for modern, clean appearance
- **Layout System**: Responsive grid layouts with Tailwind spacing primitives
- **Animation**: CSS animations for hero cards, buttons, and interactive elements
- **Theme Support**: Dark/light mode toggle with CSS custom properties

### Application Structure
- **Landing Experience**: Hero section with animated product cards (CRM, ERP, Billing) and compelling CTAs
- **Product Pages**: Individual showcase pages for each software solution with detailed features and benefits
- **Lead Generation**: Contact forms and demo booking systems for customer acquisition
- **Professional Aesthetics**: Enterprise-focused design with gradients, professional imagery, and trust signals

### Development Workflow
- **Module Resolution**: Path aliases for clean imports (@/, @shared/, @assets/)
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Hot Reload**: Vite HMR for rapid development iterations
- **Asset Management**: Static asset handling with proper optimization

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with resolvers for form handling
- **UI Component Library**: Complete Radix UI suite (accordion, dialog, dropdown, navigation, etc.)
- **Styling**: Tailwind CSS with PostCSS for advanced CSS processing
- **Icons**: Lucide React for consistent iconography throughout the application

### Database & Data Management
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Database Provider**: Neon Database serverless PostgreSQL configured for production scaling
- **Validation**: Zod schema validation integrated with Drizzle for runtime type safety
- **Migrations**: Drizzle Kit for database schema management and migrations

### Development Tools
- **Build System**: Vite with React plugin and error overlay for enhanced development experience
- **Session Management**: connect-pg-simple for PostgreSQL session storage (prepared for user authentication)
- **Date Handling**: date-fns library for robust date manipulation and formatting
- **Utility Libraries**: clsx and class-variance-authority for conditional styling, embla-carousel for image carousels

### Production Services
- **Database**: PostgreSQL via Neon Database serverless platform
- **Environment**: Configured for Replit deployment with development banner integration
- **Performance**: Image optimization and lazy loading strategies for production builds