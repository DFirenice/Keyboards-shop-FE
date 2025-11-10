import { create } from 'zustand'

export type TFilters = Record<string, any[]>

interface IFilterState {
    priceRange: [number, number]
    filters: TFilters
    toggleFilter: (category: string, value: string) => void
    clearFilters: () => void
}

export const useFilterStore = create<IFilterState>((set) => ({
    priceRange: [0, 1000],
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