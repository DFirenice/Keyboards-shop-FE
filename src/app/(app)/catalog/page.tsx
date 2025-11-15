import Breadcrumb from "@/components/Breadcrumb"
import FilterSidebar from "@/components/FilterSidebar"
import ProductCard from "@/components/ProductCard"
import SortSelect from "@/components/ui/SortSelect"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const CatalogPage = () => {
    return (
        <div className="my-30 w-full min-h-dvh flex flex-row gap-4 justify-center">
            <div className="space-y-4 px-12 h-full sticky top-30">
                <Breadcrumb />
                <FilterSidebar />
            </div>
            <div className="px-4 container mx-auto">
                <div className="flex justify-between mb-4">
                    <div>
                        <span className="text-muted-foreground">Found products: </span>
                        <span>87</span>
                    </div>
                    <SortSelect />
                </div>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-y-6 gap-x-4">
                    {[...Array(50)].map((_, idx) => (
                        <ProductCard key={`catalogue-product:${idx}`} />
                    ))}
                    <Pagination className="col-span-full">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink isActive={true} href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    )
}

export default CatalogPage