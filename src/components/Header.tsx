'use client'

import Heading from "@app-ui/Heading"
import Search from "@app-ui/Search"
import IconButton from "@app-ui/IconButton"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useIsCurrentPath } from "@/lib/isCurrentPath"

const Header = () => {
    const navLinks = [
        ['Home', '/'],
        ['Catalog', '/catalog'],
        ['About', '/about'],
        ['Contact Us', '/contact']
    ]
    
    return (
        <header className="fixed top-0 left-0 w-full bg-background border-b-2 border-muted-foreground">
            <div className="exrta-header-inset container mx-auto flex flex-row items-center justify-around gap-12">
                <Heading className="font-bold font-mono" size="large">cyber</Heading>
                <Search />
                { navLinks.map(([text, link]) => (
                    <Link key={`nav_${link}`} href={link} className={
                        cn(
                            "whitespace-nowrap text-muted-foreground hover:text-foreground font-semibold",
                            { "text-foreground": useIsCurrentPath(link) }
                        )
                    }>
                        { text }
                    </Link>
                )) }
                <div className="flex flex-row gap-2">
                    <IconButton size="tiny" icon="heart" />
                    <IconButton size="tiny" icon="cart" />
                    <IconButton size="tiny" icon="user" />
                </div>
            </div>
        </header>
    )
}

export default Header