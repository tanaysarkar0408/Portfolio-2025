# Portfolio Website - Tanay Sarkar

## Overview

A modern, responsive personal portfolio website built with **React** and **TypeScript**. This is a client-side only application that showcases professional experience, skills, and includes a contact form powered by **Formspree** for easy communication.

## 🚀 Key Features

- **Modern UI/UX** with responsive design
- **Light/Dark Mode** with system preference detection
- **Performance Optimized** with Vite and code splitting
- **Contact Form** with Formspree integration (no backend required)
- **SEO Optimized** with proper meta tags and semantic HTML
- **Accessibility** focused with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript  
- **Styling**: Tailwind CSS with shadcn/ui component library  
- **Form Handling**: React Hook Form with Formspree
- **Animations**: Framer Motion for smooth transitions
- **Build Tool**: Vite  
- **Hosting**: Vercel (recommended)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tanaysarkar0408/portfolio-2025.git
   cd portfolio-2025
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory and add your Formspree form ID:
   ```
   VITE_FORMSPREE_ID=your-form-id
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository
2. Sign in to [Vercel](https://vercel.com) with your GitHub account
3. Click "New Project" and import your repository
4. Add your environment variables in the Vercel dashboard
5. Deploy!

Your site will be live at `https://your-project.vercel.app`

### Formspree Setup

1. Sign up for a free account at [Formspree](https://formspree.io/)
2. Create a new form and get your form ID
3. Add the form ID to your environment variables
4. The contact form will now submit to your Formspree endpoint

## 📁 Project Structure

```
portfolio-2025/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable UI components
│   ├── lib/          # Utility functions and configurations
│   ├── pages/        # Page components
│   ├── App.tsx       # Main App component
│   └── main.tsx      # Entry point
├── .env              # Environment variables
├── index.html        # HTML template
├── package.json      # Project dependencies
├── postcss.config.cjs # PostCSS configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json     # TypeScript configuration
```

## 🎨 Customization

1. Update the content in the respective component files
2. Modify the color scheme in `tailwind.config.ts`
3. Update the `index.html` with your personal information and meta tags

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Vite](https://vitejs.dev/) for the build tooling
- [Formspree](https://formspree.io/) for form handling

---

👨‍💻 **Happy Coding!**
