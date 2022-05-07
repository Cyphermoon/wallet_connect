import React, { useReducer, useState } from 'react'
import Container from './Container'
import Figure from './Figure'
import ConnectModal from './ConnectModal'
import ConnectManuallyModal from './ConnectManuallyModal'
import { useBaseContext } from '../ContextProvider'


let wallets = [...new Array(20)]

const Main = () => {

    const { isConnectManuallyModalDisplayed, title, src, toggleModal, handleManualModal, isConnectModalDisplayed } = useBaseContext()

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
                {isConnectModalDisplayed && <ConnectModal toggleModal={toggleModal} title={title} src={src} />}

                {isConnectManuallyModalDisplayed && <ConnectManuallyModal />}
            </Container>
        </main>
    )
}

export default Main