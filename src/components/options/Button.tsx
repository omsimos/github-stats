import React from 'react'
import { motion } from 'framer-motion'

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div className="col-span-2  text-center">
      <button onClick={() => props.copyStats()} className="btn">
        Copy to clipboard - [stats 💪]
      </button>

      <button onClick={() => props.copyLangs()} className="btn">
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
        animate={{ opacity: props.copied ? 1 : 0 }}
      >
        📋 copied to clipboard! paste it on the repo: {props.username}/
        {props.username}
      </motion.p>
    </div>
  )
}
