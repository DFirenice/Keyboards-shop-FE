'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

type TConfig = {
    allowNav?: boolean
}

const Breadcrumb = (options: TConfig) => {
    const path = usePathname().split('/')
    return (
        <nav aria-label="Breacrumbs" className="text-sm text-muted-foreground">
            <ol className="flex flex-row items-center gap-2 *:last:text-primary *:last:font-medium">
                { path.map((link, idx) => (
                    <React.Fragment key={`breadcrumbs:${link}_${idx}`}>
                        <li>
                            <Link href="#">
                                    { [ link[0]?.toUpperCase() || "Home", link.slice(1) ] }
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