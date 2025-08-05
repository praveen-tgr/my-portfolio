# Personal Portfolio Web Application

## Overview

This is a modern, responsive personal portfolio website built for Praveen V, a Front-End Developer. The application showcases professional experience, skills, projects, and contact information through a single-page design with smooth scrolling navigation. The portfolio is built with React.js and features a comprehensive UI component library using Radix UI and Tailwind CSS for styling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React.js with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with a single portfolio page and 404 fallback
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Component Library**: Extensive use of Radix UI primitives wrapped in custom components for accessibility and consistency
- **Build Tool**: Vite for fast development and optimized production builds

### Component Structure
- **Shadcn/ui Design System**: Pre-built, accessible UI components based on Radix UI primitives
- **Section-based Layout**: Modular components for each portfolio section (Hero, About, Skills, Projects, Experience, Contact)
- **Responsive Design**: Mobile-first approach with breakpoint-based styling using Tailwind CSS

### State Management
- **React Query**: TanStack Query for server state management and caching
- **Local State**: React hooks for component-level state management
- **Form Handling**: React Hook Form with Zod validation for contact forms

### Backend Architecture
- **Framework**: Express.js server with TypeScript
- **Development Setup**: Vite middleware integration for hot module replacement during development
- **Static Serving**: Production build serving with proper asset handling
- **API Structure**: RESTful API design with `/api` prefix for backend routes

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: User management schema with username/password authentication structure
- **Development Storage**: In-memory storage implementation for development and testing
- **Migrations**: Drizzle-kit for database schema management and migrations

### Development Workflow
- **TypeScript**: Full-stack TypeScript implementation with strict type checking
- **Hot Reload**: Vite development server with React Fast Refresh
- **Path Aliases**: Configured import aliases for clean imports (`@/`, `@shared/`, `@assets/`)
- **Error Handling**: Runtime error overlay for development debugging

### Deployment Architecture
- **Build Process**: Vite builds the frontend, esbuild bundles the backend
- **Asset Management**: Static assets served from `/dist/public` in production
- **Environment Configuration**: Environment-based configuration for database and deployment settings

## External Dependencies

### UI and Styling
- **Radix UI**: Complete set of accessible UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for creating component variants
- **clsx & tailwind-merge**: Class name management utilities

### State Management and Data Fetching
- **TanStack React Query**: Server state management with caching and synchronization
- **React Hook Form**: Form state management with validation
- **Hookform Resolvers**: Integration layer for form validation libraries

### Database and Backend
- **Neon Database**: Serverless PostgreSQL database service via `@neondatabase/serverless`
- **Drizzle ORM**: Type-safe ORM with schema definition and query building
- **Drizzle Zod**: Schema validation integration between Drizzle and Zod
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Development and Build Tools
- **Vite**: Frontend build tool and development server
- **esbuild**: Fast JavaScript bundler for backend code
- **tsx**: TypeScript execution environment for development
- **Replit Integration**: Development environment plugins for Replit platform

### Utilities and Libraries
- **date-fns**: Date manipulation and formatting library
- **nanoid**: Unique ID generation
- **wouter**: Lightweight routing library for React
- **Zod**: Runtime type validation and schema definition