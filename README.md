## Pokedex App

A React + Redux Pokedex with favorites, search, and Pokémon detail pages. Recent work focused on responsive layout, accessibility, and UX polish.

### Quick start

```bash
npm install
npm start
```

Runs at `http://localhost:3000` (or your configured port).

### Features

- Responsive design across pages (Pokémon detail, search/home, favorites)
- Favorites with localStorage persistence and toast notifications
- Accessible keyboard-focusable controls and clear visual states

### Notable UI/UX improvements

- Full-viewport loader overlay and page backgrounds
- Pokémon detail: image and stats aligned under a shared heading; image scales with column; name scales with screen size
- Favorites: Delete All button pinned to top-right; cards show non-overlapping height/weight; 1-card grid on small screens
- Search/Home: 1 card per row on small screens; responsive pagination controls
- Toasts render above the fixed navbar via a single global container

### Scripts

- `npm start` — Dev server with fast refresh
- `npm run build` — Production build

### Tech

React, Redux Toolkit, react-router, react-toastify, CSS modules.
