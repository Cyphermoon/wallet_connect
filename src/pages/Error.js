import React from 'react'
import { CustomPlaceholder } from 'react-placeholder-image'

const Error = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <figure className='border w-10/12 max-w-lg border-solid border-red-500 space-y-6 p-5 rounded-lg flex flex-col items-center'>

        <figcaption className='font-semibold text-xl text-red-600'>An Error has occurred trying to to connect to the wallet</figcaption>

            <CustomPlaceholder width={150} height={150}></CustomPlaceholder>
        </figure>
    </div>
  )
}

export default Error