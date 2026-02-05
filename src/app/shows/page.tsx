'use client';
import { useMemo, useState } from 'react';
import { getShows } from '@/lib/tmdb';
import Search from '@/components/Search';
import { SortOption } from '@/types';
import PopularShowsCard from '@/components/PopularShowsCard';

const ShowPage = () => {
  const shows = getShows();
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('rating-desc');

  const filtered = useMemo(() => {
    let result = [...shows];

    if (query) {
      result = result.filter((show) =>
        show.title.toLowerCase().includes(query.toLowerCase()),
      );
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case 'rating-desc':
          return b.rating - a.rating;
        case 'rating-asc':
          return a.rating - b.rating;
        case 'date-desc':
          return (
            new Date(b.releaseDate).getTime() -
            new Date(a.releaseDate).getTime()
          );
        case 'date-asc':
          return (
            new Date(a.releaseDate).getTime() -
            new Date(b.releaseDate).getTime()
          );
        default:
          return 0;
      }
    });

    return result;
  }, [shows, query, sortBy]);

  return (
    <>
      <main className='relative min-h-screen overflow-hidden'>
        <div className='absolute inset-0 -z-10'>
          <div className='absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black' />
          <div className='absolute top-0 -right-40 h-80 w-80 animate-pulse rounded-full bg-blue-500/20 blur-[120px]' />
          <div className='absolute top-1/3 -left-40 h-96 w-96 animate-pulse rounded-full bg-teal-500/10 blur-[120px] delay-1000' />
          <div className='absolute right-1/3 bottom-0 h-80 w-80 animate-pulse rounded-full bg-indigo-500/10 blur-[120px] delay-500' />
          <div
            className='absolute inset-0 opacity-[0.02]'
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]' />
        </div>

        <Search
          query={query}
          onQueryChange={setQuery}
          type='tv'
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalResults={filtered.length}
        />

        <section className='relative px-4 pb-12 md:px-8'>
          {filtered.length > 0 ? (
            <div className='mx-auto max-w-7xl'>
              <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-5'>
                <PopularShowsCard filteredShows={filtered} />
              </div>
            </div>
          ) : (
            <div className='py-20 text-center'>
              <h3 className='mb-2 text-xl font-semibold text-white'>
                No shows found
              </h3>
              <p className='text-gray-400'>
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default ShowPage;
