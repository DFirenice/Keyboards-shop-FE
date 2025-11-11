'use client'

import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"
import Link from "next/link"
import React from "react"

type TConfig = {
    allowNav?: boolean
}

const Breadcrumb = (options: TConfig) => {
    const path = usePathname().split('/')
    const t = useTranslations()
    
    return (
        <nav aria-label="Breacrumbs" className="text-sm text-muted-foreground">
            <ol className="flex flex-row items-center gap-2 *:last:text-primary *:last:font-medium">
                { path.map((link, idx) => (
                    <React.Fragment key={`breadcrumbs:${link}_${idx}`}>
                        <li>
                            <Link href="#" className="capitalize">
                                    { link[0]?.toUpperCase()
                                        ? t(`header.links.${link}`)
                                        : t("header.links.home") }
                            </Link>
                        </li>
                        { idx !== path.length -1 && <span className="font-mono">&gt;</span> }
                    </React.Fragment>
                )) }
            </ol>
        </nav>
    )
}

export default Breadcrumb