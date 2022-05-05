import React, { useEffect, useState } from 'react'

const LoadWallet = () => {
    let initialData = "Connectiong"

    let [data, setData] = useState("Connecting")
    let [loading, setLoading] = useState(true)



    useEffect(() => {
        const connectWallet = new Promise((resolve, reject) => {
            setTimeout(() => resolve("Error Connecting"), 3000)
        })

        connectWallet.then((response) => {
            setData(response)
            setLoading(false)
        })
    }, [])

    return (
        <div className="flex justify-between items-center border-red-500 border-solid border text-red-600 py-2 px-4 rounded-md">
            <p>{data}...</p>

            {!loading && <button className='rounded-md bg-gray-700 text-xs leading-normal text-white w-1/4 p-2'>Connect Manually</button>}

        </div>
    )
}

export default LoadWallet