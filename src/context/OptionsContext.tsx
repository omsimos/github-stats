import { useContext, createContext } from 'react'

export const OptionsContext = createContext<Value>({} as Value)

export const useOptions = () => {
  return useContext(OptionsContext)
}
