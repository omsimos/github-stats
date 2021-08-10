import "./tailwind.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const App: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [theme, setTheme] = useState<string>("tokyonight");
  const [border, setBorder] = useState<string>("true");
  const [countPrivate, setCountPrivate] = useState<string>("false");
  const [copied, setCopied] = useState<boolean>(false);

  const ghStats = () => {
    return `https://github-readme-stats.vercel.app/api?username=${username}&theme=${theme}&show_icons=true&hide_border=${border}&count_private=${countPrivate}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`![${username}\'s Stats](${ghStats()})`);
    setCopied(true);

    setTimeout(() => setCopied(false), 4000);
  };

  return (
    <div className='h-screen bg-gray-900 font-mono text-gray-200 flex flex-col items-center'>
      <div>
        <h1 className='text-4xl font-bold mt-16'>GitHub README Stats Generator</h1>
      </div>
      <div className='text-xl grid grid-cols-2 my-8 gap-4'>
        <div className='choices'>
          <label>username</label>
          <input
            className='input'
            type='text'
            placeholder='input username'
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
        </div>

        <div className='choices'>
          <label>private commits</label>
          <select
            className='input appearance-none'
            onChange={e => setCountPrivate(e.target.value)}
            value={countPrivate}
          >
            <option value='true'>Show Private Commits</option>
            <option value='false'>Hide Private Commits</option>
          </select>
        </div>

        <div className='choices'>
          <label>theme</label>
          <select className='input appearance-none' onChange={e => setTheme(e.target.value)} value={theme}>
            <option value='default'>Default</option>
            <option value='dark'>Dark</option>
            <option value='radical'>Radical</option>
            <option value='merko'>Merko</option>
            <option value='gruvbox'>Gruvbox</option>
            <option value='tokyonight'>Tokyo Night</option>
          </select>
        </div>

        <div className='choices'>
          <label>border</label>
          <select className='input appearance-none' onChange={e => setBorder(e.target.value)} value={border}>
            <option value='true'>Hide Border</option>
            <option value='false'>Show Border</option>
          </select>
        </div>

        <div className='col-span-2 text-center'>
          <button
            onClick={() => copyToClipboard()}
            className='bg-gray-800 h-10 w-full text-lg px-4 rounded-lg shadow-lg transition duration-300 hover:bg-gray-700 focus:ring focus:ring-gray-700'
          >
            Copy to Clipboard
          </button>
          <motion.p className='mt-4 text-base' initial={{ opacity: 0 }} animate={{ opacity: copied ? 1 : 0 }}>
            📋 copied to clipboard! paste it on the repo: {username}/{username}
          </motion.p>
        </div>
      </div>

      <div>
        {username ? (
          <img className='outline-none shadow-lg' src={ghStats()} alt='github stats' />
        ) : (
          <h1 className='text-2xl text-green-400'>input your username!</h1>
        )}
      </div>
    </div>
  );
};

export default App;
