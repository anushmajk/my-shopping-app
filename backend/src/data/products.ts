export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  sizes: string[]
  colors: string[]
  description: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Floral Summer Dress',
    price: 34.99,
    image: '/images/floraldress.jpg',
    category: 'Dress',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Pink', 'White', 'Blue'],
    description: 'A lightweight floral dress perfect for summer days, made from breathable cotton blend fabric.'
  },
  {
    id: 2,
    name: 'Classic Denim Jeans',
    price: 42.50,
    image: '/images/jeans.jpg',
    category: 'Jeans',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Black'],
    description: 'Classic straight-fit denim jeans, durable and comfortable for everyday wear.'
  },
  {
    id: 3,
    name: 'Silk Blouse',
    price: 28.00,
    image: '/images/blouse.jpg',
    category: 'Blouses',
    sizes: ['S', 'M', 'L'],
    colors: ['White', 'Beige', 'Black'],
    description: 'An elegant silk blouse that pairs well with both casual and formal outfits.'
  },
  {
    id: 4,
    name: 'Strappy Heels',
    price: 55.00,
    image: '/images/shoes.jpg',
    category: 'Shoes',
    sizes: ['6', '7', '8', '9'],
    colors: ['Black', 'Red'],
    description: 'Elegant strappy heels designed for comfort and style, perfect for evening wear.'
  },
  {
    id: 5,
    name: 'Elegant Evening Dress',
    price: 65.00,
    image: '/images/dress.jpg',
    category: 'Dress',
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'Maroon'],
    description: 'An elegant evening dress designed to make you stand out at any event, crafted with attention to detail.'
  }
]

export default products