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
  const movies = (getnowPlayingMovies() as unknown) as Movie[];

  return (
    <section className='py-10 px-5 bg-[#1b0000] bg-hero'>
      <h2 className='my-5 text-center uppercase text-white text-2xl font-bold tracking-wider'>
        Now Playing
      </h2>
      <div className='max-w-[1200px] mx-auto'>
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
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className='flex flex-col items-center'>
                <div className='relative w-full aspect-2/3 rounded-lg overflow-hidden'>
                  <Image
                    src={movie.poster ? `https://image.tmdb.org/t/p/w500${movie.poster}` : '/no-image.png'}
                    alt={movie.title}
                    // height={100}
                    // width={100}
                    fill
                    className='object-cover hover:scale-105 transition-transform duration-300'
                  />
                </div>
                <div className='flex items-center mt-3 text-white'>
                  <span className='text-yellow-400 mr-1'>★</span>
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
