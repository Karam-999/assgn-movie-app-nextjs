// import Header from '@/components/Header';
import Link from 'next/link';
import Image from 'next/image';
import { getMovies } from '@/lib/tmdb';
const MovieDetails = () => {
  type MovieDataTypes = {
    id: string;
    title: string;
    slug: string;
    poster: string;
    releaseDate: string;
    rating: number;
  };
  const movies = getMovies() as Array<MovieDataTypes>;
  return (
    <>
      <section className='mt-7 ml-4'>
        <div className='bg-url[(https://image.tmdb.org/t/p/w500${})] bg-cover bg-center h-[400px] rounded-lg relative'>
          <Link
            className=' border-amber-500 border-1 rounded-lg px-3 py-2  hover:bg-amber-700 hover:text-white transition-colors duration-300'
            href='/movies'>
            Back To Movies
          </Link>
        </div>
        {/* <!-- Movie Details Output --> */}
        <div id='movie-details'>
          <div className='back'></div>
          {/* <!--dummy class added to make space for alert div--> */}
          <div id='alert'></div>
        </div>
      </section>
    </>
  );
};

export default MovieDetails;
