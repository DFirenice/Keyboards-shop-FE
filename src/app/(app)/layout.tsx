import Header from "@app-comps/Header"
import Footer from "@app-comps/Footer"

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="exrta-header-inset">
            <Header />
            { children }
            <Footer />
        </main>
    )
}

export default AppLayout