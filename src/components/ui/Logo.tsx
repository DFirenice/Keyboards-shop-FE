import { cn } from '@/lib/utils'
import Image from 'next/image'

const Logo = ({ className, ...props }: { className?: React.HTMLAttributes<SVGElement>['className'] }) => {
    return (
        <div className="relative w-36 h-full max-h-3rem sm:h-[3rem] pointer-events-none select-none">
            <Image
                src="/logo.svg"
                alt="Cyber Logo"
                className={cn(className)}
                {...props}
                fill
            />
        </div>
    )
}

export default Logo