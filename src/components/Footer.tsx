import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className='flex dlg:flex-col justify-between px-32 dlg:px-4 dlg:items-center dlg:bg-transparent w-full absolute bottom-0 py-5 bg-green-900 dlg:text-sm'>
      <p>© Josh Daniel Bañares 2021 • All Rights Reserved</p>
      <div className='dlg:mt-3'>
        <a className='mr-16 link' href='https://github.com/joshxfi/gh-stats-generator' target='_blank' rel='noreferrer'>
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
        <a className='link' href='https://xfi.vercel.app' target='_blank' rel='noreferrer'>
          Portfolio
        </a>
      </div>
    </footer>
  );
};
