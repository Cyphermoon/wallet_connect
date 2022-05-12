import React from 'react'
import { CustomPlaceholder } from 'react-placeholder-image'

const Error = () => {
  return (
    <div className=''>
        <figure className='border w-10/12 max-w-lg border-solid border-red-500 space-y-6 p-4 rounded-lg flex flex-col items-center'>

        <figcaption className='font-semibold text-lg text-red-600'>An Error has occurred trying to to connect to the wallet</figcaption>
            <CustomPlaceholder width={200} height={200}></CustomPlaceholder>
        </figure>
    </div>
  )
}

export default Error