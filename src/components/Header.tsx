import React from 'react'

export const Header = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl dmd:text-lg font-bold mt-16">
        GitHub README Stats Generator
      </h1>
      <a
        className="text-green-400 mr-2"
        href="https://github.com/anuraghazra/github-readme-stats"
        target="_blank"
        rel="noreferrer"
      >
        <i>stats from anuraghazra |</i>
      </a>
      <a
        className="text-green-400"
        href="https://github.com/DenverCoder1/github-readme-streak-stats"
        target="_blank"
        rel="noreferrer"
      >
        <i>streak stats from DenverCoder1</i>
      </a>
    </div>
  )
}
