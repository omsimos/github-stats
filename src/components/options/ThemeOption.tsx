import React from 'react'
import { themeValue, themeName } from '../../data/themeData'

export const ThemeOption: React.FC<ThemeOptionProps> = (props) => {
  return (
    <div className="choices">
      <label>theme</label>
      <select
        className="input appearance-none"
        onChange={(e) => props.setValue(e.target.value)}
        value={props.value}
      >
        {themeValue.map((val, i) => (
          <option key={themeName[i]} value={val}>
            {themeName[i]}
          </option>
        ))}
      </select>
    </div>
  )
}
