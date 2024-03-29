import ReactDom from 'react-dom'
import { CustomPlaceholder } from 'react-placeholder-image'
import Container from './Container'
import LoadWallet from './LoadWallet'
import Overlay from './Overlay'

const ConnectModal = ({ title, toggleModal, handleManualModal, src }) => {

    return ReactDom.createPortal(
        <>
            <section className='fixed z-50 top-2/4 left-2/4 w-5/6 -translate-x-1/2 -translate-y-1/2 max-w-lg bg-white shadow-2xl rounded-lg overflow-hidden space-y-8 h-max pb-4'>

                <div className='py-2 px-4 bg-gray-300'>
                    <Container container_class={"flex justify-between items-center"}>
                        <button className='text-xl text-blue-400' onClick={toggleModal}>back</button>
                        <button className='text-red-400 text-2xl' onClick={toggleModal}>&times;</button>
                    </Container>
                </div>

                <div>
                    <Container container_class="space-y-6">
                        <LoadWallet handleManualModal={handleManualModal} />
                        <div className="flex justify-between items-center border-black border-solid border py-2 px-4 rounded-md" >
                            <div>
                                <h5 className='font-normal text-lg'>{title || "Wallet"}</h5>
                                <p className='text-sm text-gray-500'>easy to use browser extension</p>
                            </div>
                            <CustomPlaceholder width={30} height={30} />
                        </div>
                    </Container>
                </div>
            </section>

            <Overlay />
        </>
        ,
        document.getElementById("portal")
    )
}

ConnectModal.defaultProps = {
    title: "Wallet",
    src: "Connect Logo"
}



export default ConnectModal