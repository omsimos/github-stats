interface OptionsProps {
  username: string
  theme: string
  countPrivate: string
  border: string
  copied: boolean
  compact: string
  copyStats: () => void
  copyLangs: () => void
  setUsername: React.Dispatch<React.SetStateAction<string>>
  setTheme: React.Dispatch<React.SetStateAction<string>>
  setCountPrivate: React.Dispatch<React.SetStateAction<string>>
  setBorder: React.Dispatch<React.SetStateAction<string>>
  setCompact: React.Dispatch<React.SetStateAction<string>>
}

interface Value extends OptionsProps {}
interface ChoicesProps {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  choice1?: string
  choice2?: string
}

interface ThemeOptionProps extends ChoicesProps {}

interface UsernameProps extends ChoicesProps {}

interface ButtonProps {
  copyStats: () => void
  copyLangs: () => void
  copied: boolean
  username: string
}