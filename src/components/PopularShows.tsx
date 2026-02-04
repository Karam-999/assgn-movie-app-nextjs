const PopularShows = () => {
  return (
    <section className='max-w-[1200px] w-full mx-auto px-5'>
      <h2 className='my-5 text-center uppercase'>Popular Shows</h2>
      <div
        id='popular-shows'
        className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5'></div>
    </section>
  );
};

export default PopularShows;
