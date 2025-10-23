import { cn } from "@/lib/utils"
import Icon from "@app-ui/Icon"

const LikeButton = ({ isWishListed = false }: { isWishListed: boolean }) => {
    return (
        <div className="z-10 cursor-pointer absolute top-6 right-6">
            <Icon
                strokeWidth={1}
                className={cn(
                    "text-foreground hover:fill-red-500 hover:text-red-500",
                    { "fill-red-500 text-red-500": isWishListed }
                )}
                id="heart" size="small"
            />
        </div>
    )
}

export default LikeButton