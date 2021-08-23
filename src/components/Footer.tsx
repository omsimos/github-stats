import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="flex dmd:flex-col dlg:flex-col justify-between px-32 dmd:px-4 dmd:items-center dlg:items-center w-full absolute bottom-0 py-3 bg-green-900 dlg:text-base">
      <p className="text-sm">© Josh Daniel 2021 • All Rights Reserved</p>
      <div className="dmd:mt-3">
        <Link href="https://github.com/joshxfi" info="GitHub" />
        <Link
          href="https://github.com/joshxfi/gh-stats-generator"
          info="Repository"
        />
        <Link href="https://joshdaniel.tk" info="Portfolio" />
      </div>
    </footer>
  )
}

const Link = ({ href, info }: { href: string; info: string }) => {
  return (
    <a className="link" href={href} target="_blank" rel="noreferrer">
      {info}
    </a>
  )
}

