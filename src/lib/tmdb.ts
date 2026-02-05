import movies from '../../data/movies.json';
import shows from '../../data/shows.json';
import airingTodayshows from '../../data/airingTodayShowss.json';
import nowPlayingMovies from '../../data/nowPlayingmoviess.json';
import { MediaDataTypes } from '@/types';

export const getMovies = (): MediaDataTypes[] =>
  (movies as MediaDataTypes[]).filter((movie) => !movie.adult);

export const getnowPlayingMovies = (): MediaDataTypes[] =>
  (nowPlayingMovies as MediaDataTypes[]).filter((movie) => !movie.adult);

export const getShows = (): MediaDataTypes[] =>
  (shows as MediaDataTypes[]).filter((show) => !show.adult);

export const getnowPlayingShows = (): MediaDataTypes[] =>
  (airingTodayshows as MediaDataTypes[]).filter((show) => !show.adult);

export const getMovieBySlug = (slug: string): MediaDataTypes | undefined =>
  (movies as MediaDataTypes[]).find((m) => m.slug === slug);

export const getShowBySlug = (slug: string): MediaDataTypes | undefined =>
  (shows as MediaDataTypes[]).find((s) => s.slug === slug);
