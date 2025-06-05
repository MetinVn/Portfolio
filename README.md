# Portfolio – React + TypeScript + Vite

A modern, responsive portfolio web application built with React, TypeScript, and Vite. This project showcases a developer's skills, projects, and contact information with a clean, animated UI.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Navigation](#navigation)

---

## Features

- Responsive design for desktop and mobile
- Animated UI with Tailwind CSS
- Context-based layout switching (About, Portfolio, Contact)
- Modular, reusable components and layouts

---

## Project Structure

```
src/
  components/         # Main UI components (About, Contact, Footer, Header, Hero, Portfolio)
  contexts/           # React context for layout switching
  images/             # Static images used in the UI
  layouts/            # Layout components (Container, AboutDesktop, AboutMobile, HeaderDesktop, HeaderMobile, Jobindicator)
  svg/                # SVG icon components
  types/              # TypeScript type definitions
  App.tsx             # Main app component
  main.tsx            # Entry point
  index.css           # Tailwind CSS imports
```

- **components/**: Page-level and shared UI components.
- **contexts/**: Contains `selected_layout.tsx` for managing which layout/page is active.
- **layouts/**: Layout wrappers and responsive variants.
- **images/**: All static images and mockups.
- **svg/**: SVG icon React components.
- **types/**: TypeScript interfaces for props and data models.

---

## Technologies Used

- **React** – UI library
- **TypeScript** – Static typing
- **Tailwind CSS** – Utility-first CSS framework
- **@tanstack/react-query** – Data fetching and caching
- **Axios** – HTTP client
- **React Icons** – Icon library

---

## Getting Started

1. **Clone the repository:**

   ```sh
   git clone https://github.com/MetinVn/Portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the development server:**

   ```sh
   npm run dev
   ```

4. **Open [http://localhost:5173](http://localhost:5173) in your browser.**

---

## Navigation

The app uses a context-based navigation system. The main sections are:

- **About**: Introduction, skills, and contact actions
- **Portfolio**: List of projects
- **Contact**: Contact information and email link

Navigation is available via the header (desktop and mobile variants).
