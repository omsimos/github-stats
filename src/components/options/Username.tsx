import React from 'react'

export const Username: React.FC<UsernameProps> = (props) => {
  return (
    <div className="choices">
      <label>username</label>
      <input
        className="input"
        type="text"
        placeholder="input username"
        onChange={(e) => props.setValue(e.target.value)}
        value={props.value}
      />
    </div>
  )
}
