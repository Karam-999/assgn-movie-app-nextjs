'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getShows } from '@/lib/tmdb';

const PopularShows = () => {
  const shows = getShows() as unknown as Array<{
    id: string;
    title: string;
    slug: string;
    poster: string;
  }>;
  const [query, setQuery] = useState('');

  const filtered = shows.filter((show) =>
    show.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section className='p-8'>
      <h2 className='my-5 text-center uppercase text-white text-2xl font-bold tracking-wider mb-8'>
        Popular Shows
      </h2>
      <div className='max-w-[1200px] w-full mx-auto px-5 mb-8'>
        <div className='flex gap-2 justify-center'>
          <input
            type='text'
            placeholder='Search shows...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='flex-1 max-w-[600px] h-12 p-2.5 border border-white rounded bg-transparent text-white placeholder:text-white focus:outline-none'
          />
          <button
            type='button'
            className='h-12 px-5 rounded bg-primary-red text-black hover:bg-transparent hover:text-white transition-all duration-300'>
            <i className='fas fa-search' />
          </button>
        </div>
      </div>
      <div className='max-w-[1200px] w-full mx-auto px-5'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {filtered.map((show) => (
            <Link key={show.id} href={`/shows/${show.slug}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${show.poster}`}
                alt={show.title}
                width={500}
                height={750}
                className='rounded-lg hover:scale-105 transition-transform duration-300'
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularShows;
