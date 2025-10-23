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

export type TProductsData = {
  imageSrc: string
  title: string
  description: string
}[]

export const productsData : TProductsData = [
  {
    imageSrc: "/images/sample_keyboard.png",
    title: "Popular Products",
    description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
  },
  {
    imageSrc: "/images/sample_mouse.png",
    title: "Logitech PRO X SUPERLIGHT 2",
    description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
  },
  {
    imageSrc: "/images/sample_headphones.png",
    title: "Samsung Galaxy",
    description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
  },
  {
    imageSrc: "/images/sample_microphone.png",
    title: "Macbook Pro",
    description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
  },
]