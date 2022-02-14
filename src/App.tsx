import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Footer, Header, Result, Select } from './components';
import { themes, countPrivateCommits, showBorder, darkToast } from './data';

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
    <div className='min-h-screen relative flex flex-col pb-24'>
      <Header />
      <Result
        isOpen={showResult}
        setIsOpen={setShowResult}
        username={username}
        theme={theme.value}
        border={border.value}
        countPrivate={countPrivate.value}
      />

      <div className='flex flex-col max-w-screen-md mx-auto w-full'>
        <div className='grid grid-cols-2 gap-x-4 gap-y-8 w-full mt-16'>
          <div className='flex flex-col w-full'>
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

        <div className='flex justify-between mt-8'>
          <div>
            <p>APIs used for the stats:</p>

            <div className='flex flex-col text-green-400'>
              <a
                className='attribution mr-2'
                href='https://github.com/anuraghazra/github-readme-stats'
                target='_blank'
                rel='noreferrer'
              >
                anuraghazra/github-readme-stats
              </a>

              <a
                className='attribution'
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
              !username && 'cursor-not-allowed bg-gray-700'
            } self-end bg-green-600 py-2 px-4 rounded focus:ring ring-green-700 ring-offset-4 ring-offset-gray-900 transition-all`}
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
