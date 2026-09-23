# Zeenat Ara — Portfolio (MERN)

A personal portfolio built on the MERN stack:

- **M**ongoDB — stores messages submitted through the contact form
- **E**xpress — REST API (`/api/contact`) handling form submissions
- **R**eact — the site itself, built with Vite
- **N**ode.js — runs the Express server

## Project structure

```
portfolio-mern/
├── client/          React frontend (Vite)
│   └── src/
│       └── components/   Navbar, Hero, About, Skills, Projects, Certifications, Contact, Footer
└── server/          Express + MongoDB backend
    ├── models/      Mongoose schema for contact messages
    └── routes/      /api/contact routes
```

## Prerequisites

- Node.js 18+
- A MongoDB instance — either local (`mongod` running on your machine) or a free
  [MongoDB Atlas](https://www.mongodb.com/atlas) cluster

## 1. Set up the server

```bash
cd server
npm install
cp .env.example .env
# edit .env if you're using Atlas or a different port
npm run dev
```

The API runs at `http://localhost:5000`. Check it's alive: `http://localhost:5000/api/health`.

## 2. Set up the client

In a second terminal:

```bash
cd client
npm install
npm run dev
```

The site runs at `http://localhost:5173`. In dev, Vite proxies `/api/*` requests to the
Express server (see `vite.config.js`), so the contact form works without any extra CORS setup.

## 3. Try the contact form

Fill it out on the site — it POSTs to `/api/contact`, which validates the input and saves it
to MongoDB. To see saved messages, visit `http://localhost:5000/api/contact` in your browser
(returns the 100 most recent, newest first).

## Editing content

All the copy — bio, skills, projects, certifications — lives directly in the components under
`client/src/components/`. There's no CMS; edit the JSX/arrays directly.

Your photo is at `client/public/zee_character.jpeg`. Swap the file (keep the same name, or
update the `src` in `Hero.jsx`) to change it.

## Building for production

```bash
cd client
npm run build
```

This outputs a static `client/dist/` folder you can deploy to Vercel, Netlify, or GitHub Pages.
Deploy the `server/` folder separately (Render, Railway, or similar) and point `MONGODB_URI`
at your Atlas cluster. If the client and server are on different domains in production, update
the `fetch('/api/contact')` call in `Contact.jsx` to the full server URL, and make sure `cors()`
on the server allows your client's origin.
