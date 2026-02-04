// import Link from 'next/link';
import NowPlaying from '@/components/NowPlaying';
import Search from '@/components/Search';
// import PopularMovies from '@/components/PopularMovies';
import AiringToday from '@/components/AiringToday';
const HomePage = () => {
  return (
    <>
      <Search />
      <NowPlaying />
      <AiringToday />
    </>
  );
};

export default HomePage;
