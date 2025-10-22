import { Ticons } from "@/types/icons"

export type TCategoriesData = {
  text: string
  icon: Ticons
  link: string
}[]

export const categories: TCategoriesData = [
  {
    text: 'Keyboards',
    icon: 'keyboard',
    link: '/categories/keyboards',
  },
  {
    text: 'Mouses',
    icon: 'mouse',
    link: '/categories/mouses',
  },
  {
    text: 'Headphones',
    icon: 'headphones',
    link: '/categories/headphones',
  },
  {
    text: 'Microphones',
    icon: 'mic',
    link: '/categories/microphones',
  },
  {
    text: 'Other',
    icon: 'gridLayout',
    link: '/categories/other',
  },
]

export const tabListData = ["New Arrival", "Bestseller", "Featured Products"]