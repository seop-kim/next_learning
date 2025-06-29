'use client'

import {useAtom} from 'jotai'
import {countAtom} from "@/app/config/atoms";

export default function Counter() {
    const [count, setCount] = useAtom(countAtom);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Count : {count}
            </button>
        </div>
    )
}