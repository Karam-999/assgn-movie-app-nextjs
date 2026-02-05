import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Popular Movies',
  description:
    'Browse our collection of popular movies. Search, filter, and sort by rating or release date. Discover your next favorite film.',
  openGraph: {
    title: 'Popular Movies | String',
    description:
      'Browse our collection of popular movies. Search, filter, and sort by rating or release date.',
  },
};

export default function MoviesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
