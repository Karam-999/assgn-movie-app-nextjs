import Link from 'next/link';
import { FaGithub, FaUser, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className='relative mt-5 overflow-hidden py-6 md:py-5'>
      <div className='absolute inset-0 bg-gradient-to-r from-gray-900 via-[#110000] to-gray-900' />
      <div className='absolute inset-0 bg-gradient-to-t from-transparent to-black/30' />
      <div className='absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent' />

      <div className='relative mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-4 px-4 md:flex-row md:gap-0 md:px-5'>
        <div className='text-xl font-bold text-white uppercase md:text-[25px]'>
          <span>String.</span>
        </div>
        <div className='order-3 text-center text-sm text-gray-400 md:order-2 md:text-base md:text-white'>
          © {new Date().getFullYear()} String. All rights reserved.
        </div>
        <div className='order-2 flex text-xl md:order-3'>
          <Link
            href='https://github.com/Karam-999'
            target='_blank'
            className='mx-2 text-white transition-colors hover:text-[#730000] md:mr-0 md:ml-2.5'>
            <FaGithub />
          </Link>
          <Link
            href='https://linkedin.com/in/karam46'
            target='_blank'
            className='mx-2 text-white transition-colors hover:text-[#d80000] md:mr-0 md:ml-2.5'>
            <FaLinkedin />
          </Link>
          <Link
            href='https://karam-dev.vercel.app'
            target='_blank'
            className='mx-2 text-white transition-colors hover:text-[#d80000] md:mr-0 md:ml-2.5'>
            <FaUser />
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
