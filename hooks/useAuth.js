import { View, Text } from 'react-native'
import React, { createContext } from 'react'

const context = createContext({
})
export const AuthProvider = ({children}) => {
    //HOC -Higher Order Component
  return (
    <context.Provider value={{}}>
      {children}
    </context.Provider>
  )
}

