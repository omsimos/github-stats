import React from 'react'
import { motion } from 'framer-motion'
import { useOptions } from '../../context/OptionsContext'

export const Button: React.FC = () => {
  const { copyStats, copyStreak, copyLangs, copied, username } = useOptions()

  return (
    <div className="col-span-2  text-center">
      <div className="mb-4 border-t-4 border-b-4 py-4 border-green-600 rounded-lg">
        <p className="pb-4">[ copy to clipboard ]</p>

        <div className="flex gap-4">
          <button onClick={() => copyStats()} className="btn">
            stats 💪
          </button>

          <button onClick={() => copyStreak()} className="btn">
            streak 🚀
          </button>
        </div>

        <button onClick={() => copyLangs()} className="btn">
          top languages 🏅
        </button>
      </div>
      <button className="btn">
        <a
          href="https://github.com/joshxfi/gh-stats-generator"
          target="_blank"
          rel="noreferrer"
        >
          star this repository ✨
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
