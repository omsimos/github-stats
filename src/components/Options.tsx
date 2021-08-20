import React from 'react'
import { ThemeOption } from './options/ThemeOption'
import { Choices } from './options/Choices'
import { Username } from './options/Username'
import { Button } from './options/Button'

export const Options: React.FC<OptionsProps> = (props) => {
  return (
    <div className=" text-xl dmd:hidden">
      <div className="grid grid-cols-2 gap-4 w-[600px] px-2">
        <Username value={props.username} setValue={props.setUsername} />

        <ThemeOption value={props.theme} setValue={props.setTheme} />

        <Choices
          value={props.countPrivate}
          setValue={props.setCountPrivate}
          choice1="Show Private Commits"
          choice2="Hide Private Commits"
        />

        <Choices
          value={props.border}
          setValue={props.setBorder}
          choice1="Hide Border"
          choice2="Show Border"
        />

        <Button
          copyStats={props.copyStats}
          copyLangs={props.copyLangs}
          copied={props.copied}
          username={props.username}
        />
      </div>
    </div>
  )
}
