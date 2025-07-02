# Portfolio Website - Tanay Sarkar

## Overview

This is a modern personal portfolio website. The application is a full-stack web solution featuring a **React frontend** with a **Node.js/Express backend**, designed to showcase professional experience, skills, and provide a contact mechanism for potential opportunities.

---

## System Architecture

### Frontend Architecture

- **Framework**: React 18 with TypeScript  
- **Routing**: Wouter for client-side routing  
- **Styling**: Tailwind CSS with shadcn/ui component library  
- **State Management**: TanStack Query (React Query)  
- **Theme System**: Custom theme provider supporting light/dark modes  
- **Build Tool**: Vite  

### Backend Architecture

- **Runtime**: Node.js with Express framework  
- **Language**: TypeScript  
- **API Design**: RESTful API endpoints  
- **Development Server**: Custom Vite integration with HMR support  
- **Request Logging**: Built-in middleware for API request/response logging  

---

## Data Storage Solutions

- **Primary Database**: PostgreSQL (via Neon Database - serverless)
- **ORM**: Drizzle ORM with type-safe operations  
- **Schema Management**: Centralized schema using Zod validation  
- **Dev Fallback**: In-memory storage for testing/development  

---

## Key Components

### Frontend Components

- **Navigation**: Fixed header with smooth scrolling  
- **Hero Section**: Professional introduction  
- **About Section**: Background and summary  
- **Skills Section**: Tech stack with progress indicators  
- **Projects Section**: Project showcase  
- **Experience Section**: Timeline of roles and achievements  
- **Contact Section**: Form with backend integration  
- **Footer**: Social links and navigation  

### Backend Components

- **Contact API**: Handles form data with validation  
- **Storage Layer**: Abstracted implementation  
- **Error Handling**: Centralized middleware  
- **Dev Tools**: Hot reload and error overlay  

---

## UI Component System

- **Component Library**: shadcn/ui (built on Radix UI)  
- **Responsive Design**: Mobile-first with breakpoints  
- **Accessibility**: ARIA-compliant, keyboard-friendly  
- **Animation**: Smooth transitions and micro-interactions  

---

## Data Flow

1. **Client Interaction**: UI triggers state updates  
2. **API Communication**: Managed by TanStack Query  
3. **Server Processing**: Express routes handle requests  
4. **Data Persistence**: Stored via Drizzle ORM  
5. **Response Delivery**: JSON with error handling  
6. **UI Updates**: React components re-render  

---

## External Dependencies

### Production Dependencies

- `@neondatabase/serverless`: PostgreSQL client  
- `@radix-ui/*`: Headless UI components  
- `@tanstack/react-query`: State management  
- `drizzle-orm`: ORM for PostgreSQL  
- `tailwindcss`: CSS utility framework  
- `wouter`: Minimalist router  

### Development Dependencies

- `@replit/vite-plugin-*`: Dev tools for Replit  
- `drizzle-kit`: Schema management  
- `tsx`: Dev execution  
- `vite`: Build tool  

---

## Deployment Strategy

### Build Process

- **Frontend**: Vite compiles to static assets  
- **Backend**: esbuild bundles server code  
- **Asset Optimization**: Code splitting and minification  
- **Type Checking**: Full TypeScript validation  

### Production Configuration

- **Server**: Express serves frontend and API  
- **Database**: Connected via environment vars  
- **Environment**: Optimized for production  

### Development Environment

- **Hot Reload**: Vite HMR  
- **API Proxy**: Local development proxy  
- **Error Handling**: Dev overlays and logs  

---
