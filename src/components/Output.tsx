import React, { useState } from 'react'
import { useOptions } from '../context/OptionsContext'

export const Output: React.FC = () => {
  const [userNotFound, setUserNotFound] = useState<boolean>(false)
  const { ghStats, ghStreak, ghTopLangs } = useOptions()

  return (
    <div className="flex flex-col justify-center mt-8">
      <div>
        <h1>error!</h1>
      </div>

      <img className="output" src={ghStats()} alt="github stats" />
      <img className="output" src={ghStreak()} alt="github top languages" />
      <img className="output" src={ghTopLangs()} alt="github top languages" />
    </div>
  )
}
