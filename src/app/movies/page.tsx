import PopularMovies from '@/components/PopularMovies';
import Search from '@/components/Search';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import Footer from "@/components/Footer";
const MoviePage = () => {
  return (
    <>
      <Header />
      <Search />
      {/* make changes here */}
      <PopularMovies />
      <Footer />
    </>
  );
};

export default MoviePage;
