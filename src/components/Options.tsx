import React from 'react';
import Select from './Select';
import { themeName, themeValue } from '../data/themeData';

export const Options: React.FC = () => {
  return (
    <div className='text-base dmd:hidden'>
      <div className='grid grid-cols-2 gap-4 w-[600px] px-2'>
        <div className='choices'>
          <label>username</label>
          <input
            spellCheck='false'
            className='input'
            type='text'
            placeholder='input username'
            // onChange={(e) => setUsername(e.target.value)}
            // value={username}
          />
        </div>

        <Select
          label='theme'
          options={
            <>
              {themeValue.map((val, i) => (
                <option key={themeName[i]} value={val}>
                  {themeName[i]}
                </option>
              ))}
            </>
          }
        />

        <Select
          label='private commits'
          options={
            <>
              <option value='true'>Show Private Commits</option>
              <option value='false'>Hide Private Commits</option>
            </>
          }
        />

        <Select
          label='show border'
          options={
            <>
              <option value='true'>Hide Border</option>
              <option value='false'>Show Border</option>
            </>
          }
        />

        <div className='col-span-2  text-center'>
          <div className='mb-4 border-t-4 border-b-4 py-4 border-green-600 rounded-lg'>
            <p className='pb-4'>[ copy to clipboard ]</p>

            <div className='flex gap-4'>
              {/* <Copy action={copyStats} about='stats 💪' />
          <Copy action={copyStreak} about='streak 🚀' />
          <Copy action={copyLangs} about='top languages 🏅' /> */}
            </div>
          </div>
          <button className='btn'>
            <a
              href='https://github.com/joshxfi/gh-stats-generator'
              target='_blank'
              rel='noreferrer'
            >
              star this repository ✨
            </a>
          </button>

          <p className='text-base'>
            {/* 📋 copied to clipboard! paste it on the repo: {username}/{username} */}
          </p>
        </div>
      </div>
    </div>
  );
};
