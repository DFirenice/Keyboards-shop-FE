import { useTranslations } from "next-intl"
import LikeButton from "@/components/ui/LikeButton"
import Image from "next/image"
import Heading from "@app-ui/Heading"
import { Button } from "@app-ui/button"

const ProductCard = () => {
    const t = useTranslations()
    
    return (
        <div className="relative flex justify-center items-center flex-col bg-input min-w-68 w-68 h-fit rounded-md py-4 px-4">
            <LikeButton isWishListed={false} />
            <div className="relative w-[75%] h-48 mx-6">
                <Image src="/images/sample_keyboard.png" alt="Keyboard" objectFit="cover" className="pointer-events-none" fill />
            </div>
            <div className="text-center mb-6">
                <Heading level={3} className="font-medium">Meletrix Zoom65 v2.5</Heading>
                <Heading level={3} size="large" className="font-bold font-mono mt-2">$120</Heading>
            </div>
            <Button size="lg" className="w-[90%] mx-auto">{ t("misc.buy-now") }</Button>
        </div>
    )
}

export default ProductCard