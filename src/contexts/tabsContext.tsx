'use client'

import { createContext, useContext, useState } from "react"

export type TTabsContext = {
    active: string
    setActive: (tab: string) => void
}

const TabsProvider = createContext<TTabsContext | null>(null)
export const Tabs = ({ defaultTab, children }: { defaultTab: string, children: React.ReactNode }) => {
    const [ active, setActive ] = useState(defaultTab)

    return <TabsProvider.Provider value={{ active, setActive }}>
        { children }
    </TabsProvider.Provider>
}

export const useTabs = () => {
    const ctx = useContext(TabsProvider)
    if (!ctx) throw new Error('`useTabs` must be within `TabsProvider`')
    return ctx
}