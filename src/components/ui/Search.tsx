import { cn } from "@/lib/utils"
import Icon from "@app-ui/Icon"
import { useTranslations } from "next-intl"

export type TSearchProps = {
    className?: React.HTMLAttributes<HTMLInputElement>["className"]
    placeholder?: string
    theme?: "dark" | "light"
}

const Search = ({ className, placeholder, theme }: TSearchProps) => {
    const t = useTranslations("header")
    return (
        <div className={cn(
            "rounded-md px-4 bg-background-elevated flex flex-row gap-2 items-center w-full w-max-96",
            className
        )}>
            <Icon id="search" size="tiny" className="text-muted-foreground" />
            <input
                className="text-sm text-secondary-foreground outline-none py-1 h-10 w-full text-ellipsis"
                placeholder={placeholder ? placeholder : t("search")}
            />
        </div>
    )
}

export default Search