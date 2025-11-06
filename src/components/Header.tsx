'use client'

import Search from "@app-ui/Search"
import IconButton from "@app-ui/IconButton"
import Logo from "@app-ui/Logo"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useIsCurrentPath } from "@/hooks/useIsCurrentPath"
import { useTranslations } from "next-intl"

const Header = () => {
    const isCurrentPath = useIsCurrentPath()
    const t = useTranslations("header")

    const navLinks = [
        [t('links.home'), '/'],
        [t('links.catalog'), '/catalog'],
        [t('links.about'), '/about'],
        [t('links.contact'), '/contact']
    ]
    
    return (
        <header className="fixed z-50 top-0 left-0 w-full bg-background border-b-1 border-border">
            <div className="exrta-header-inset container mx-auto flex flex-row items-center justify-around gap-12">
                <Logo />
                <Search />
                { navLinks.map(([text, link]) => (
                    <Link key={`nav_${link}`} href={link} className={
                        cn(
                            "whitespace-nowrap text-muted-foreground hover:text-foreground font-semibold",
                            { "text-foreground": isCurrentPath(link) }
                        )
                    }>
                        { text }
                    </Link>
                )) }
                <div className="flex flex-row gap-2">
                    <IconButton size="tiny" icon="heart" />
                    <Link href="/cart"> <IconButton size="tiny" icon="cart" /> </Link>
                    <IconButton size="tiny" icon="user" />
                </div>
                <IconButton size="tiny" icon="languages" />
            </div>
        </header>
    )
}

export default Header