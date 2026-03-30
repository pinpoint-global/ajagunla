# Senator Olubiyi Fadeyi-Ajagunla Official Website

Official portfolio website for Senator Olubiyi Fadeyi-Ajagunla, representing Osun Central Senatorial District in the 10th National Assembly of Nigeria.

## 📋 Project Overview

This is a modern, full-stack web application showcasing the senator's legislative work, community engagement initiatives, educational background, and business achievements. The platform serves as a comprehensive resource for constituents, media, and stakeholders to learn about the senator's service and impact.

### Key Features

- **Legislative Work Showcase**: Detailed view of senate committee positions, sponsored projects, and legislative impact
- **Community Engagement**: Information about the Ajagunla Foundation and community initiatives
- **Biography & Background**: Comprehensive profile including education, business leadership, and awards
- **Contact & Communication**: Contact forms and office information for constituent services
- **Responsive Design**: Fully responsive design optimized for all devices
- **SEO Optimized**: Built with Next.js for optimal SEO and performance

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.5.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **State Management**: Zustand
- **Animations**: Motion (Framer Motion)
- **Form Validation**: Zod
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js (Next.js API Routes)
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (Access & Refresh Tokens)
- **Email**: Nodemailer with HTML templates
- **Validation**: Zod schema validation
- **File Upload**: Formidable/Multer

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint
- **Formatting**: Prettier
- **Build Tool**: Turbopack

## Monorepo layout

- `apps/web` — Next.js public site (`ajagunla-web`)
- `apps/cms` — Strapi 5 CMS (`ajagunla-cms`)
- `packages/shared` — shared types and Lucide icon registry (`@ajagunla/shared`)

Root scripts: `npm run dev:web`, `npm run dev:cms`, `npm run build:web`, `npm run build:cms`.

Docker (Coolify): build from repo root using [`Dockerfile.web`](Dockerfile.web) and [`Dockerfile.cms`](Dockerfile.cms). See [`docs/COOLIFY.md`](docs/COOLIFY.md).

**CMS integration:** legislative/community listing and detail pages now read from Strapi collections. Set `NEXT_PUBLIC_STRAPI_URL` and provide `STRAPI_API_TOKEN` if your public role does not have read permissions.

**Contact submissions:** the contact form sends email via the Next API route and also persists each submission to Strapi (`contact-submission`). Set `STRAPI_WRITE_API_TOKEN` in `apps/web/.env.local` to allow server-side create calls.

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- MongoDB database (local or cloud) for Next.js API routes / admin features
- npm 10+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ajagunla
```

2. Install dependencies (from the **repository root**):
```bash
npm install
```

3. Set up environment variables:
Create `apps/web/.env.local` (see [`apps/web/.env.example`](apps/web/.env.example)) and `apps/cms/.env` from [`apps/cms/.env.example`](apps/cms/.env.example).

For a first-time CMS database with seed content, set `STRAPI_SEED=true` in `apps/cms/.env` before starting Strapi once.

The following variables apply to the **legacy** single-app layout; for the web app, prefer `apps/web/.env.local`:

```env
# Application
APP_NAME=Ajagunla
APP_URL=http://localhost:3000
NODE_ENV=development

# Database
DB_URL=mongodb://localhost:27017/ajagunla
# or for MongoDB Atlas:
# DB_URL=mongodb+srv://username:password@cluster.mongodb.net/ajagunla

# JWT Authentication
ACCESS_TOKEN_SECRET=your-access-token-secret
ACCESS_TOKEN_EXPIRES_IN=15m
REFRESH_TOKEN_SECRET=your-refresh-token-secret
REFRESH_TOKEN_EXPIRES_IN=7d

# Cookie Settings
ACCESS_COOKIE_EXPIRES_IN=900000
REFRESH_COOKIE_EXPIRES_IN=604800000

# Email Configuration (Nodemailer)
FROM_EMAIL=your-email@example.com
TO_EMAIL=recipient@example.com
MAIL_HOST=smtp.example.com
MAIL_PORT=465
MAIL_PASSWORD=your-email-password

# Production URL (if applicable)
live_url=https://ajagunla1.com
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
ajagunla/
├── app/                          # Next.js App Router
│   ├── _server/                  # Backend server code
│   │   ├── controllers/          # API route controllers
│   │   ├── lib/                  # Server utilities & config
│   │   ├── middlewares/          # Request middleware
│   │   └── models/               # MongoDB Mongoose models
│   ├── api/                      # API route handlers
│   ├── about/                    # About page
│   ├── community-engagement/     # Community engagement page
│   ├── contact/                  # Contact page
│   ├── legislative-work/         # Legislative work page
│   └── page.tsx                  # Home page
├── components/                   # React components
│   ├── atoms/                    # Basic UI components
│   ├── forms/                   # Form components
│   ├── icons/                   # SVG icon components
│   ├── layout/                  # Layout components (Header, Footer)
│   ├── sections/                # Page section components
│   └── ui/                      # shadcn/ui components
├── lib/                         # Shared utilities
│   ├── constants/              # Static data & text content
│   ├── hooks/                  # Custom React hooks
│   ├── store/                  # Zustand state stores
│   └── utils/                  # Helper functions
├── public/                     # Static assets
│   ├── images/                # Image files
│   ├── icons/                 # SVG icons
│   └── fonts/                 # Custom fonts
└── roadmap.md                  # Project roadmap (see below)
```

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run checks` - Run lint, format check, and build
- `npm run generate:icons` - Generate icon components from SVG files

## 🗺️ Project Roadmap

For detailed development progress, completed features, and upcoming tasks, see [ROADMAP.md](./roadmap.md).

## 🚢 Deployment

The project is configured for deployment on platforms like Vercel, Netlify, or any Node.js hosting service.

### Environment Variables for Production

Ensure all environment variables are set in your hosting platform's environment settings.

### Build for Production

```bash
npm run build
npm start
```

### Deployment Considerations

- Set up MongoDB Atlas or similar cloud database
- Configure email service (SMTP) credentials
- Set production URLs in environment variables
- Ensure HTTPS is enabled (redirects are configured in `next.config.ts`)
- Configure CDN for static assets (images are hosted on `static.pinpoint.ng` and `static.ajagunla1.com`)

## 🔐 Security Notes

- Never commit `.env` files or sensitive credentials
- Use strong, unique secrets for JWT tokens
- Keep dependencies up to date for security patches
- Validate all user inputs (implemented via Zod schemas)
- Use HTTPS in production (configured in `next.config.ts`)

## 🤝 Contributing

This is a private project. For any contributions or issues, please contact the project maintainers.

## 📄 License

Private project - All rights reserved.

## 👥 Credits

- **Client**: Senator Olubiyi Fadeyi-Ajagunla
- **Developer**: Edward-Precious Omegbu
- **Publisher**: Pinpoint Global Limited

---

For more information about the senator, visit the website or contact the constituency office.
