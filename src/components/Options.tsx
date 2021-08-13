import React from "react";
import { motion } from "framer-motion";
import { ThemeOption } from "./ThemeOption";

interface OptionsProps {
  username: string;
  theme: string;
  countPrivate: string;
  border: string;
  copied: boolean;
  copyToClipboard: () => void;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setCountPrivate: React.Dispatch<React.SetStateAction<string>>;
  setBorder: React.Dispatch<React.SetStateAction<string>>;
}

export const Options: React.FC<OptionsProps> = props => {
  return (
    <div className='text-xl grid grid-cols-2 mt-8 gap-4 dmd:hidden'>
      <div className='choices'>
        <label>username</label>
        <input
          className='input'
          type='text'
          placeholder='input username'
          onChange={e => props.setUsername(e.target.value)}
          value={props.username}
        />
      </div>

      <ThemeOption theme={props.theme} setTheme={props.setTheme} />

      <div className='choices'>
        <label>private commits</label>
        <select
          className='input appearance-none'
          onChange={e => props.setCountPrivate(e.target.value)}
          value={props.countPrivate}
        >
          <option value='true'>Show Private Commits</option>
          <option value='false'>Hide Private Commits</option>
        </select>
      </div>

      <div className='choices'>
        <label>border</label>
        <select className='input appearance-none' onChange={e => props.setBorder(e.target.value)} value={props.border}>
          <option value='true'>Hide Border</option>
          <option value='false'>Show Border</option>
        </select>
      </div>

      <div className='col-span-2  text-center'>
        <button
          onClick={() => props.copyToClipboard()}
          className='bg-gray-800 h-10 w-full text-lg rounded-lg shadow-lg transition duration-300 hover:bg-gray-700 focus:ring ring-gray-600 ring-offset-4 ring-offset-gray-900'
        >
          Copy to Clipboard
        </button>
        <motion.p className='mt-4 text-base' initial={{ opacity: 0 }} animate={{ opacity: props.copied ? 1 : 0 }}>
          📋 copied to clipboard! paste it on the repo: {props.username}/{props.username}
        </motion.p>
      </div>
    </div>
  );
};
