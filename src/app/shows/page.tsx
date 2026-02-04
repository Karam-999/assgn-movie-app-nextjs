'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getShows } from '@/lib/tmdb';
import Search from '@/components/Search';
import noImage from '@/assets/images/no-image.jpg';

const ShowPage = () => {
  type ShowDataTypes = {
    id: string;
    title: string;
    slug: string;
    poster: string;
    releaseDate: string;
    rating: number;
  };
  const shows = getShows() as unknown as Array<ShowDataTypes>;
  const [query, setQuery] = useState('');
  const [type, setType] = useState<'movie' | 'tv'>('tv');
  const filtered = shows.filter((show) =>
    show.title.toLowerCase().includes(query.toLowerCase()),
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
            {filtered.map((show) => (
              <div
                key={show.id}
                className='bg-gray-800 overflow-hidden px-3 py-4 rounded-lg'>
                <Link href={`/shows/${show.slug}`}>
                  <Image
                    className='rounded-lg'
                    src={
                      show.poster
                        ? `https://image.tmdb.org/t/p/w500${show.poster}`
                        : noImage
                    }
                    alt={show.title}
                    width={500}
                    height={750}
                  />
                  <div className='flex px-3 justify-between items-start mt-2'>
                    <h3 className='font-bold text-white'>{show.title}</h3>
                    <h3 className='font-bold text-white'>
                      {show.rating.toFixed(1)}⭐
                    </h3>
                  </div>
                  <div className='px-3'>
                    Release:{' '}
                    {new Date(show.releaseDate).toLocaleDateString('en-GB')}
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

export default ShowPage;
