interface OptionsProps {
  username: string;
  theme: string;
  countPrivate: string;
  border: string;
  copied: boolean;
  compact: string;
  copyStats: () => void;
  copyLangs: () => void;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setCountPrivate: React.Dispatch<React.SetStateAction<string>>;
  setBorder: React.Dispatch<React.SetStateAction<string>>;
  setCompact: React.Dispatch<React.SetStateAction<string>>;
}

interface ThemeOptionProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
