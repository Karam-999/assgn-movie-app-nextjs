import Link from 'next/link';
const Footer = () => {
    return (
      <footer className='bg-[#020d18] py-5 mt-5'>
        <div className='max-w-[1200px] w-full mx-auto px-5 flex justify-between items-center'>
          <div className='text-white text-[25px] font-bold uppercase'>
            <span>String.</span>
          </div>
          <div className='flex text-xl'>
            <Link
              href='https://github.com/Karam-999'
              target='_blank'
              className='ml-2.5 text-white hover:text-[#d80000] transition-colors'>
              <i className='fa-brands fa-github'></i>
            </Link>
            <Link
              href='https://linkedin.com/in/karam46'
              target='_blank'
              className='ml-2.5 text-white hover:text-[#d80000] transition-colors'>
              <i className='fa-brands fa-linkedin'></i>
            </Link>
            <Link
              href='https://karam-dev.vercel.app'
              target='_blank'
              className='ml-2.5 text-white hover:text-[#d80000] transition-colors'>
              <i className='fa-solid fa-user'></i>
            </Link>
          </div>
        </div>
      </footer>
    );
}
export default Footer;