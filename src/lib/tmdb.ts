import movies from '../../data/movies.json';
import shows from '../../data/shows.json';
// import airingTodayshows from '../../data/airingTodayshowss.json';
// import nowPlayingMovies from '../../nowta/nowPlayingMoviess.json';

interface MediaItem {
  adult: boolean;
  slug: string;
  [key: string]: unknown;
}

export const getMovies = () => (movies as MediaItem[]).filter((movie) => !movie.adult);
export const getShows = () => (shows as MediaItem[]).filter((show) => !show.adult);

export const getMovieBySlug = (slug: string) =>
  (movies as MediaItem[]).find((m) => m.slug === slug);

export const getShowBySlug = (slug: string) =>
  (shows as MediaItem[]).find((s) => s.slug === slug);
