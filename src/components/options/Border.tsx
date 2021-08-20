import React from 'react'
import { useOptions } from '../../context/OptionsContext'

export const Border: React.FC = () => {
  const { border, setBorder } = useOptions()

  return (
    <div className="choices">
      <label>private commits</label>
      <select
        className="input appearance-none"
        onChange={(e) => setBorder(e.target.value)}
        value={border}
      >
        <option value="true">Hide Border</option>
        <option value="false">Show Border</option>
      </select>
    </div>
  )
}
