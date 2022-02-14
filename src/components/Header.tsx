import React from 'react';

const Header = () => {
  return (
    <div className='text-center'>
      <h1 className='text-4xl dmd:text-lg font-bold mt-7'>
        GitHub Stats Generator
      </h1>
      <a
        className='text-green-400 mr-2'
        href='https://github.com/joshxfi'
        target='_blank'
        rel='noreferrer'
      >
        built for your convenience by @joshxfi
      </a>
    </div>
  );
};

export default Header;