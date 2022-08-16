import React from 'react';

export const Header = () => {
  return (
    <div className='text-center mt-8'>
      <h1 className='md:text-4xl text-2xl font-bold'>GitHub Stats Generator</h1>
      <a
        className='text-green-400 text-sm md:text-base'
        href='https://github.com/joshxfi'
        target='_blank'
        rel='noreferrer'
      >
        built for your convenience by @joshxfi
      </a>
    </div>
  );
};
