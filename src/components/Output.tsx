import React, { useEffect } from 'react'
import { useOptions } from '../context/OptionsContext'

export const Output: React.FC = () => {
  const {
    ghStats,
    ghStreak,
    ghTopLangs,
    userNotFound,
    setUserNotFound,
    username,
  } = useOptions()

  useEffect(() => {
    console.log('testing')
    setUserNotFound(false)
  }, [username])

  return (
    <div className="flex flex-col items-center mt-8 w-full">
      {userNotFound ? (
        <div className="text-lg border-b-4 border-green-400">
          <h1>username could not be found :(</h1>
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
  const { setUserNotFound } = useOptions()

  return (
    <img
      className="output"
      onError={() => setUserNotFound(true)}
      src={image}
      alt={alt}
    />
  )
}
