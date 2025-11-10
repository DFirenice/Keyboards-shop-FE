import Breadcrumb from "@/components/Breadcrumb"
import FilterSidebar from "@/components/FilterSidebar"
import ProductCard from "@/components/ProductCard"

const CatalogPage = () => {
    return (
        <div className="my-30 w-full min-h-dvh flex flex-row gap-4">
            <div className="space-y-4 px-12 h-full sticky top-30">
                <Breadcrumb />
                <FilterSidebar />
            </div>
            <div className="flex flex-1 gap-4 flex-wrap">
                { [...Array(50)].map((_, idx) => <ProductCard key={`catalogue-product:${idx}`} />) }
            </div>
        </div>
    )
}

export default CatalogPage