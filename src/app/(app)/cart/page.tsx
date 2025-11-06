import { Button } from "@/components/ui/button"
import Heading from "@/components/ui/Heading"
import IconButton from "@/components/ui/IconButton"
import { cn } from "@/lib/utils"
import Image from "next/image"

const cartItems = [
  {
    id: '25139526913984',
    name: 'Apple iPhone 14 Pro Max',
    variant: '128Gb Deep Purple',
    quantity: 1,
    price: 1399,
    image: '/images/sample_keyboard.png'
  },
  {
    id: '53459358345',
    name: 'AirPods Max',
    variant: 'Silver',
    quantity: 1,
    price: 549,
    image: '/images/sample_headphones.png'
  },
  {
    id: '63632324',
    name: 'Apple Watch Series 9 GPS',
    variant: '41mm Starlight Aluminium',
    quantity: 1,
    price: 399,
    image: '/images/sample_microphone.png'
  }
]

const PriceLabel = ({ label, price, isLeading }: { label: string, price: number, isLeading?: boolean }) => {
    return (
        <div className={cn("flex flex-row justify-between gap-2 text-sm", { "my-3 text-md": isLeading })}>
            <span className={cn({ "font-semibold": isLeading })}>{label}</span>
            <span className="font-semibold font-mono">${price}</span>
        </div>
    )
}

const ShoppingCartPage = () => {
    return (
        <section className="w-full px-12 grid place-items-center min-h-dvh">
            <div className="container mx-auto">
                <Heading size="large">Shopping Cart</Heading>
                <div className="flex flex-wrap flex-row *:grow justify-between gap-12">
                    <div>
                        <ul className="*:not-last:border-b-border *:not-last:border-b-2">
                            { cartItems.map(({ id, price, image, quantity, name }) => (
                                <div key={id} className="relative flex flex-row gap-8 items-center py-8">
                                    <div className="relative h-full aspect-square w-32">
                                        <Image fill src={image} alt={name} />
                                    </div>
                                    <div>
                                        <Heading size="medium" className="font-medium text-wrap mb-2">{ name }</Heading>
                                        <span>#{ id }</span>
                                    </div>
                                    <div className="ml-auto">
                                        { quantity }
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                        <Heading size="large" className="font-medium font-mono">${price}</Heading>
                                        <IconButton strokeWidth={1} icon="x" size="small" />
                                    </div>
                                </div>
                            )) }
                        </ul>
                    </div>
                    <div className="rounded-2xl border-border border-1 p-12 space-y-8 sticky">
                        <Heading className="font-medium" size="medium">Order Summary</Heading>
                        <div className="flex flex-col gap-2">
                            <span>Discount code / Promo code</span>
                            <input placeholder="Code" className="px-2 py-4 border-border border-1 rounded-md text-secondary-foreground" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span>Your bonus card number</span>
                            <input placeholder="Enter card number" className="px-2 py-4 border-border border-1 rounded-md text-secondary-foreground" />
                        </div>
                        <div>
                            <PriceLabel isLeading label="Subtotal" price={2301} />

                            <PriceLabel label="Estimated tax" price={50} />
                            <PriceLabel label="Estimated shipping & Handling" price={29} />
                            
                            <PriceLabel isLeading label="Total" price={2938} />
                        </div>
                        <Button className="w-full py-6" size="lg">Checkout</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShoppingCartPage