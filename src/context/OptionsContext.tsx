import React, { useContext, createContext, useState } from 'react'

export const OptionsContext = createContext<Value>({} as Value)

export const useOptions = () => {
  return useContext(OptionsContext)
}

interface OptionsProps {
  children: React.ReactNode
}

export const OptionsProvider = ({ children }: OptionsProps) => {
  const [username, setUsername] = useState<string>('')
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

  const ghStreak = () => {
    return `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&hide_border=${border}`
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

  const copyStreak = () => {
    if (username) {
      navigator.clipboard.writeText(`![${username}\'s Streak](${ghStreak()})`)
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
    copyStreak,
    ghStats,
    ghTopLangs,
    ghStreak,
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
