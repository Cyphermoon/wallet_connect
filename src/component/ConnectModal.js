import React from 'react'
import { CustomPlaceholder } from 'react-placeholder-image'
import Container from './Container'

const ConnectModal = () => {
    return (
        <section className='fixed top-2/4 left-2/4 w-5/6 -translate-x-1/2 -translate-y-1/2 max-w-lg bg-white shadow-2xl rounded-lg overflow-hidden space-y-8 h-max pb-4'>
            
            <div className='py-2 px-4 bg-gray-300'>
                <Container container_class={"flex justify-between items-center"}>
                    <button className='text-xl text-blue-400'>back</button>
                    <button className='text-red-400 text-2xl'>&times;</button>
                </Container>
            </div>

            <div>
                <Container container_class="space-y-6">
                    <div className="flex justify-between items-center border-red-500 border-solid border text-red-600 py-2 px-4 rounded-md">
                        <p>Error Connecting...</p>
                        <button className='rounded-md bg-gray-700 text-xs leading-snug text-white w-1/4 p-2'>Connect Manually</button>
                    </div>
                    <div className="flex justify-between items-center border-black border-solid border py-2 px-4 rounded-md" >
                        <div>
                        <h5 className='font-normal text-lg'>Wallect</h5>
                        <p className='text-sm text-gray-500'>easy to use browser extension</p>
                        </div> 
                        <CustomPlaceholder width={30} height={30}/>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default ConnectModal