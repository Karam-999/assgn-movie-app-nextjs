// import Link from 'next/link';
import NowPlaying from '@/components/NowPlaying';
// import PopularMovies from '@/components/PopularMovies';
import AiringToday from '@/components/AiringToday';
const HomePage = () => {
  return (
    <>
      <NowPlaying />
      <AiringToday />
    </>
  );
};

export default HomePage;
