# 📖 Project Overview

Tiles Gallery is a modern e-commerce web application built for browsing and purchasing a wide variety of tiles. Users can explore different tile designs, view detailed product information, and make purchases through a smooth and user-friendly interface.

The platform focuses on providing a seamless shopping experience with features like product listings, detailed views, secure authentication, and efficient data management. Whether customers are looking for floor tiles, wall tiles, or decorative designs, Tiles Gallery makes it easy to discover and buy the perfect match.

With a clean UI and optimized performance, the application ensures fast browsing, easy navigation, and a reliable shopping experience for users.

---

# 🧱 Tiles Gallery

A modern full-stack web application to explore, upload, and manage tile-based images with a clean UI and smooth user experience.

---

## 🌐 Live Demo

https://your-live-link.vercel.app

---

## 🚀 Features

* 🖼️ Tile Gallery — Browse all tiles in a responsive grid
* 🔍 Tile Details — View full image and information
* 🔐 Authentication — Secure login & signup system
* ⚡ Fast Performance — Built with Next.js App Router
* 🎨 Modern UI — Clean design with Tailwind CSS

---

## 🧩 Tech Stack

* Frontend: Next.js
* Styling: Tailwind CSS + DaisyUI / HeroUI
* Authentication: Better Auth
* Database: MongoDB Atlas
* Deployment: Vercel

---

## 📁 Project Structure

```

Based on the current architecture of the project:


├── app/                  # App Router (Pages, Layouts, and API Routes)
│   ├── (auth)/           # Authentication routes (Signup, Login)
│   ├── (all-tiles)/      # Grouped routes for the Tiles Gallery
│   ├── api/              # Backend API endpoints (Auth, Tiles data)
│   └── layout.js         # Global Layout
├── components/           # Reusable UI Components
│   ├── TilesCard.js      # Individual Tile display component
│   └── Shared/           # Navbar, Footer, etc.
├── lib/                  # Server-side configurations
│   ├── auth.js           # Better Auth configuration & adapter
│   └── db.js             # MongoDB connection utility
├── models/               # Mongoose Models (Tile, User, etc.)
├── public/               # Static assets (Images, Icons)
├── next.config.js        # Next.js configuration (Remote Patterns, etc.)
└── package.json          # Dependencies and Scripts
```

---

## 🛠️ Installation

```
git clone https://github.com/your-username/tiles-gallery.git
cd tiles-gallery
npm install
npm run dev
```

---

## 📡 API Endpoints

* /api/auth/* → Authentication
* /api/tiles → Get & create tiles
* /api/tiles/:id → Get single tile

---

## 📊 Future Improvements

* Like & Favorite system
* Comments
* Search & filters
* Analytics dashboard

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push and create a Pull Request

---

## 📄 License

MIT License

---

## 🙌 Author

Remon Hossen

---

## ⭐ Support

Give a star if you like this project ⭐
