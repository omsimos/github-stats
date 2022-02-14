import React from 'react';

const Footer = () => {
  return (
    <footer className='absolute bottom-0 w-full py-4'>
      <a
        href='https://github.com/joshxfi/github-stats-generator'
        target='_blank'
        rel='noreferrer'
        className='text-sm md:text-base flex justify-center items-center space-x-2 flex-col sm:flex-row'
      >
        <p className='order-2 sm:order-first'>
          © 2022 github-stats-generator{' '}
          <span className='hidden sm:inline'>·</span>
        </p>
        <p>Built with 💚 by Josh Daniel</p>
      </a>
    </footer>
  );
};

export default Footer;