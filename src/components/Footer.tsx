import Heading from "./ui/Heading"

const StyledHeading = ({ children }: { children: React.ReactNode }) => (
    <Heading className="font-semibold font-mono">
        {children}
    </Heading>
)

const Footer = () => {
    return (
        <footer className="bg-foreground text-primary-foreground">
            <div className="container mx-auto min-h-[50vh] flex flex-col gap-6 justify-center py-24">
                <div className="flex flex-wrap flex-row gap-4 justify-evenly">
                    <div>
                        <Heading size="large" className="font-medium font-mono italic">cyber</Heading>
                        <div className="text-primary-foreground/60 font-light">
                            <span>We&apos;re redefining the way Ukraine sees PC peripherals.</span><br />
                            <span>Premium gear, fair prices, and a community that cares.</span>
                        </div>
                    </div>
                    <div>
                        <StyledHeading>Services</StyledHeading>
                        <ul className="text-primary-foreground/60 font-light space-y-2 mt-2">
                            <li>Service contracts</li>
                            <li>Payment</li>
                        </ul>
                    </div>
                    <div>
                        <StyledHeading>Assistance to the buyer</StyledHeading>
                        <ul className="text-primary-foreground/60 font-light space-y-2 mt-2">
                            <li>Find an order</li>
                            <li>Terms of delivery</li>
                            <li>Exchange and return of goods</li>
                            <li>Guarantee</li>
                            <li>Frequently asked questions</li>
                            <li>Terms of use of the site</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full border-t border-px border-border/13 text-primary-foreground/38 text-center text-sm px-2 py-4">
                Copyright © { new Date().getFullYear() } Cyber. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer