'use client'

import {Provider as JotaiProvider} from 'jotai'
import React from 'react'

export default function Providers({children}: React.PropsWithChildren) {
    return (
        <JotaiProvider>
            {children}
        </JotaiProvider>
    )
}