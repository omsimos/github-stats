import React from "react";

interface ThemeOptionProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeOption: React.FC<ThemeOptionProps> = ({ theme, setTheme }) => {
  return (
    <div className='choices'>
      <label>theme</label>
      <select className='input appearance-none' onChange={e => setTheme(e.target.value)} value={theme}>
        <option value='default'>Default</option>
        <option value='dark'>Dark</option>
        <option value='radical'>Radical</option>
        <option value='merko'>Merko</option>
        <option value='gruvbox'>Gruvbox</option>
        <option value='tokyonight'>Tokyo Night</option>
        <option value='onedark'>One Dark</option>
        <option value='cobalt'>Cobalt</option>
        <option value='synthwave'>Synthwave</option>
        <option value='highcontrast'>High Contrast</option>
        <option value='dracula'>Dracula</option>
        <option value='prussian'>Prussian</option>
        <option value='monokai'>Monokai</option>
        <option value='vue'>Vue</option>
        <option value='vue-dark'>Vue Dark</option>
        <option value='shades-of-purple'>Shade of Purple</option>
        <option value='nightowl'>Nightowl</option>
        <option value='buefy'>Buefy</option>
      </select>
    </div>
  );
};
