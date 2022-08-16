import React from 'react';
import { IStats, useGithubStats } from '../hooks';

export const Preview = ({
  theme,
  countPrivate,
  border,
}: Omit<IStats, 'username'>) => {
  const { stats } = useGithubStats({
    username: 'joshxfi',
    theme,
    countPrivate,
    border,
  });
  return (
    <section className='mt-12'>
      <p className='mb-2'>Preview</p>
      <img className='output' src={stats} alt='github stats' />
    </section>
  );
};
