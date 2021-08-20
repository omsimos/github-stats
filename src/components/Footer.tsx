import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className='flex dmd:flex-col dlg:flex-col justify-between px-32 dmd:px-4 dmd:items-center dlg:items-center dmd:bg-transparent w-full absolute bottom-0 py-5 bg-green-900 dmd:text-xs dlg:text-base'>
      <p>© Josh Daniel 2021 • All Rights Reserved</p>
      <div className='dmd:mt-3'>
        <a
          className='mr-16 link'
          href='https://github.com/joshxfi/gh-stats-generator'
          target='_blank'
          rel='noreferrer'
        >
          GitHub
        </a>
        <a
          className='mr-16 link'
          href='https://github.com/anuraghazra/github-readme-stats'
          target='_blank'
          rel='noreferrer'
        >
          Generator
        </a>
        <a
          className='link'
          href='https://xfi.vercel.app'
          target='_blank'
          rel='noreferrer'
        >
          Portfolio
        </a>
      </div>
    </footer>
  );
};
