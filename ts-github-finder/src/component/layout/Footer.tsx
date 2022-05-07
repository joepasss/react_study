import { FC } from 'react';

export const Footer: FC = () => {
  const footerYear: number = new Date().getFullYear();

  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      <p>Copyright &copy; {footerYear} All rights reserved</p>
    </footer>
  );
};
