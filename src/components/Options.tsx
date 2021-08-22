import React from 'react'
import { ThemeOption } from './options/Themes'
import { Username } from './options/Username'
import { Button } from './options/Button'
import { CountPrivate } from './options/CountPrivate'
import { Border } from './options/Border'

export const Options: React.FC = () => {
  return (
    <div className="text-base dmd:hidden">
      <div className="grid grid-cols-2 gap-4 w-[600px] px-2">
        <Username />
        <ThemeOption />
        <CountPrivate />
        <Border />
        <Button />
      </div>
    </div>
  )
}
