import { create } from 'zustand'

export type TFilters = Record<string, (string | boolean | number)[]>
export type TPriceRange = [number, number]

interface IFilterState {
    priceLimit: TPriceRange
    priceRange: TPriceRange
    setPriceRange: (newRange: TPriceRange) => void
    filters: TFilters
    toggleFilter: (category: string, value: string) => void
    clearFilters: () => void
}

const initialPriceLimit = [0, 1000] as TPriceRange

export const useFilterStore = create<IFilterState>((set) => ({
    priceLimit: initialPriceLimit,
    priceRange: initialPriceLimit,
    setPriceRange: (newRange) => set({ priceRange: newRange }),
    filters: {},
    toggleFilter: (category, value) => set((state) => {
        const currentValues = state.filters[category] || []
        const exists = currentValues?.includes(value) || false

        return {
            filters: {
                ...state.filters,
                [category]: (exists
                    ? currentValues.filter(v => v !== value)
                    : [ ...currentValues, value ]),
            }
        }
    }),
    clearFilters: () => set({ filters: {} })
}))