'use client'

import Search from "@app-ui/Search"
import Heading from "@app-ui/Heading"
import { Accordion, AccordionItem, AccordionTrigger } from "@app-ui/accordion"
import { AccordionContent } from "@radix-ui/react-accordion"
import { Checkbox } from "@app-ui/checkbox"
import { Slider } from "@app-ui/slider"

import axios from 'axios'
import { useFilterStore } from "@/stores/productFilter.store"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"

const FilterSidebar = () => {
    const [ filterOptions, setFilterOptions ] = useState<Record<string, string[]> | undefined>(undefined)
    const t = useTranslations()

    // Considered better performance (at least i want to believe so)
    const priceLimit = useFilterStore(state => state.priceLimit),
        priceRange = useFilterStore(state => state.priceRange),
        setPriceRange = useFilterStore(state => state.setPriceRange)
    
    useEffect(() => {
        (async () => {
            try {
                // Making request for keyboards category only, for now
                const res = (await axios.get(`/api/filters?category=${"keyboard"}`)).data
                if (res?.category && res?.filters) setFilterOptions(res.filters)
            } catch (err) {
                setFilterOptions(undefined)
                console.error(err)
            }
        })();
    }, [])

    const { filters, toggleFilter } = useFilterStore()

    return (
        <section className="h-full w-[16.5vw] max-w-64 flex flex-col gap-4 sticky top-30">
            <Search />
            <div>
                <label htmlFor="price-range" className="flex gap-1 items-center">
                    <span className="flex-1">{ t("filter-sidebar.price-range") }</span>
                    {/* Shall in theory be inputs */}
                    <span className="text-sm font-medium font-mono">${ priceRange[0] } -</span>
                    <span className="text-sm font-medium font-mono">${ priceRange[1] }</span>
                </label>
                <Slider
                    className="mt-2.5"
                    defaultValue={priceLimit} // Custom values are comming from the backend later
                    onValueChange={setPriceRange}
                    min={priceLimit[0]}
                    max={priceLimit[1]}
                />
            </div>
            {/* Note: All of the accordions below must be fetched from the backend */}
            { filterOptions && <Accordion
                type="single"
                defaultValue={Object.keys(filterOptions)[0]}
                collapsible
            >
                { Object.keys(filterOptions).map((category, idx) => (
                    <AccordionItem value={category} key={`accordion-options:${category}_${idx}`}>
                        <AccordionTrigger className="border-b border-border rounded-none">
                            <Heading size="medium" className="capitalize">{category}</Heading>
                        </AccordionTrigger>
                        <AccordionContent className="py-4 flex flex-col gap-1 select-none">
                            { filterOptions?.[category]?.map((option, idx) => (
                                <div key={`filter-option:${option}_${idx}`} className="flex flex-row gap-2 items-center w-full">
                                    <Checkbox
                                        onCheckedChange={() => toggleFilter(category, option)}
                                        checked={filters[category]?.includes(option) || false}
                                        id={option}
                                    />
                                    <label className="flex flex-1 items-center justify-between pr-1.5 text-ellipsis" htmlFor={option}>
                                        <span>{option}</span>
                                        <span className="text-muted-foreground text-sm">173</span>
                                    </label>
                                </div>
                            )) || null }
                        </AccordionContent>
                    </AccordionItem>
                )) }
            </Accordion> }
        </section>
    )
}

export default FilterSidebar