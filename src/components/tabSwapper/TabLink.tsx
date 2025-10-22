import { useTabs } from "@/contexts/tabsContext"
import { cn } from "@/lib/utils"
import { Button } from "@app-ui/button"

export const TabLink = (
    { value, children, className }:
    { value: string, children: React.ReactNode, className?: React.HTMLAttributes<HTMLButtonElement>["className"] }
) => {
    const { active, setActive } = useTabs()

    const isCurrent = active === value
    const changeTab = () => setActive(value)
    
    return (
        <Button
            variant="link"
            className={cn(
                "text-primary text-lg underline-offset-8 px-0",
                { "underline": isCurrent },
                className
            )}
            aria-selected={isCurrent}
            onClick={changeTab}
        >
            { children }
        </Button>
    )
}