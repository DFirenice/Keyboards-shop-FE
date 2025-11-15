'use client'

import { Button } from "@/components/ui/button"
import Heading from "@/components/ui/Heading"
import IconButton from "@/components/ui/IconButton"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useShoppingCart } from "@/stores/shoppingCart.store"
import Link from "next/link"
import { useTranslations } from "next-intl"

const PriceLabel = ({ label, price, isLeading }: { label: string, price: number, isLeading?: boolean }) => {
    return (
        <div className={cn("flex flex-row justify-between gap-2 text-sm", { "my-3 text-md": isLeading })}>
            <span className={cn({ "font-semibold": isLeading })}>{label}</span>
            <span className="font-semibold text-md">${price}</span>
        </div>
    )
}

const ShoppingCartPage = () => {
    const t = useTranslations('cart')

    const cart = useShoppingCart(state => state.cart),
        addItem = useShoppingCart(state => state.addItem),
        removeItem = useShoppingCart(state => state.removeItem),
        updateQuantity = useShoppingCart(state => state.updateQuantity)

    const estimateTotal = () => {
        const subtotal = cart.reduce((a, c) => a + (c.price * c.quantity), 0)
        const tax = subtotal * 0.03 // test 3%
        const shipping = 15
        const total = subtotal + tax + shipping

        const f = (n: number) => +n.toFixed(2)

        return {
            subtotal: f(subtotal),
            tax: f(tax),
            shipping: f(shipping),
            total: f(total)
        }
    }

    const { subtotal, tax, shipping, total } = estimateTotal()

    return (
        <section className="w-full px-12 grid place-items-center min-h-dvh">
            <div className="container mx-auto">
                <Heading size="large">{t("shopping-cart")}</Heading>
                <div className="flex flex-wrap flex-row *:grow justify-between gap-12">
                    <div>
                        <ul className="space-y-4">
                            { cart.map(({ id, price, image, quantity, name }) => (
                                <div key={id} className="relative flex flex-row gap-8 items-center py-8 rounded-lg shadow px-6">
                                    <div className="relative h-full aspect-square w-32">
                                        <Image fill src={image} alt={name} />
                                    </div>
                                    <div>
                                        <Heading size="medium" className="font-medium text-wrap mb-2">{name}</Heading>
                                        <span>#{id}</span>
                                    </div>
                                    <div className="flex flex-row items-center gap-2 ml-auto">
                                        <Heading size="medium" className="font-medium mx-6">${price}</Heading>
                                        <div className="grid items-center gap-1">
                                            <IconButton icon="plus" size="tiny" onClick={() => {updateQuantity(id, quantity + 1)}} />
                                            <input className="border-border border rounded-md text-center w-10 h-10" placeholder="..." value={quantity} />
                                            <IconButton icon="minus"  size="tiny" onClick={() => updateQuantity(id, (quantity - 1) > 0 ? quantity-1 : 1)} />
                                        </div>
                                        <IconButton onClick={() => { removeItem(id) }} strokeWidth={1} icon="x" size="small" />
                                    </div>
                                </div>
                            )) }
                        </ul>
                    </div>
                    <div className="rounded-2xl border-border border p-12 space-y-8 sticky">
                        <Heading className="font-medium" size="medium">{t("summary")}</Heading>
                        <div className="flex flex-col gap-2">
                            <span>{t("discount-code")}</span>
                            <input placeholder={t("placeholder.discount-code")} className="px-2 py-4 border-border border rounded-md text-secondary-foreground" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span>{t("bonus-card")}</span>
                            <input placeholder={t("placeholder.card-number")} className="px-2 py-4 border-border border rounded-md text-secondary-foreground" />
                        </div>
                        <div>
                            <PriceLabel isLeading label={t("subtotal")} price={subtotal} />

                            <PriceLabel label={t("estimated-tax")} price={tax} />
                            <PriceLabel label={t("estimated-shipping")} price={shipping} />

                            <PriceLabel isLeading label={t("total")} price={total} />
                        </div>
                        <Link href="/checkout">
                            <Button className="w-full py-6" size="lg">{t("checkout-button")}</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShoppingCartPage