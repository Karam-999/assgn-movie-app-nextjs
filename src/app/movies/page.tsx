'use client';
import Image from 'next/image';
import noImage from '@/assets/images/no-image.jpg';

// import PopularMovies from '@/components/PopularMovies';
import Link from 'next/link';
import { useState } from 'react';
import { getMovies } from '@/lib/tmdb';
import Search from '@/components/Search';
const MoviePage = () => {
  type MovieDataTypes = {
    id: string;
    title: string;
    slug: string;
    poster: string;
    releaseDate: string;
    rating: number;
  };
  const movies = getMovies() as unknown as Array<MovieDataTypes>;
  const [query, setQuery] = useState('');
  const [type, setType] = useState<'movie' | 'tv'>('movie');
  const filtered = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <main>
        <Search
          query={query}
          onQueryChange={setQuery}
          type={type}
          onTypeChange={setType}
        />

        <section className='p-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {filtered.map((movie) => (
              <div
                key={movie.id}
                className='bg-gray-800 overflow-hidden px-3 py-4 rounded-lg'>
                <Link href={`/movies/${movie.id}`}>
                  <Image
                    className='rounded-lg'
                    src={
                      movie.poster
                        ? `https://image.tmdb.org/t/p/w500${movie.poster}`
                        : noImage
                    }
                    alt={movie.title}
                    width={500}
                    height={750}
                  />
                  <div className='flex px-3 justify-between items-start mt-2'>
                    <h3 className='font-bold text-white'>{movie.title}</h3>
                    <h3 className='font-bold text-white'>
                      {movie.rating.toFixed(1)}⭐
                    </h3>
                  </div>
                  <div className='px-3'>
                    Release:{' '}
                    {new Date(movie.releaseDate).toLocaleDateString('en-GB')}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default MoviePage;
