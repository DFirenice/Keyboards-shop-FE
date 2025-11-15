import { create } from "zustand";

// Mock items
const mockItems = [
  {
    id: '25139526913984',
    name: 'Apple iPhone 14 Pro Max',
    variant: '128Gb Deep Purple',
    quantity: 1,
    price: 1399,
    image: '/images/sample_keyboard.png'
  },
  {
    id: '53459358345',
    name: 'AirPods Max',
    variant: 'Silver',
    quantity: 1,
    price: 549,
    image: '/images/sample_headphones.png'
  },
  {
    id: '63632324',
    name: 'Apple Watch Series 9 GPS',
    variant: '41mm Starlight Aluminium',
    quantity: 1,
    price: 399,
    image: '/images/sample_microphone.png'
  }
]

export type TCartItem = {
    id: string
    quantity: number
    price: number,
    // Least important
    name: string,
    image: string
}

interface IShoppingCart {
    cart: TCartItem[]
    addItem: (item: TCartItem) => void
    removeItem: (id: string) => void
    updateQuantity: (id: string, quantity: number) => void
}

export const useShoppingCart = create<IShoppingCart>((set) => ({
    cart: mockItems,

    addItem: (item) => set((state) => ({
        cart: [...state.cart, item]
    })),

    removeItem: (id: string) => set((state) => ({
        cart: state.cart.filter(item => item.id !== id)
    })),
    
    updateQuantity: (id, quantity) => set((state) => ({
        cart: state.cart.map(item =>
            item.id === id ? {
              ...item,
              quantity: quantity
            } : item
        )
    }))
}))