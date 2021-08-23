import React from 'react'
import { useOptions } from '../context/OptionsContext'

export const Output: React.FC = () => {
  const { ghStats, ghStreak, ghTopLangs, username } = useOptions()

  return (
    <div className="flex flex-col items-center mt-8 w-full">
      {username === '' ? (
        <div className="text-lg border-b-4 border-green-400 dmd:hidden">
          <h1>input your username 😸</h1>
        </div>
      ) : (
        <div>
          <Image image={ghStats()} alt="github stats" />
          <Image image={ghStreak()} alt="github streak" />
          <Image image={ghTopLangs()} alt="github top languages" />
        </div>
      )}
    </div>
  )
}

const Image = ({ image, alt }: { image: string; alt: string }) => {
  return <img className="output" src={image} alt={alt} />
}
