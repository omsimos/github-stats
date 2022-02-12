import React from 'react';
import { useOptions } from '../../context/OptionsContext';
import { themeValue, themeName } from '../../data/themeData';

export const ThemeOption: React.FC = () => {
  const { theme, setTheme } = useOptions();

  return (
    <div className='choices'>
      <label>theme</label>
      <select
        className='input appearance-none'
        onChange={(e) => setTheme(e.target.value)}
        value={theme}
      >
        {themeValue.map((val, i) => (
          <option key={themeName[i]} value={val}>
            {themeName[i]}
          </option>
        ))}
      </select>
    </div>
  );
};
