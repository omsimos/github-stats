import React from 'react'
import { useOptions } from '../../context/OptionsContext'

export const CountPrivate: React.FC = () => {
  const { countPrivate, setCountPrivate } = useOptions()

  return (
    <div className="choices">
      <label>private commits</label>
      <select
        className="input appearance-none"
        onChange={(e) => setCountPrivate(e.target.value)}
        value={countPrivate}
      >
        <option value="true">Show Private Commits</option>
        <option value="false">Hide Private Commits</option>
      </select>
    </div>
  )
}
