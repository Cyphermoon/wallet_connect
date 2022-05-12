import React from 'react'
import Container from './Container'
import FooterFigure from './FooterFigure'

const Footer = () => {
    return (
        <footer className='pb-8'>
            <Container container_class="flex justify-between items-center max-w-sm">
                <FooterFigure title={"Discord"} />
                <FooterFigure title={"Twitter"} />
                <FooterFigure title={"Github"} />
            </Container>
        </footer>
    )
}

export default Footer