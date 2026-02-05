export type MediaDataTypes = {
  id: number; // Changed from string to number
  type: string;
  title: string;
  slug: string;
  overview: string;
  poster: string;
  backdrop: string;
  releaseDate: string;
  rating: number;
  adult: boolean;
};

export type SortOption =
  | 'rating-desc'
  | 'rating-asc'
  | 'date-desc'
  | 'date-asc';

export type SearchProps = {
  query: string;
  onQueryChange: (value: string) => void;
  type: 'movie' | 'tv';
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  totalResults: number;
};
