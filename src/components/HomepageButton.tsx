'use client';
import { FaArrowRight } from 'react-icons/fa';
import { toast } from 'sonner';

const HomepageButton = () => {
  return (
    <button
      className='flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/25'
      onClick={() =>
        toast.error('This homepage feature is not implemented yet!')
      }>
      <span>
        Homepage
        <FaArrowRight className='mb-1 ml-2 inline-block' />
      </span>
    </button>
  );
};

export default HomepageButton;
