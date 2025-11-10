import { Ticons } from "@/types/icons"

export type TCategoriesData = {
  text: string
  icon: Ticons
  link: string
}[]

export const categories: TCategoriesData = [
  {
    text: 'home-page.categories.keyboards',
    icon: 'keyboard',
    link: '/categories/keyboards',
  },
  {
    text: 'home-page.categories.mouses',
    icon: 'mouse',
    link: '/categories/mouses',
  },
  {
    text: 'home-page.categories.headphones',
    icon: 'headphones',
    link: '/categories/headphones',
  },
  {
    text: 'home-page.categories.microphones',
    icon: 'mic',
    link: '/categories/microphones',
  },
  {
    text: 'home-page.categories.other',
    icon: 'gridLayout',
    link: '/categories/other',
  },
]

export type TProductsData = {
  imageSrc: string
  title: string
  description: string
}[]

export const productsData: TProductsData = [
  {
    imageSrc: "/images/sample_keyboard.png",
    title: "home-page.products.popular",
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