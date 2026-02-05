import Link from 'next/link';
import Image from 'next/image';
import noImage from '@/assets/images/no-image.jpg';
import { MediaDataTypes } from '@/types';

interface PopularMoviesCardProps {
  filteredMovies: MediaDataTypes[];
}

const PopularMoviesCard = ({ filteredMovies }: PopularMoviesCardProps) => {
  return (
    <>
      {filteredMovies.map((movie) => (
        <div
          key={movie.id}
          className='overflow-hidden rounded-lg bg-gray-800 px-2 py-3 sm:px-3 sm:py-4'>
          <Link href={`/movies/${movie.slug}`}>
            <Image
              className='rounded-lg transition-transform duration-300 hover:scale-[1.02]'
              src={
                movie.poster
                  ? `https://image.tmdb.org/t/p/w342${movie.poster}`
                  : noImage
              }
              alt={movie.title}
              width={342}
              height={513}
              sizes='(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 22vw, 18vw'
            />
            <div className='mt-2 flex items-start justify-between gap-1 px-1 sm:px-3'>
              <h3 className='line-clamp-2 text-xs font-bold text-white sm:text-sm md:text-base'>
                {movie.title}
              </h3>
              <span className='shrink-0 text-xs font-bold text-white sm:text-sm'>
                {movie.rating.toFixed(1)}⭐
              </span>
            </div>
            <div className='mt-1 px-1 text-xs text-gray-400 sm:px-3 sm:text-sm md:text-white'>
              {new Date(movie.releaseDate).toLocaleDateString('en-GB')}
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default PopularMoviesCard;
