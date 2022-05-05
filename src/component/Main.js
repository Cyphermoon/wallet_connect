import React, { useReducer } from 'react'
import Container from './Container'
import Figure from './Figure'
import ConnectModal from './ConnectModal'


let wallets = [...new Array(72)]

const Main = () => {
    const [isConnectModalDisplayed, toggleConnectModal] = useReducer((isConnectModalDisplayed) => !isConnectModalDisplayed, false)

    const displayModal = (title, src) => {
        toggleConnectModal(false)
    }

    return (
        <main>
            <Container>
                <div className='grid mx-auto grid-cols-2 place-items-center auto-rows-fr sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-screen-lg'>
                    {wallets.map((wallet, idx) => {
                        return (
                            <Figure key={idx} title="TrustWallet" src="#" displayModal={displayModal} />
                        )
                    })}
                </div>

                {isConnectModalDisplayed && <ConnectModal />}
            </Container>
        </main>
    )
}

export default Main