import Link from 'next/link';
import NowPlaying from '@/components/NowPlaying';
import AiringToday from '@/components/AiringToday';
import { FaFilm, FaTv, FaStar, FaDatabase } from 'react-icons/fa';

const HomePage = () => {
  return (
    <>
      <section className='relative overflow-hidden bg-gradient-to-b from-gray-900 via-[#1a0505] to-gray-900 px-4 py-16'>
        <div className='absolute inset-0 bg-[url("/bg.png")] opacity-10' />
        <div className='absolute top-0 left-1/4 h-72 w-72 animate-pulse rounded-full bg-amber-500/20 blur-[120px]' />
        <div className='absolute right-1/4 bottom-0 h-72 w-72 animate-pulse rounded-full bg-red-500/10 blur-[120px] delay-700' />

        <div className='relative z-10 mx-auto max-w-4xl text-center'>
          <h1 className='mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl'>
            Discover{' '}
            <span className='bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent'>
              Movies & TV Shows
            </span>
          </h1>
          <p className='mx-auto mb-8 max-w-2xl text-gray-300 md:text-xl'>
            Ultimate directory for exploring popular movies and trending TV
            shows. Powered by TMDB data, featuring ratings, release dates, and
            detailed information for every title.
          </p>

          <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
            <div className='rounded-xl border border-gray-800 bg-gray-800/30 p-4'>
              <FaFilm className='mx-auto mb-2 text-2xl text-amber-400' />
              <p className='text-sm font-medium text-white'>20+ Movies</p>
              <p className='text-xs text-gray-400'>Popular titles</p>
            </div>
            <div className='rounded-xl border border-gray-800 bg-gray-800/30 p-4'>
              <FaTv className='mx-auto mb-2 text-2xl text-blue-400' />
              <p className='text-sm font-medium text-white'>20+ TV Shows</p>
              <p className='text-xs text-gray-400'>Trending series</p>
            </div>
            <div className='rounded-xl border border-gray-800 bg-gray-800/30 p-4'>
              <FaStar className='mx-auto mb-2 text-2xl text-yellow-400' />
              <p className='text-sm font-medium text-white'>Ratings</p>
              <p className='text-xs text-gray-400'>TMDB scores</p>
            </div>
            <div className='rounded-xl border border-gray-800 bg-gray-800/30 p-4'>
              <FaDatabase className='mx-auto mb-2 text-2xl text-green-400' />
              <p className='text-sm font-medium text-white'>Static Data</p>
              <p className='text-xs text-gray-400'>Fast & SEO-ready</p>
            </div>
          </div>
        </div>
      </section>

      <NowPlaying />
      <AiringToday />
    </>
  );
};

export default HomePage;
