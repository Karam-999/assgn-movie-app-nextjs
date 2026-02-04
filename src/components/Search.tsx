'use client';

type SearchProps = {
  query: string;
  onQueryChange: (value: string) => void;
  type: 'movie' | 'tv';
  onTypeChange: (type: 'movie' | 'tv') => void;
};

const Search = ({ query, onQueryChange, type, onTypeChange }: SearchProps) => {
  return (
    <section className='p-[60px] mb-10'>
      <div className='max-w-[1200px] w-full mx-auto px-5 flex justify-center items-center flex-col'>
        <h2 className='mb-5 text-center uppercase'>
          Search {type === 'movie' ? 'Movies' : 'TV Shows'}
        </h2>

        <div className='w-full max-w-[600px]'>
          {/* Radio buttons */}
          <div className='[&_label]:mr-4 mb-2'>
            <input
              type='radio'
              id='movie'
              checked={type === 'movie'}
              onChange={() => onTypeChange('movie')}
            />
            <label htmlFor='movie'>Movies</label>

            <input
              type='radio'
              id='tv'
              checked={type === 'tv'}
              onChange={() => onTypeChange('tv')}
              className='ml-4'
            />
            <label htmlFor='tv'>TV Shows</label>
          </div>

          {/* Search input */}
          <div className='flex gap-2'>
            <input
              type='text'
              placeholder='Enter search term'
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              className='flex-1 h-12 p-2.5 border border-white rounded bg-transparent text-white placeholder:text-white focus:outline-none'
            />

            <button
              type='button'
              className='h-12 px-5 rounded bg-primary-red text-black hover:bg-transparent hover:text-white transition-all duration-300'>
              <i className='fas fa-search' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
