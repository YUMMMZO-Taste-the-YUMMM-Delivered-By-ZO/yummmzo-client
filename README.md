# YUMMMZO — Food Delivery Platform

A full-featured food delivery web application built with React, TypeScript, and Vite. Discover local restaurants, browse menus, manage your cart, and track orders in real time.

**Live App:** [https://www.yummmzo.com](https://www.yummmzo.com)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)

---

## Overview

YUMMMZO is a modern, mobile-first food delivery SPA (Single Page Application). Users can browse restaurants near them using geolocation, search and filter by cuisine or rating, add items to their cart, checkout with multiple address and payment options, and track their orders live.

---

## Tech Stack

### Core

| Technology | Version | Purpose |
|---|---|---|
| React | 18.3.1 | UI library |
| TypeScript | 5.9.3 | Type safety |
| Vite + SWC | 5.4.21 | Build tool with fast HMR |
| React Router DOM | 6.30.2 | Client-side routing |

### UI & Styling

| Technology | Purpose |
|---|---|
| Tailwind CSS | Utility-first styling |
| Radix UI | Accessible UI primitives |
| shadcn/ui | Pre-built component system |
| Framer Motion | Animations |
| Lucide React | Icon library |
| Embla Carousel | Carousel/slider |
| Recharts | Data charts |
| Sonner | Toast notifications |
| next-themes | Dark/light theme switching |

### State Management & Data Fetching

| Technology | Purpose |
|---|---|
| Redux Toolkit | Global client state |
| Redux Persist | Persist auth + location state to localStorage |
| TanStack React Query | Server state, caching, background sync |

### Forms & Validation

| Technology | Purpose |
|---|---|
| React Hook Form | Form state management |
| Zod | Schema validation |
| @hookform/resolvers | Zod integration with React Hook Form |

### HTTP & Utilities

| Technology | Purpose |
|---|---|
| Axios | HTTP client with credential support |
| date-fns | Date formatting |
| Input OTP | OTP input for email verification |
| React Day Picker | Date picker |
| CLSX + Tailwind Merge | Conditional class utilities |

---

## Features

### Authentication
- Sign up with name, email, phone, and password
- Email verification via OTP token
- Login / logout
- Forgot password and reset password flow
- Protected routes with role-based access (`CUSTOMER`)

### Restaurant Discovery
- Browse restaurants by current geolocation (LocationIQ API)
- Search by restaurant name or cuisine
- Filter by: cuisine type, rating, price range, delivery time, free delivery
- Sort by: distance, rating, delivery time
- Top picks and promotional carousel on home screen

### Ordering
- View restaurant detail page with full menu
- Add / update / remove items from cart
- Apply coupon codes for discounts
- Checkout with saved or new delivery address
- Choose between Cash on Delivery and online payment
- Add delivery instructions per order

### Order Management
- Real-time order status tracking
- View active orders with live status updates
- Full order history with filtering
- Per-order detail view with item breakdown

### User Account
- View and manage profile information
- Address book — create, update, delete delivery addresses
- Save favourite restaurants
- App settings and preferences
- Dark / light theme toggle

### Help & Info
- Help & Support page with FAQ
- About page

---

## Project Structure

```
yummmzo-client/
├── src/
│   ├── components/         # Feature and UI components (166 files across 26 directories)
│   │   ├── ui/             # Base shadcn/Radix UI components (34 components)
│   │   ├── home/           # Home page components (search bar, carousel, restaurant cards)
│   │   ├── landing/        # Landing page sections (hero, features, CTA)
│   │   ├── checkout/       # Checkout flow (address, payment, order summary)
│   │   ├── cart/           # Cart item display and controls
│   │   ├── restaurant-detail/  # Restaurant menu and item view
│   │   ├── order-details/  # Order detail view
│   │   ├── order-history/  # Order history list
│   │   ├── active-orders/  # Live active orders
│   │   ├── track-order/    # Order tracking
│   │   ├── profile/        # User profile
│   │   ├── manage-addresses/   # Address CRUD
│   │   ├── favorites/      # Saved restaurants
│   │   ├── settings/       # App settings
│   │   ├── help-support/   # Help & FAQ
│   │   ├── about/          # About page
│   │   ├── write-review/   # Review composition
│   │   ├── search-results/ # Search results display
│   │   ├── modals/         # Modal dialogs
│   │   ├── cards/          # Shared card components
│   │   ├── common/         # PublicRoute, ProtectedRoute
│   │   └── layout/         # Navbar, Footer, BottomNav
│   ├── pages/              # 22 page-level components
│   ├── services/           # 8 Axios API service modules
│   ├── store/              # Redux store, slices, persist config
│   │   └── slices/
│   │       ├── authSlice.ts
│   │       ├── userLocationSlice.ts
│   │       └── addressSlice.ts
│   ├── hooks/              # 5 custom React hooks
│   ├── contexts/           # ThemeContext (dark/light mode)
│   ├── types/              # 21 TypeScript type definition files
│   ├── config/             # API endpoint configuration
│   ├── utils/              # Navigation link utility
│   ├── helpers/            # Geolocation helper
│   ├── lib/                # Shared utilities (cn, etc.)
│   ├── data/               # Mock/seed data
│   └── App.tsx             # Root component with all routes
├── public/
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json             # Vercel deployment config
└── package.json
```

---

## Pages & Routes

| Route | Page | Access |
|---|---|---|
| `/` | Landing | Public |
| `/verify-email` | Email Verification | Public |
| `/reset-password` | Reset Password | Public |
| `/home` | Home (restaurant listing) | Protected |
| `/restaurant/:id` | Restaurant Detail | Protected |
| `/cart` | Cart | Protected |
| `/checkout` | Checkout | Protected |
| `/order/success/:orderId` | Order Success | Protected |
| `/orders/active` | Active Orders | Protected |
| `/orders/history` | Order History | Protected |
| `/order/:orderId` | Order Details | Protected |
| `/track/:orderId` | Track Order | Protected |
| `/profile` | User Profile | Protected |
| `/profile/addresses` | Manage Addresses | Protected |
| `/favorites` | Favourites | Protected |
| `/settings` | Settings | Protected |
| `/help` | Help & Support | Protected |
| `/about` | About | Protected |
| `/search` | Search Results | Protected |
| `*` | 404 Not Found | Public |

---

## State Management

### Redux (Client State — persisted)

| Slice | Persisted | Stores |
|---|---|---|
| `authSlice` | Yes | `user`, `isAuthenticated` |
| `userLocationSlice` | Yes | `latitude`, `longitude` |
| `addressSlice` | No | selected address for checkout |

### React Query (Server State — cached)

Manages all remote data with a 5-minute stale time:

- `cart` — Cart items and mutations
- `orders` — Order list by status (active / history)
- `order/:id` — Single order details
- `restaurants` — Restaurant list with filters
- `cuisines` — Cuisine filter options
- `favourites` — User's saved restaurants
- `addresses` — Delivery addresses

---

## API Integration

**Base URL:** `VITE_API_URL` (e.g. `https://api.yummmzo.com`)

All requests use Axios with `withCredentials: true` for cookie-based sessions.

| Service Module | Endpoints |
|---|---|
| `auth.services.ts` | `/api/v1/auth/*` — register, login, verify, forgot/reset password, logout |
| `restaurant.services.ts` | `/api/v1/restaurant/*` — list, top picks, cuisines |
| `cart.services.ts` | `/api/v1/cart/*` — get, add, update, clear |
| `order.services.ts` | `/api/v1/order/*` — create, list by status, get by ID |
| `address.services.ts` | `/api/v1/address/*` — CRUD |
| `favourites.services.ts` | `/api/v1/favourites/*` — add, remove, list |
| `coupon.services.ts` | `/api/v1/coupon/*` — validate and apply |
| `currentLocation.services.ts` | LocationIQ API — reverse geocoding |

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd yummmzo-client

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Runs the app at `http://localhost:5173` with hot module replacement.

### Production Build

```bash
npm run build
```

Outputs to `dist/`. The app is configured for deployment on Vercel (`vercel.json` included).

---

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=https://api.yummmzo.com
VITE_LOCATIONIQ_API_KEY=your_locationiq_api_key
```

| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend API base URL |
| `VITE_LOCATIONIQ_API_KEY` | LocationIQ API key for reverse geocoding |

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
