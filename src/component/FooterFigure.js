import React from 'react'
import { CustomPlaceholder } from 'react-placeholder-image'

const FooterFigure = ({title, src, alt}) => {
  return (
    <figure className='flex justify-between items-center max-w-max'>
        <CustomPlaceholder width={40} height={40} className="mr-1" />
        <figcaption className='text-sm'>{ title || "" }</figcaption>
    </figure>
  )
}

export default FooterFigure