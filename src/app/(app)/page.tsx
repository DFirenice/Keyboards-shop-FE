import { Button } from "@/components/ui/button"
import Heading from "@/components/ui/Heading"
import Icon from "@/components/ui/Icon"
import IconButton from "@/components/ui/IconButton"
import Link from "next/link"

import { categories } from "@/data/landingPage"

const LandingPage = () => {
    return (
        <div className="w-full">
            <section className="w-full h-[80vh] landing-hero-bg">
                <div className="container mx-auto w-full h-full flex flex-col justify-center">
                    <p className="font-semibold text-lg text-muted-foreground">PC Peripherals for Real Gamers</p>
                    <Heading size="extra" className="text-primary-foreground">
                        <span className="font-thin">Keyduos </span>
                        <span className="font-bold">NJ80-AP</span>
                    </Heading>
                    <p className="my-4 text-primary-foreground">Created to change everything for the better. For everyone</p>
                    <Button size="lg" variant="outline" className="text-primary-foreground">Shop Now</Button>
                </div>
            </section>
            <section className="w-full h-[75vh]">
                <div className="container mx-auto w-full h-full flex flex-col justify-center gap-12">
                    <div className="flex flex-row justify-between">
                        <Heading size="large" className="font-semibold">Browse by Category</Heading>
                        <div className="flex flex-row gap-2">
                            <IconButton size="small" icon="chevronLeft" />
                            <IconButton size="small" icon="chevronRight" />
                        </div>
                    </div>
                    <div className="flex flex-row gap-2.5 justify-evenly">
                        { categories.map(({ text, link, icon }) => (
                            <Link
                                key={`card_${icon}`}
                                href={link}
                                className="
                                    flex gap-3 flex-col items-center justify-center text-center
                                    bg-input rounded-md h-48 max-h-48 aspect-square
                                ">
                                <div className="relative h-auto w-1/3">
                                    <Icon id={icon} size="fill" strokeWidth={1} />
                                </div>
                                <span>{ text }</span>
                            </Link>
                        )) }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage