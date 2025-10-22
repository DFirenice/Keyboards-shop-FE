export const Tablist = ({ children }: { children: React.ReactNode }) => {
    return (
        <div role="tablist" className="flex flex-row gap-8 mb-8">
            { children }
        </div>
    )
}