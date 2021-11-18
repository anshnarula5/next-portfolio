import React from 'react'
import Image from 'next/image'

import last from "../bg/last.svg"

const Connect = () => {
    return (
        <div>
            <Image src={last} layout="responsive" />
            <Email />
        </div>
    )
}

export default Connect
