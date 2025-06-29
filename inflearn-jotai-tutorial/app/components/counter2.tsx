'use client'

import {useAtom, useAtomValue} from 'jotai'
import {countAtom} from "@/app/config/atoms";

export default function Counter2() {
    const count = useAtomValue(countAtom);

    return (
        <div>
            Count : {count}
        </div>
    )
}