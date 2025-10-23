'use client'

import { Button } from "@/components/ui/button"
import Heading from "@/components/ui/Heading"
import Icon from "@/components/ui/Icon"
import IconButton from "@/components/ui/IconButton"
import Link from "next/link"
import { Tablist } from "@/components/tabSwapper/Tablist"
import { Tabs } from "@/contexts/tabsContext"

import { categories, productsData, tabListData } from "@/data/landingPage"
import { TabPanel } from "@/components/tabSwapper/TabPanel"
import { TabLink } from "@/components/tabSwapper/TabLink"
import Image from "next/image"
import LikeButton from "@/components/ui/LikeButton"
import { cn } from "@/lib/utils"

const LandingPage = () => {
    return (
        <div className="w-full">
            {/* Hero */}
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
            {/* Browse Categories */}
            <section className="w-full mt-42">
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
                                    bg-input rounded-4xl h-48 max-h-48 aspect-square
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
            {/* Demo Products */}
            <section className="w-full py-12 mt-42">
                <div className="container mx-auto">
                    <Tabs defaultTab={tabListData[0]}>
                        <Tablist>
                            { tabListData.map(link =>
                                <TabLink value={link} key={`link_${link}`}>
                                    <span>{ link }</span>
                                </TabLink>
                            ) }
                        </Tablist>
                        { tabListData.map(link =>
                            // Draw a component with newly backend-parsed items
                            <TabPanel value={link} key={`panel_${link}`}>
                                <div className="relative flex justify-center items-center flex-col bg-input w-68 h-fit rounded-md py-4 px-4">
                                    {/* Should be LikeButton component instead */}
                                    <LikeButton isWishListed={false} />
                                    <div className="relative w-[75%] h-48 mx-6">
                                        <Image src="/images/sample_keyboard.png" alt="Keyboard" objectFit="cover" className="pointer-events-none" fill />
                                    </div>
                                    <div className="text-center mb-6">
                                        <Heading level={3} className="font-medium">Meletrix Zoom65 v2.5</Heading>
                                        <Heading level={3} size="large" className="font-bold font-mono mt-2">$120</Heading>
                                    </div>
                                    <Button size="lg" className="w-[90%] mx-auto">Buy Now</Button>
                                </div>
                            </TabPanel>
                        )}
                    </Tabs>
                </div>
            </section>
            {/* Product Range Demo */}
            <section className="w-full mt-42 bg-gradient-to-r from-50% to-50% bg-background to-primary">
                <div className="container mx-auto flex flex-row justify-center w-full">
                    {productsData.map(({ imageSrc, title, description }, idx) => (
                        <div
                            className={cn(
                                "shrink grow px-6 flex flex-col gap-4 py-8",
                                {
                                    "bg-transparent": idx === 0,
                                    "bg-background-elevated/75": idx === 1,
                                    "bg-input": idx === 2,
                                    "bg-primary text-primary-foreground": idx === 3,
                                }
                            )}
                            key={`product:${imageSrc}`}
                        >
                            <div className="relative h-72 w-full">
                                <Image src={imageSrc} alt="Keyboard" objectFit="contain" className="pointer-events-none" fill />
                            </div>
                            <div>
                                <Heading className="font-light my-2.5" size="large">{ title }</Heading>
                                <p className="text-muted-foreground text-sm max-w-sm h-18">{ description }</p>
                            </div>
                            <Link href="#" className="mt-auto">
                                <Button variant="outline" size="lg">Show Now</Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default LandingPage