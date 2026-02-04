const Search = () => {
  return (
    <section className='p-[60px] mb-10'>
      <div className='max-w-[1200px] w-full mx-auto px-5 flex justify-center items-center flex-col'>
        <h2 className='mb-5 text-center uppercase'>Search Movies</h2>
        <div id='alert'></div>
        <form action='/search-results' className='w-full max-w-[600px]'>
          {/* Movies and shows radio box */}
          <div className='[&_label]:mr-4'>
            <input
              type='radio'
              id='movie'
              name='type'
              value='movie'
              defaultChecked
            />
            <label htmlFor='movie'>Movies</label>
            <input type='radio' id='tv' name='type' value='tv' />
            <label htmlFor='tv'>TV Shows</label>
          </div>
          <div className='flex justify-between items-center mt-2.5'>
            <input
              type='text'
              name='search-term'
              id='search-term'
              placeholder='Enter search term'
              className='flex-6 w-full h-12.5 p-2.5 mr-2.5 border border-white rounded bg-transparent text-white placeholder:text-white focus:outline-none'
            />
            <button
              className='flex-1 block w-full p-2.5 rounded h-[50px] cursor-pointer bg-[#d80000] text-black hover:bg-transparent hover:text-white transition-all duration-300'
              type='submit'>
              <i className='fas fa-search'></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Search;
