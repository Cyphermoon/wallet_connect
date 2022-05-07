import { createContext, useContext, useReducer, useState } from 'react'

const BaseContext = createContext()

export const useBaseContext = () => useContext(BaseContext)

const ContextProvider = ({ children }) => {
  const [title, setTitle] = useState("")
  const [src, setSrc] = useState("")

  const [isConnectModalDisplayed, toggleConnectModal] = useReducer((isConnectModalDisplayed) => !isConnectModalDisplayed, false)

  const [isConnectManuallyModalDisplayed, toggleConnectManuallyModal] = useReducer((modalDisplayed) => !modalDisplayed, false)


  const toggleModal = (modalTitle, connectModalSrc) => {
    toggleConnectModal()
    setTitle(modalTitle)
    setSrc(connectModalSrc)
  }

  const handleManualModal = () => {
    toggleConnectModal()
    toggleConnectManuallyModal()
  }

  return (
    <BaseContext.Provider value={{ handleManualModal, toggleModal, isConnectManuallyModalDisplayed, title, src, isConnectModalDisplayed }}>
      {children}
    </BaseContext.Provider>
  )
}

export default ContextProvider