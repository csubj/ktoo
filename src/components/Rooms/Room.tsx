import React from 'react'

type Props = {
    title: string
}

const Room: React.FC<Props> = ({ children }) => {
    return <div>{children}</div>
}


export default Room