import Link from 'next/link';
import { FaFilm, FaTv } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='relative overflow-hidden py-4 pt-6 md:py-5 md:pt-8'>
      <div className='absolute inset-0 bg-gradient-to-r from-gray-900 via-[#110000] to-gray-900' />
      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/30' />
      <div className='absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent' />

      <div className='relative mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:gap-0 md:px-5'>
        <div className='text-xl font-bold text-white uppercase sm:text-[25px]'>
          <Link href='/'>String.</Link>
        </div>
        <nav>
          <ul className='flex items-center gap-1 sm:gap-2'>
            <li>
              <Link
                className='flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white sm:gap-2 sm:px-4 sm:py-2 sm:text-base'
                href='/movies'>
                <FaFilm className='text-amber-500' />
                <span>Movies</span>
              </Link>
            </li>
            <li>
              <Link
                className='flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white sm:gap-2 sm:px-4 sm:py-2 sm:text-base'
                href='/shows'>
                <FaTv className='text-blue-500' />
                <span>TV Shows</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
