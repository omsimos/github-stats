import React, { useState } from 'react';
import toast from 'react-hot-toast';

import themes from './themes.json'
import { Footer, Header, Result, Select } from './components';
import { countPrivateCommits, showBorder, darkToast } from './data'

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [theme, setTheme] = useState(themes[14]);
  const [border, setBorder] = useState(showBorder[0]);
  const [countPrivate, setCountPrivate] = useState(countPrivateCommits[0]);
  const [showResult, setShowResult] = useState(false);

  const handleShowResult = () => {
    if (!username) {
      toast('enter your github username', {
        icon: '🔥',
        ...darkToast,
      });
    } else {
      toast('click on one of the stats to copy', {
        icon: '❓',
        ...darkToast,
      });

      setShowResult(true);
    }
  };

  return (
    <div className='relative flex min-h-screen flex-col pb-24'>
      <Header />
      <Result
        isOpen={showResult}
        setIsOpen={setShowResult}
        username={username}
        theme={theme.value}
        border={border.value}
        countPrivate={countPrivate.value}
      />

      <div className='mx-auto flex w-[80%] max-w-screen-md flex-col sm:w-[90%] lg:w-full'>
        <div className='mt-16 grid w-full grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
          <div className='flex w-full flex-col text-sm md:text-base'>
            <label>github username</label>
            <input
              spellCheck='false'
              className='input'
              type='text'
              placeholder='input username'
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>

          <Select
            label='theme'
            defaultValue={theme}
            onChange={(e) => setTheme(e)}
            options={themes}
          />

          <Select
            defaultValue={countPrivate}
            onChange={(e) => setCountPrivate(e)}
            label='private commits'
            options={countPrivateCommits}
          />

          <Select
            defaultValue={border}
            onChange={(e) => setBorder(e)}
            label='border'
            options={showBorder}
          />
        </div>

        <div className='mt-8 flex flex-col justify-between text-sm sm:flex-row md:text-base'>
          <div className='order-2 mt-8 sm:order-first sm:mt-0'>
            <p>APIs used for the stats:</p>

            <div className='flex flex-col text-green-400'>
              <a
                href='https://github.com/anuraghazra/github-readme-stats'
                target='_blank'
                rel='noreferrer'
              >
                anuraghazra/github-readme-stats
              </a>

              <a
                href='https://github.com/DenverCoder1/github-readme-streak-stats'
                target='_blank'
                rel='noreferrer'
              >
                DenverCoder1/github-readme-streak-stats
              </a>
            </div>
          </div>

          <button
            type='button'
            onClick={handleShowResult}
            className={`${
              !username
                ? 'cursor-not-allowed bg-gray-700'
                : 'bg-green-600 ring-green-700 ring-offset-4 ring-offset-gray-900 transition-all hover:bg-green-700 focus:ring'
            } w-full self-end rounded py-2 px-4 sm:w-auto`}
          >
            Show Result
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
