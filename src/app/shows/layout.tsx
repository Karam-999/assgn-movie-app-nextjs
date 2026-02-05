import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Popular TV Shows',
  description:
    'Browse our collection of popular TV shows. Search, filter, and sort by rating or air date. Discover your next binge-worthy series.',
  openGraph: {
    title: 'Popular TV Shows | String',
    description:
      'Browse our collection of popular TV shows. Search, filter, and sort by rating or air date.',
  },
};

export default function ShowsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
