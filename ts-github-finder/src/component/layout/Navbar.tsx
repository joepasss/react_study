import { FC } from 'react';
import { Link } from 'react-router-dom';

import { FaGithub } from 'react-icons/fa';

interface Props {
  title?: string;
}

export const Navbar: FC<Props> = ({ title = 'Github Finder' }) => {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-contet'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <FaGithub className='inline pr-2 text-3xl' />
          <Link to='/' className='text-la font-bold align-middle'>
            {title}
          </Link>
        </div>

        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
