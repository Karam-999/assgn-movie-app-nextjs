import fs from 'fs';
import dotenv from 'dotenv';
import path from 'path';
import slugify from 'slugify';

dotenv.config({ path: '.env.local' });

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

if (!API_KEY) {
  console.error('Error: TMDB_API_KEY is not set in .env.local');
  process.exit(1);
}

// Utility function to add delay between requests


async function fetchTMDB(endpoint: string) {
  
      const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=en-US`;
      const res = await fetch(url);

      if (!res.ok) {
        const errorBody = await res.text();
        throw new Error(
          `TMDB fetch failed: ${res.status} ${res.statusText} - ${errorBody}`,
        );
      }
      return res.json();
    
  }

type Movie = {
  id: number;
  name: string;
  title: string;
  slug: string;
  poster: string;
  rating: number;
  adult: boolean;
  overview: string;
  backdrop: string;
  releaseDate: string;
  type: 'movie' | 'tv';
  poster_path: string;
  vote_average: number;
  first_air_date: string;
  backdrop_path: string;
  release_date: string;
};

async function getMovies() {
  const data = await fetchTMDB('/movie/popular');
  return data.results.slice(0, 40).map((movie: Movie) => ({
    id: movie.id,
    type: 'movie',
    title: movie.title,
    slug: slugify(movie.title, { lower: true }),
    overview: movie.overview,
    poster: movie.poster_path,
    backdrop: movie.backdrop_path,
    rating: movie.vote_average,
    releaseDate: movie.release_date,
    adult: movie.adult,
  }));
}

async function getShows() {
  const data = await fetchTMDB('/tv/popular');
  return data.results.slice(0, 40).map((show: Movie) => ({
    id: show.id,
    type: 'tv',
    title: show.name,
    slug: slugify(show.name, { lower: true }),
    overview: show.overview,
    poster: show.poster_path,
    backdrop: show.backdrop_path,
    rating: show.vote_average,
    releaseDate: show.first_air_date,
    adult: show.adult,
  }));
}

type SwiperItems = {
  id: number;
  type: 'movie' | 'tv';
  title: string;
  name: string;
  slug: string;
  poster: string;
  poster_path: string;
  rating: number;
  vote_average: number;
  adult: boolean;
};
async function airingTodaySwiperShows() {
  const data = await fetchTMDB('/tv/airing_today');
  return data.results.slice(0, 15).map((show: SwiperItems) => ({
    id: show.id,
    type: 'tv',
    title: show.name,
    poster: show.poster_path,
    slug: slugify(show.name, { lower: true }), // Generate slug from show name
    rating: show.vote_average,
    adult: show.adult,
  }));
}

async function nowPlayingSwiperMovies() {
  const data = await fetchTMDB('/movie/now_playing');
  return data.results.slice(0, 15).map((movie: SwiperItems) => ({
    id: movie.id,
    type: 'movie',
    title: movie.title,
    slug: slugify(movie.title, { lower: true }),
    poster: movie.poster_path,
    rating: movie.vote_average,
    adult: movie.adult,
  }));
}

async function run() {
  const movies = await getMovies();
  const shows = await getShows();
  const airingTodayShows = await airingTodaySwiperShows();
  const nowPlayingMovies = await nowPlayingSwiperMovies();

  fs.writeFileSync(
    path.join(process.cwd(), 'data/movies.json'),
    JSON.stringify(movies, null, 2),
  );
  fs.writeFileSync(
    path.join(process.cwd(), 'data/nowPlayingmoviess.json'),
    JSON.stringify(nowPlayingMovies, null, 2),
  );
  fs.writeFileSync(
    path.join(process.cwd(), 'data/airingTodayShowss.json'),
    JSON.stringify(airingTodayShows, null, 2),
  );

  fs.writeFileSync(
    path.join(process.cwd(), 'data/shows.json'),
    JSON.stringify(shows, null, 2),
  );

  console.log('Movies & Shows datasets generated');
}

run();
