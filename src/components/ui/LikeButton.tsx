import { cn } from "@/lib/utils"
import Icon from "@app-ui/Icon"

const LikeButton = ({ isWishListed = false }: { isWishListed: boolean }) => {
    return (
        <div className="z-10 cursor-pointer absolute top-6 right-6">
            <Icon
                strokeWidth={1}
                className={cn(
                    "text-foreground hover:fill-red-700 hover:text-red-700",
                    { "fill-red-700 text-red-700": isWishListed }
                )}
                id="heart" size="small"
            />
        </div>
    )
}

export default LikeButton