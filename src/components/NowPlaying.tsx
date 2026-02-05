'use client';
import { getnowPlayingMovies } from '@/lib/tmdb';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface Movie {
  id: number;
  title: string;
  poster: string;
  rating: number;
  slug: string;
}

const NowPlaying = () => {
  const movies = getnowPlayingMovies() as unknown as Movie[];

  return (
    <section className='bg-hero bg-[#1b0000] px-5 py-10'>
      <h2 className='my-5 text-center text-2xl font-bold tracking-wider text-white uppercase'>
        Now Playing
      </h2>
      <div className='mx-auto max-w-[1200px]'>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 1000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className='now-playing-swiper'>
          {movies.map((movie, index) => (
            <SwiperSlide key={movie.id}>
              <div className='flex flex-col items-center'>
                <div className='relative aspect-2/3 w-full overflow-hidden rounded-lg'>
                  <Image
                    src={
                      movie.poster
                        ? `https://image.tmdb.org/t/p/w342${movie.poster}`
                        : '/no-image.png'
                    }
                    alt={movie.title}
                    fill
                    sizes='(max-width: 640px) 100vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw'
                    priority={index < 5}
                    className='object-cover transition-transform duration-300 hover:scale-105'
                  />
                </div>
                <div className='mt-3 flex items-center text-white'>
                  <span className='mr-1 text-yellow-400'>★</span>
                  <span>{movie.rating.toFixed(1)}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NowPlaying;
