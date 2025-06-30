'use client'

import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

export const queryClient = new QueryClient();

// @ts-ignore
export default function ReactQueryProvider({children}) {
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}