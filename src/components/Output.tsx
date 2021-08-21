import React from 'react'
import { useOptions } from '../context/OptionsContext'

export const Output: React.FC = () => {
  const { ghStats, ghTopLangs } = useOptions()

  return (
    <div className="flex flex-col justify-center mt-8">
      <img
        className="mb-4 outline-none shadow-lg w-[30rem]"
        src={ghStats()}
        alt="github stats"
      />
      <img
        className="outline-none shadow-lg w-[30rem]"
        src={ghTopLangs()}
        alt="github top languages"
      />
    </div>
  )
}
