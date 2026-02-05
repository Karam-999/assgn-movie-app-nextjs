'use client';
import { FaSearch, FaTimes, FaSortAmountDown } from 'react-icons/fa';
import { SortOption, SearchProps } from '@/types';

const Search = ({
  query,
  onQueryChange,
  type,
  sortBy,
  onSortChange,
  totalResults,
}: SearchProps) => {
  return (
    <section className='px-4 py-12'>
      <div className='mx-auto max-w-5xl'>
        <div className='mb-8 text-center'>
          <h1 className='mb-2 text-3xl font-bold text-white md:text-4xl'>
            Discover {type === 'movie' ? 'Movies' : 'TV Shows'}
          </h1>
          <p className='text-gray-400'>
            Search and filter through our collection
          </p>
        </div>

        <div className='mx-auto mb-6 flex max-w-3xl flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center'>
          <div className='relative flex-1'>
            <FaSearch className='absolute top-1/2 left-4 z-10 -translate-y-1/2 text-gray-400' />
            <input
              type='text'
              placeholder={`Search ${type === 'movie' ? 'movies' : 'TV shows'}...`}
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              className='h-11 w-full rounded-full border border-gray-700 bg-gray-800/50 pr-12 pl-12 text-sm text-white backdrop-blur-sm transition-all duration-300 placeholder:text-gray-500 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none sm:h-12 sm:text-base'
            />
            {query && (
              <button
                onClick={() => onQueryChange('')}
                className='absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 transition-colors hover:text-white'>
                <FaTimes />
              </button>
            )}
          </div>

          <div className='flex h-11 items-center justify-center gap-2 rounded-full border border-gray-700 bg-gray-800/50 px-4 backdrop-blur-sm sm:h-12 sm:justify-start'>
            <FaSortAmountDown className='text-sm text-amber-400' />
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className='cursor-pointer appearance-none rounded bg-transparent px-2 py-2 pr-4 text-sm text-white focus:outline-none'>
              <option value='rating-desc' className='bg-gray-800'>
                Highest Rated
              </option>
              <option value='rating-asc' className='bg-gray-800'>
                Lowest Rated
              </option>
              <option value='date-desc' className='bg-gray-800'>
                Newest First
              </option>
              <option value='date-asc' className='bg-gray-800'>
                Oldest First
              </option>
            </select>
          </div>
        </div>

        <div className='text-center'>
          <p className='text-sm text-gray-400'>
            {totalResults === 0 ? (
              <span className='text-red-400'>No results found</span>
            ) : (
              <>
                Showing{' '}
                <span className='font-semibold text-amber-400'>
                  {totalResults}
                </span>{' '}
                {type === 'movie' ? 'movie' : 'show'}
                {totalResults !== 1 ? 's' : ''}
                {query && (
                  <>
                    {' '}
                    for &quot;<span className='text-white'>{query}</span>&quot;
                  </>
                )}
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Search;
