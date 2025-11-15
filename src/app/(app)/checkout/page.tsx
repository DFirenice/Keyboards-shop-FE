'use client'

import Heading from "@app-ui/Heading"
import { Ticons } from "@/types/icons"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"
import Icon from "@/components/ui/Icon"
import IconButton from "@/components/ui/IconButton"

type TSteps = { heading: string, icon: Ticons }[]

const CheckoutPage = () => {
    const t = useTranslations("checkout")

    const checkoutSteps: TSteps = [
        {
            heading: t("steps.address"),
            icon: "mapPin"
        },
        {
            heading: t("steps.shipping"),
            icon: "shippingPackage"
        },
        {
            heading: t("steps.payment"),
            icon: "creditCard"
        },
    ]

    const isActive = false

    return (
        <section className="flex flex-col w-full px-12 min-h-[80dvh] my-30 space-y-8">
            {/* Payment completion steps */}
            <div className="flex flex-row justify-around items-center gap-6 min-h-24">
                {checkoutSteps.map(({ heading, icon }, idx) => (
                    <div className="flex gap-2 flex-row">
                        <div className={cn(
                            "grid items-center h-min w-min p-2 rounded-full bg-primary/60 text-secondary aspect-square",
                            { "bg-primary/90": isActive }
                        )}>
                            <Icon id={icon} />
                        </div>
                        <div className={cn("text-muted-foreground font-medium", { "text-primary": isActive })}>
                            <span className="text-md">{t("steps.step")} {idx + 1}</span>
                            <Heading size="medium">{heading}</Heading>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container mx-auto space-y-4">
                <Heading className="font-medium mt-10" size="medium">{t("address.heading")}</Heading>
                <div className="w-full rounded-md bg-secondary px-4 py-6 flex flex-row gap-4">
                    <Icon id="mapPin" />
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center gap-4">
                            <Heading>Children’s Aid Society of Toronto</Heading>
                            <div className="text-sm text-secondary bg-primary rounded-md px-2 py-1">Home</div>
                        </div>
                        <span>{`30 Isabella Street, Toronto, ON M4Y 1N1, Canada.`}</span>
                        <span>{`(1) 866-527-0833`}</span>
                    </div>
                </div>
                <div className="w-full rounded-md bg-secondary px-4 py-6 flex flex-row gap-4">
                    <Icon id="mapPin" />
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center gap-4">
                            <Heading>Children’s Aid Society of Toronto</Heading>
                            <div className="text-sm text-secondary bg-primary rounded-md px-2 py-1">Office</div>
                        </div>
                        <span>{`30 Isabella Street, Toronto, ON M4Y 1N1, Canada.`}</span>
                        <span>{`(1) 866-527-0833`}</span>
                    </div>
                </div>
            </div>
            {/* Add New Address */}
            <div className="relative mt-auto mb-12">
                <div className="absolute inset-0 flex bg-linear-to-r from-background via-transparent to-background" />
                <div className="border-b border-primary/60 border-dashed">
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <IconButton className="grid items-center h-min w-min p-2 rounded-full bg-primary text-secondary aspect-square" icon="plus" size="tiny" />
                        <span className="absolute top-6 text-sm text-muted-foreground">{t("add-new-address")}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckoutPage