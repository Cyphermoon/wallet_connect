import React, { useReducer, useState } from 'react'
import Container from './Container'
import Figure from './Figure'
import ConnectModal from './ConnectModal'
import ConnectManuallyModal from './ConnectManuallyModal'


let wallets = [...new Array(20)]

const Main = () => {
    const [title, setTitle] = useState("")
    const [src, setSrc] = useState("")

    const [isConnectModalDisplayed, toggleConnectModal] = useReducer((isConnectModalDisplayed) => !isConnectModalDisplayed, false)


    const [isConnectManuallyModalDisplayed, toggleConnectManuallyModal] = useReducer((modalDisplayed) => !modalDisplayed, false)



    const handleManualModal = () => {
        toggleConnectModal()
        toggleConnectManuallyModal()
    }

    const closeConnectManualModal = () => {
        toggleConnectManuallyModal()
    }

    const toggleModal = (modalTitle, connectModalSrc) => {
        toggleConnectModal()
        setTitle(modalTitle)
        setSrc(connectModalSrc)
    }

    return (
        <main>
            <Container>
                <div className='grid mx-auto grid-cols-2 place-items-center auto-rows-fr sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-screen-lg'>
                    {wallets.map((wallet, idx) => {
                        return (
                            <Figure key={idx} title="TrustWallets" src="#" toggleModal={toggleModal} />
                        )
                    })}
                </div>
                {isConnectModalDisplayed && <ConnectModal handleManualModal={handleManualModal} toggleModal={toggleModal} title={title} src={src} />}

                {isConnectManuallyModalDisplayed && <ConnectManuallyModal closeConnectManualModal={closeConnectManualModal} title={title} src={src} />}
            </Container>
        </main>
    )
}

export default Main