import { useTranslations } from "next-intl"
import Heading from "@app-ui/Heading"
import Logo from "@app-ui/Logo"
import React from "react"

const StyledHeading = ({ children }: { children: React.ReactNode }) => (
    <Heading className="font-semibold font-mono">
        {children}
    </Heading>
)

const Footer = () => {
    const t = useTranslations("footer")
    return (
        <footer className="bg-foreground text-primary-foreground">
            <div className="container mx-auto min-h-[50vh] flex flex-col gap-6 justify-center py-24">
                <div className="flex flex-wrap flex-row gap-4 justify-evenly">
                    <div>
                        <Logo className="bg-background" />
                        <div className="mt-4 text-primary-foreground/60 font-light">
                            { t.raw("our-goal").map((text: string, idx: number) =>
                                <React.Fragment key={`goal:${text}_${idx}`}>
                                    <span>{ text }</span>
                                    <br/>
                                </React.Fragment>
                            ) }
                        </div>
                    </div>
                    <div>
                        <StyledHeading>{ t("services._title") }</StyledHeading>
                        <ul className="text-primary-foreground/60 font-light space-y-2 mt-2">
                            <li>{ t("services.contracts") }</li>
                            <li>{ t("services.payment") }</li>
                        </ul>
                    </div>
                    <div>
                        <StyledHeading>{ t("customer-assistance._title") }</StyledHeading>
                        <ul className="text-primary-foreground/60 font-light space-y-2 mt-2">
                            <li>{ t("customer-assistance.find-order") }</li>
                            <li>{ t("customer-assistance.terms-of-delivery") }</li>
                            <li>{ t("customer-assistance.exchange-and-return") }</li>
                            <li>{ t("customer-assistance.guarantee") }</li>
                            <li>{ t("customer-assistance.faq") }</li>
                            <li>{ t("customer-assistance.terms-of-use") }</li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="w-full border-t border-px border-border/13 text-primary-foreground/38 text-center text-sm px-2 py-4">
                Copyright © {new Date().getFullYear()} Cyber. {t("copyright")}
            </div>
        </footer>
    )
}

export default Footer