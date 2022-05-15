import React from 'react'
import { CustomPlaceholder } from 'react-placeholder-image';
import Container from './Container';

const Header = () => {
  return (
    <header className="p-6">
      <Container container_class={"space-y-10  md:space-y-12"}>
        <div className='flex justify-center items-center'>
          {/* <span className='inline-block text-xl cursor-pointer'>Wallets</span> */}
          <CustomPlaceholder width={75} height={75} className="rounded-full" />
          {/* <span className='inline-block text-xl cursor-pointer'>Dapps</span> */}
        </div>

        <div className='text-center'>
          <h1 className='text-5xl font-semibold text-center mb-4'>Wallets</h1>
          <p className='leading-relaxed'>
            Multiple iOS and Android wallets support the protocol. Simply scan a QR code from your desktop computer screen to start securely using a dApp with your mobile wallet. Interaction between mobile apps and mobile browsers are supported via mobile deep linking.
          </p>
        </div>
      </Container>
    </header>

  )
}

export default Header