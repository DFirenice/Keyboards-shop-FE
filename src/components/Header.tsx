'use client'

import Search from "@app-ui/Search"
import IconButton from "@app-ui/IconButton"
import Logo from "@app-ui/Logo"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useIsCurrentPath } from "@/hooks/useIsCurrentPath"
import { useTranslations } from "next-intl"
import * as  DropdownMenu from "@radix-ui/react-dropdown-menu"
import { flags } from "@/data/icons"
import { Button } from "@app-ui/button"
import Icon from "@app-ui/Icon"
import { Ticons } from "@/types/icons"
import { langs, TKeyofLangs } from "@/data/langs"
import Cookies from 'js-cookie'
import { useRouter } from "next/navigation"

const Header = () => {
    const isCurrentPath = useIsCurrentPath()
    const t = useTranslations("header")
    // Router, used to force re-fetching server components with new locale
    const router = useRouter()

    const navLinks = [
        [t('links.home'), '/'],
        [t('links.catalog'), '/catalog'],
        [t('links.about'), '/about'],
        [t('links.contact'), '/contact']
    ]

    const changeLocale = (l: string) => {
        Cookies.set("locale", l)
        router.refresh()
    }
    
    return (
        <header className="fixed z-50 top-0 left-0 w-full bg-background border-b border-border">
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
                <DropdownMenu.Root modal={false}>
                    <DropdownMenu.Trigger>
                        <IconButton size="tiny" icon="languages" />
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content className="flex flex-col shadow-2xs bg-background rounded-lg border-border border py-1.5 px-1">
                        { Object.keys(flags).map(locality => (
                            <Button key={`langs-locality:${locality}`} className="w-full justify-start gap-x-2.5" variant="ghost" onClick={() => changeLocale(locality)}>
                                <div className="flex overflow-hidden rounded-xl">
                                    <Icon size="tiny" id={locality as Ticons} />
                                </div>
                                <span>{ langs[locality as TKeyofLangs]! }</span>
                            </Button>
                        )) }
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </div>
        </header>
    )
}

export default Header