import floraldress from '../assets/floraldress.jpg'
import jeans from '../assets/jeans.jpg'
import blouse from '../assets/blouse.jpg'
import shoes from '../assets/shoes.jpg'
import dress from '../assets/dress.jpg'


const products = [
  {
    id: 1,
    name: 'Classic Denim Jeans',
    price: 42.50,
    image: jeans,
    category: 'Jeans',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Black'],
    description: 'A classic denim jeans with a comfortable fit, perfect for casual outings and everyday wear.'
  },
  {
    id: 2,
    name: 'Silk Blouse',
    price: 28.00,
    image: blouse,
    category: 'Blouses',
    sizes: ['S', 'M', 'L'],
    colors: ['White', 'Beige', 'Black'],
    description: 'A luxurious silk blouse that adds elegance to any outfit, suitable for both work and social events.'
  },
  {
    id: 3,
    name: 'Strappy Heels',
    price: 55.00,
    image: shoes,
    category: 'Shoes',
    sizes: ['6', '7', '8', '9'],
    colors: ['Black', 'Red'],
    description: 'Elegant strappy heels perfect for any occasion, made from high-quality materials.'
  },
  {
    id: 4,
    name: 'Elegant Evening Dress',
    price: 65.00,
    image: dress,
    category: 'Dress',
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'Maroon'],
    description: 'An elegant evening dress designed to make you stand out at any event, crafted with attention to detail.'
  }
]

export default products;