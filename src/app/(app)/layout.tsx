import Header from "@app-comps/Header"

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="exrta-header-inset">
            <Header />
            { children }
        </main>
    )
}

export default AppLayout