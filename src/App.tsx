import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Footer, Header, Result, Select } from './components';
import { themes, countPrivateCommits, showBorder, darkToast } from './data';

const App: React.FC = () => {
  const [username, setUsername] = useState('joshxfi');
  const [theme, setTheme] = useState(themes[14]);
  const [border, setBorder] = useState(showBorder[0]);
  const [countPrivate, setCountPrivate] = useState(countPrivateCommits[0]);
  const [showResult, setShowResult] = useState(false);

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

        <button
          disabled={!username}
          type='button'
          onClick={() => {
            toast('click on one of the stats to copy', {
              icon: '❓',
              style: darkToast,
            });

            setShowResult(true);
          }}
          className='disabled:cursor-not-allowed disabled:bg-gray-700 self-end bg-green-600 mt-8 py-2 px-4 rounded focus:ring ring-green-700 ring-offset-4 ring-offset-gray-900 transition-all'
        >
          Show Result
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default App;
