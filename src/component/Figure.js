import React from 'react'
import { CustomPlaceholder } from 'react-placeholder-image'
import PropTypes from "prop-types"

const Figure = ({ title, src, alt, toggleModal, rest }) => {
    return (
        <figure style={{ ...rest }} className="justify-items-center min-w-0 w-5/6 shadow-md rounded-xl px-4 py-4 text-center" onClick={() => toggleModal(title, src)}>
            <CustomPlaceholder width={150} height={150} className="inline-block mb-4 max-w-fll h-auto" />
            <figcaption className='text-sm sm:text-base sm:font-normal font-semibold'>{title || ""}</figcaption>
        </figure>
    )
}

Figure.propTypes = {
    title: PropTypes.string,
}

export default Figure