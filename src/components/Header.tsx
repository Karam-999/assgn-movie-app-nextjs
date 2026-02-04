import Link from 'next/link';
const Header = () => {
  return (
    <header className='py-5 bg-black/80'>
      <div className='max-w-[1200px] w-full mx-auto px-5 flex justify-between items-center'>
        <div className='text-white text-[25px] font-bold uppercase'>
          <Link href='/'>String.</Link>
        </div>
        <nav>
          <ul className='flex'>
            <li className='ml-5'>
              <Link
                className='text-base text-white no-underline hover:text-[#d80000] transition-colors'
                href='/'>
                Movies
              </Link>
            </li>
            <li className='ml-5'>
              <Link
                className='text-base text-white no-underline hover:text-[#d80000] transition-colors'
                href='shows.html'>
                TV Shows
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
