import React from 'react'
import { useOptions } from '../../context/OptionsContext'

export const Username: React.FC = () => {
  const { username, setUsername } = useOptions()
  return (
    <div className="choices">
      <label>username</label>
      <input
        spellCheck="false"
        className="input"
        type="text"
        placeholder="input username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
    </div>
  )
}
