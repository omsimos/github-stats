import React from 'react'

export const Choices: React.FC<ChoicesProps> = (props) => {
  return (
    <div className="choices">
      <label>private commits</label>
      <select
        className="input appearance-none"
        onChange={(e) => props.setValue(e.target.value)}
        value={props.value}
      >
        <option value="true">{props.choice1}</option>
        <option value="false">{props.choice2}</option>
      </select>
    </div>
  )
}
