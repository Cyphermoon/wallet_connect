import { createContext, useContext } from 'react'

const BaseContext = createContext()

export const useBaseContext = () => useContext(BaseContext)

const ContextProvider = ({ children }) => {

  return (
    <BaseContext.Provider value={""}>
      {children}
    </BaseContext.Provider>
  )
}

export default ContextProvider