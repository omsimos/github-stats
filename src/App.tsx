import React, { useState } from 'react';
import { Footer, Header, Select } from './components';
import { themes } from './data';

const App: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [theme, setTheme] = useState<string>('vue-dark');
  const [border, setBorder] = useState<string>('true');
  const [countPrivate, setCountPrivate] = useState<string>('true');

  const ghStats = `https://github-readme-stats.vercel.app/api?username=${username}&theme=${theme}&show_icons=true&hide_border=${border}&count_private=${countPrivate}`;

  const ghTopLangs = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=${theme}&show_icons=true&hide_border=${border}&layout=compact`;

  const ghStreak = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&hide_border=${border}`;

  const copyToClipboard = (text: string) => {
    if (username) navigator.clipboard.writeText(text);
  };

  return (
    <div className='min-h-screen relative flex flex-col pb-24'>
      <Header />

      <div className='flex justify-center max-w-screen-xl w-full mx-auto'>
        <div className='flex flex-col w-full'>
          <div className='grid grid-cols-2 gap-2'>
            <div className='choices'>
              <label>username</label>
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
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              options={
                <>
                  {themes.map(({ value, name }) => (
                    <option key={value} value={name}>
                      {name}
                    </option>
                  ))}
                </>
              }
            />

            <Select
              value={countPrivate}
              onChange={(e) => setCountPrivate(e.target.value)}
              label='private commits'
              options={
                <>
                  <option value='true'>Show Private Commits</option>
                  <option value='false'>Hide Private Commits</option>
                </>
              }
            />

            <Select
              value={border}
              onChange={(e) => setBorder(e.target.value)}
              label='show border'
              options={
                <>
                  <option value='true'>Hide Border</option>
                  <option value='false'>Show Border</option>
                </>
              }
            />
          </div>

          <div className='col-span-2  text-center'>
            <div className='mb-4 border-t-4 border-b-4 py-4 border-green-600 rounded-lg'>
              <p className='pb-4'>[ copy to clipboard ]</p>

              <div className='flex gap-4'>
                <button
                  className='btn'
                  onClick={() =>
                    copyToClipboard(`![${username}\'s Stats](${ghStats})`)
                  }
                >
                  stats 💪
                </button>
                <button
                  className='btn'
                  onClick={() =>
                    copyToClipboard(
                      `![${username}\'s Top Languages](${ghTopLangs})`
                    )
                  }
                >
                  streak 🚀
                </button>
                <button
                  className='btn'
                  onClick={() =>
                    copyToClipboard(`![${username}\'s Streak](${ghStreak})`)
                  }
                >
                  top languages 🏅
                </button>
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
          </div>
        </div>

        <div className='flex flex-col items-center w-full mt-8'>
          {username === '' ? (
            <div className='text-lg border-b-4 border-green-400 dmd:hidden'>
              <h1>input your username 😸</h1>
            </div>
          ) : (
            <div>
              <img className='output' src={ghStats} alt='github stats' />
              <img className='output' src={ghStreak} alt='github streak' />
              <img
                className='output'
                src={ghTopLangs}
                alt='github top languages'
              />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
