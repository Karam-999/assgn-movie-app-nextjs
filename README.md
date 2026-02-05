# String - Movies & TV Shows Directory

A clean, modern content directory site built with Next.js 14+ App Router and Tailwind CSS, featuring movies and TV shows data from TMDB.

🔗 **Live Demo:** [string-movies.vercel.app](https://string-movies.vercel.app)

## 📊 Dataset

- **Source:** [TMDB (The Movie Database) API](https://www.themoviedb.org/documentation/api)
- **Content:** 20+ Popular Movies, 20+ Popular TV Shows, Now Playing Movies, Airing Today Shows
- **Data Fields:** Title, slug, poster, backdrop, rating, release date, overview

### How the data was generated

Data was fetched using a custom script (`scripts/fetchTMDBData.ts`) that:

1. Connects to TMDB API endpoints (`/movie/popular`, `/tv/popular`, `/movie/now_playing`, `/tv/airing_today`)
2. Transforms the response to include only required fields
3. Generates URL-friendly slugs using the `slugify` library
4. Saves as static JSON files in the `/data` directory

<!-- ```bash
# To regenerate data
npx ts-node scripts/fetchTMDBData.ts
``` -->

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui (Sonner toast)
- **Carousel:** Swiper.js
- **Icons:** React Icons
- **Linting:** ESLint + Prettier
- **Data:** Static JSON (SSG)

## Design Inspiration

- [Letterboxd](https://letterboxd.com) - Card layouts, movie detail pages, and overall content directory structure
- [Netflix](https://netflix.com) - Carousel sliders, dark theme aesthetics, and immersive backdrop imagery
- **My Own Creativity** - Custom color scheme (amber/red accents), glassmorphism effects, gradient overlays, fixed header/footer, and smooth hover animations

## Features

- **Static Site Generation (SSG)** - Pre-rendered pages for performance & SEO
- **Dynamic Metadata** - Unique title, description, OG images per page
- **Search & Filter** - Real-time search with sort options
- **Responsive Design** - Mobile-first, works on all screen sizes
- **SEO Optimized** - Sitemap, meta tags, semantic HTML
- **Top Rated Pages** - Permutation pages for top-rated content
- **Dark Mode** - dark theme throughout application

## Project Structure

```
src/
├── app/
│   ├── page.tsx                # Homepage
│   ├── sitemap.ts              # sitemap
│   ├── movies/
│   │   ├── page.tsx          # Movies listing
│   │   ├── layout.tsx        # Movies section metadata
│   │   └── [slug]/page.tsx   # Movie details (SSG)
|   |
│   └── shows/
│       ├── page.tsx
│       ├── layout.tsx        # Shows section metadata
│       └── [slug]/page.tsx   # Show detail (SSG)
├── components/
│   ├── Header.tsx            # Global navigation
│   ├── Footer.tsx            # Global footer
│   ├── Search.tsx            # Search + sort component
│   ├── NowPlaying.tsx        # Now playing carousel
│   ├── AiringToday.tsx       # Airing today carousel
│   └── PopularMoviesCard.tsx # Movie card component
├── lib/
│   └── tmdb.ts               # Data fetching utilities
└── data/
    ├── movies.json           # Popular movies dataset
    ├── shows.json            # Popular TV shows dataset
    └── ...                   # Additional datasets
```

## AI Prompts Used

> 'review this component for typeScript type issues'

> "how do I enable autoplay in reverse direction in swiper js? provide documentation link"

> "add a grayish gradient background to the hero section"

> "review the responsiveness of application layout for small screens"

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run string

# Build for production
npm run build

# Start production server
npm start
```

## What I'd Improve with 2 More Days

1. **Genre Filtering** - create genres `/movies/genre/[genre]` pages
2. **Advanced Search** - Add filters for year, rating range, and multiple genres
3. **Pagination** - implenment pagination to movies and shows pages
4. **Image Optimization** - Blur placeholders and better lazy loading
5. **Detail Page** - Make detail page more content rich
6. **UI/UX Enhancement** - Impovement of overall ui/ux

---

## Contact Me:
📧 **Gmail:** connect.with.karam25@gmail.com

