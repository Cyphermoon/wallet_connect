import ReactDom from 'react-dom'
import Overlay from './Overlay'
import { MoonLoader } from 'react-spinners';

const Loading = ({ loadingMsg  }) => {
  return ReactDom.createPortal(
    <>
        <div className=" w-11/12 z-50 max-w-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 shadow-lg rounded-lg bg-white p-8">
            <div className='flex flex-col h-5/6 justify-evenly items-center'>
                <p className=' text-gray-800 text-xl sm:text-2xl'> {loadingMsg}</p> 
                <MoonLoader size={70} color="#549eff" />
            </div>

        </div>
       
        <Overlay />
    </>
  , document.getElementById("portal"))
}

Loading.defaultProps = {
    loadingMsg : "Connecting to your wallet"
}

export default Loading