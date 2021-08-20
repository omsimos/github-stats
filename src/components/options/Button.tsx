import React from 'react'
import { motion } from 'framer-motion'
import { useOptions } from '../../context/OptionsContext'

export const Button: React.FC = () => {
  const { copyStats, copyLangs, copied, username } = useOptions()

  return (
    <div className="col-span-2  text-center">
      <button onClick={() => copyStats()} className="btn">
        Copy to clipboard - [stats 💪]
      </button>

      <button onClick={() => copyLangs()} className="btn">
        Copy to clipboard - [top languages 🐲]
      </button>

      <button className="btn">
        <a
          href="https://github.com/joshxfi/gh-stats-generator"
          target="_blank"
          rel="noreferrer"
        >
          Star the repository - [✨]
        </a>
      </button>

      <motion.p
        className="text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: copied ? 1 : 0 }}
      >
        📋 copied to clipboard! paste it on the repo: {username}/{username}
      </motion.p>
    </div>
  )
}
