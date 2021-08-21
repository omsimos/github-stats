interface Value {
  username: string
  theme: string
  countPrivate: string
  border: string
  copied: boolean
  compact: string
  copyStats: () => void
  copyLangs: () => void
  ghStats: () => string
  ghTopLangs: () => string
  ghStreak: () => string
  setUsername: React.Dispatch<React.SetStateAction<string>>
  setTheme: React.Dispatch<React.SetStateAction<string>>
  setCountPrivate: React.Dispatch<React.SetStateAction<string>>
  setBorder: React.Dispatch<React.SetStateAction<string>>
  setCompact: React.Dispatch<React.SetStateAction<string>>
}