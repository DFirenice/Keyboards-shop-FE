import Heading from "@/components/ui/Heading"
import IconButton from "@/components/ui/IconButton"
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

const ShoppingCartPage = () => {
    return (
        <section className="w-full px-12 grid place-items-center min-h-dvh">
            <div className="container mx-auto">
                <div>
                    <Heading size="large">Shopping Cart</Heading>
                    <div className="w-1/2">
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
                </div>
            </div>
        </section>
    )
}

export default ShoppingCartPage