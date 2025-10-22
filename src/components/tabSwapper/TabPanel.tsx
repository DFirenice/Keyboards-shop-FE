import { useTabs } from "@/contexts/tabsContext"

export const TabPanel = ({ value, children }: { value: string, children: React.ReactNode }) => {
    const { active } = useTabs()
    const isCurrent = active === value
    return isCurrent ? (
        <div role="tabpanel">
            { children }
        </div>
    ) : null
}