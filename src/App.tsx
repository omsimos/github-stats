import React, { useState } from 'react';
import { Footer, Header, Select, IChoice } from './components';
import { themes } from './data';

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [theme, setTheme] = useState({} as IChoice);
  const [border, setBorder] = useState({} as IChoice);
  const [countPrivate, setCountPrivate] = useState({} as IChoice);

  const ghStats = `https://github-readme-stats.vercel.app/api?username=${username}&theme=${theme}&show_icons=true&hide_border=${border}&count_private=${countPrivate}`;

  const ghTopLangs = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=${theme}&show_icons=true&hide_border=${border}&layout=compact`;

  const ghStreak = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&hide_border=${border}`;

  const copyToClipboard = (text: string) => {
    if (username) navigator.clipboard.writeText(text);
  };

  return (
    <div className='min-h-screen relative flex flex-col pb-24'>
      <Header />

      <div className='flex justify-center max-w-screen-xl w-full mx-auto mt-8'>
        <div className='flex flex-col w-full'>
          <div className='grid grid-cols-2 gap-x-4 gap-y-8'>
            <div className='flex flex-col w-full'>
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
              defaultValue={themes[14]}
              onChange={(e) => setTheme(e)}
              options={themes}
            />

            <Select
              defaultValue={{ value: 'true', name: 'Show Private Commits' }}
              onChange={(e) => setCountPrivate(e)}
              label='private commits'
              options={[
                { value: 'true', name: 'Show Private Commits' },
                { value: 'false', name: 'Hide Private Commits' },
              ]}
            />

            <Select
              defaultValue={{ value: 'true', name: 'Show Border' }}
              onChange={(e) => setBorder(e)}
              label='show border'
              options={[
                { value: 'true', name: 'Hide Border' },
                { value: 'false', name: 'Show Border' },
              ]}
            />
          </div>

          <div className='col-span-2 text-center mt-8'>
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
            <button className='btn mt-8'>
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

        <div className='flex flex-col items-center w-full'>
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
