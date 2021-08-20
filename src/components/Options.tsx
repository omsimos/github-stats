import React from "react";
import { motion } from "framer-motion";
import { ThemeOption } from "./ThemeOption";

export const Options: React.FC<OptionsProps> = props => {
  return (
    <div className=' text-xl dmd:hidden'>
      <div className='grid grid-cols-2 gap-4 w-[600px]'>
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
          <select
            className='input appearance-none'
            onChange={e => props.setBorder(e.target.value)}
            value={props.border}
          >
            <option value='true'>Hide Border</option>
            <option value='false'>Show Border</option>
          </select>
        </div>

        <div className='col-span-2  text-center'>
          <button onClick={() => props.copyStats()} className='btn'>
            Copy to clipboard - [stats 💪]
          </button>

          <button onClick={() => props.copyLangs()} className='btn'>
            Copy to clipboard - [top languages 🐲]
          </button>

          <button className='btn'>
            <a
              href='https://github.com/joshxfi/gh-stats-generator'
              target='_blank'
              rel='noreferrer'
            >
              Star the repository - [✨]
            </a>
          </button>

          <motion.p
            className='text-base'
            initial={{ opacity: 0 }}
            animate={{ opacity: props.copied ? 1 : 0 }}
          >
            📋 copied to clipboard! paste it on the repo: {props.username}/
            {props.username}
          </motion.p>
        </div>
      </div>
    </div>
  );
};
