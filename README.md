# SalesFam Frontend

SalesFam is a Next.js frontend for a sales-focused product experience. The current application includes a marketing landing page, login flow, and dashboard route.

## Tech Stack

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Biome](https://biomejs.dev/) for formatting and linting

## Requirements

- Node.js 20 or newer
- npm

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - start the local development server
- `npm run build` - create a production build
- `npm run start` - serve the production build
- `npm run lint` - check the project with Biome
- `npm run lint:fix` - automatically apply Biome fixes
- `npm run lint:ci` - run Biome in CI mode

## Routes

- `/` - SalesFam landing page
- `/login` - login page
- `/dashboard` - dashboard page

## Project Structure

- `app/` - App Router pages, layouts, and global styles
- `components/layouts/` - shared header and footer components
- `components/sections/` - landing page sections
- `components/pages/` - page-level components such as the login form
- `components/ui/` - reusable UI primitives
- `lib/` - shared utilities
- `public/images/` - static image assets

## Deployment

Build the application before deploying:

```bash
npm run build
```

The application can be deployed to any platform that supports Next.js, including [Vercel](https://vercel.com/).
