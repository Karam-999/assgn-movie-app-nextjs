import Header from '@/components/Header';

const MovieDetails = () => {
    return ( 
        <>
            <Header />
            <section className="container">
      <div className="back">
        <a className="btn" href="index.html">Back To Movies</a>
      </div>
      {/* <!-- Movie Details Output --> */}
      <div id="movie-details">
        <div className="back"></div>
        {/* <!--dummy class added to make space for alert div--> */}
        <div id="alert"></div>
      </div>
    </section>

        </>
     );
}
 
export default MovieDetails;