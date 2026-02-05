import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { getMovieBySlug, getMovies } from '@/lib/tmdb';
import { notFound } from 'next/navigation';
import noImage from '@/assets/images/no-image.jpg';
import HomepageButton from '@/components/HomepageButton';
import type { Metadata } from 'next';

interface MovieDataTypes {
  id: string;
  title: string;
  slug: string;
  poster: string;
  backdrop: string;
  releaseDate: string;
  rating: number;
  overview: string;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const movies = getMovies();
  return movies.map((movie) => ({
    slug: movie.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const movie = getMovieBySlug(slug) as MovieDataTypes | undefined;

  if (!movie) {
    return {
      title: 'Movie Not Found',
    };
  }

  return {
    title: `${movie.title} | String Movies`,
    description: movie.overview || `Watch ${movie.title} on String.`,
    openGraph: {
      title: movie.title,
      description: movie.overview,
      images: movie.poster
        ? [`https://image.tmdb.org/t/p/w500${movie.poster}`]
        : [],
    },
  };
}

const MovieDetails = async ({ params }: Props) => {
  const { slug } = await params;
  const movie = getMovieBySlug(slug) as MovieDataTypes | undefined;

  if (!movie) {
    notFound();
  }

  return (
    <section className='mt-3 p-4'>
      <div
        className='relative min-h-[70vh] bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: movie.backdrop
            ? `url(https://image.tmdb.org/t/p/original${movie.backdrop})`
            : 'none',
        }}>
        <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent' />
        <div className='absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent' />

        <div className='relative z-10 container mx-auto px-6 pt-8 pb-16'>
          <Link
            className='rounded-lg border border-amber-500 px-3 py-2 text-white transition-colors duration-300 hover:bg-amber-700 hover:text-white'
            href='/movies'>
            <FaArrowLeft className='mr-2 mb-1 inline-block' />
            Back To Movies
          </Link>
          <div className='mt-8 flex flex-col gap-8 md:flex-row md:gap-12'>
            <div className='mx-auto flex-shrink-0 md:mx-0'>
              <div className='group relative'>
                <Image
                  src={
                    movie.poster
                      ? `https://image.tmdb.org/t/p/w342${movie.poster}`
                      : noImage
                  }
                  alt={movie.title}
                  width={300}
                  height={450}
                  sizes='(max-width: 768px) 250px, 300px'
                  priority
                  className='rounded-xl shadow-2xl shadow-black/50 transition-transform duration-300 group-hover:scale-[1.02]'
                />
                <div className='absolute -inset-1 -z-10 rounded-xl bg-amber-500/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100' />
              </div>
            </div>

            <div className='flex flex-1 flex-col justify-end pb-4'>
              <h1 className='mb-4 text-2xl leading-tight font-bold text-white md:text-4xl'>
                {movie.title}
              </h1>
              <div className='mb-6 flex flex-wrap items-center gap-4'>
                <div className='flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/20 px-4 py-2 backdrop-blur-sm'>
                  <span className='text-xl text-amber-400'>★</span>
                  <span className='text-lg font-bold text-white'>
                    {movie.rating.toFixed(1)}
                  </span>
                  <span className='text-sm text-gray-400'>/ 10</span>
                </div>

                <div className='flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm'>
                  <span className='text-gray-400'>📅</span>
                  <span className='text-white'>
                    {new Date(movie.releaseDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </div>

              <div className='max-w-2xl'>
                <h2 className='mb-2 text-lg font-semibold text-amber-400'>
                  Overview
                </h2>
                <p className='text-base leading-relaxed text-gray-300 md:text-lg'>
                  {movie.overview || 'No overview available.'}
                </p>
              </div>
              <div className='mt-8 flex flex-wrap gap-4'>
                <HomepageButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
