import React from "react";

export const Header = () => {
  return (
    <div className='text-center'>
      <h1 className='text-4xl dlg:text-2xl font-bold mt-16'>GitHub README Stats Generator</h1>
      <a
        className='text-green-400'
        href='https://github.com/anuraghazra/github-readme-stats'
        target='_blank'
        rel='noreferrer'
      >
        <i>based on anuraghazra's repo</i>
      </a>
    </div>
  );
};
