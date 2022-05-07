import React, { useEffect, useState } from 'react'
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import { PulseLoader } from 'react-spinners';
import { useBaseContext } from '../ContextProvider';


const LoadWallet = () => {
    let [data, setData] = useState(null)

    const { handleManualModal } = useBaseContext()
    const { promiseInProgress } = usePromiseTracker()

    useEffect(() => {
        const connectWallet = new Promise((resolve, reject) => {
            setTimeout(() => resolve("Error Connecting"), 3000)
        })

        trackPromise(
            connectWallet
                .then((response) => {
                    setData(response)
                })
                .catch(err => console.error(err))
        )
    }, [])


    return (
        <>
            <div className="flex justify-between items-center border-red-500 border-solid border text-red-600 py-2 px-4 rounded-md">

                <p>{promiseInProgress ? <>
                    Connecting
                    <PulseLoader size={3} color="red" />
                </>
                    : data}</p>

                {!promiseInProgress && <button className='rounded-md bg-gray-700 text-xs leading-normal text-white w-1/4 p-2' onClick={handleManualModal}>Connect Manually</button>}
            </div>
        </>

    )
}

export default LoadWallet