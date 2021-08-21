import React, { useContext, createContext, useState } from 'react'

export const OptionsContext = createContext<Value>({} as Value)

export const useOptions = () => {
  return useContext(OptionsContext)
}

interface OptionsProps {
  children: React.ReactNode
}

export const OptionsProvider = ({ children }: OptionsProps) => {
  const [username, setUsername] = useState<string>('joshxfi')
  const [theme, setTheme] = useState<string>('vue-dark')
  const [border, setBorder] = useState<string>('true')
  const [countPrivate, setCountPrivate] = useState<string>('true')
  const [copied, setCopied] = useState<boolean>(false)
  const [compact, setCompact] = useState<string>('compact')

  const ghStats = () => {
    return `https://github-readme-stats.vercel.app/api?username=${username}&theme=${theme}&show_icons=true&hide_border=${border}&count_private=${countPrivate}`
  }

  const ghTopLangs = () => {
    return `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=${theme}&show_icons=true&hide_border=${border}&layout=${compact}`
  }

  const copyStats = () => {
    if (username) {
      navigator.clipboard.writeText(`![${username}\'s Stats](${ghStats()})`)
      setCopied(true)

      setTimeout(() => setCopied(false), 4000)
    }
    return
  }

  const copyLangs = () => {
    if (username) {
      navigator.clipboard.writeText(
        `![${username}\'s Top Languages](${ghTopLangs()})`
      )
      setCopied(true)

      setTimeout(() => setCopied(false), 4000)
    }
    return
  }

  const value: Value = {
    username,
    theme,
    countPrivate,
    border,
    copied,
    compact,
    copyStats,
    copyLangs,
    ghStats,
    ghTopLangs,
    setUsername,
    setTheme,
    setCountPrivate,
    setBorder,
    setCompact,
  }

  return (
    <OptionsContext.Provider value={value}>{children}</OptionsContext.Provider>
  )
}
