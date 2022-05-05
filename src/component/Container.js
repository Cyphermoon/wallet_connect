import React from 'react'

const Container = ({ children, container_class }) => {
    return (
        <div className={`container px-4 ${container_class}`}>
            {children}
        </div>
    )
}

Container.defaultProps = {
    container_class: ""
}

export default Container