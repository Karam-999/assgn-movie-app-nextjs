// import Link from 'next/link';
import Header from '@/components/Header';
import NowPlaying from '@/components/NowPlaying';
import Search from '@/components/Search';
import PopularMovies from '@/components/PopularMovies';
import Footer from '@/components/Footer';
const HomePage = () => {
  return (
    <>
      <Header />
      <NowPlaying />
      <Search />
      <PopularMovies />
      <Footer />
    </>
  );
};

export default HomePage;
