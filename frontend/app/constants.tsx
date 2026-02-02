
import { Product, NavItem } from './types';


export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'New & Featured', href: '#' },
  { label: 'Men', href: '#' },
  { label: 'Women', href: '#' },
  { label: 'Kids', href: '#' },
  { label: 'Sale', href: '#' },
  { label: 'Customise', href: '#' },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Nike Air Max Pulse',
    category: "Men's Shoes",
    price: '£144.95',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'Nike Air Force 1 07',
    category: "Women's Shoes",
    price: '£109.95',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Nike Dunk Low Retro',
    category: "Men's Shoes",
    price: '£109.95',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    name: 'Nike Zoom Fly 5',
    category: "Women's Running Shoes",
    price: '£154.95',
    image: 'https://images.unsplash.com/photo-1551107644-32960688fd69?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    name: 'Nike Air Jordan 1 Low',
    category: "Men's Shoes",
    price: '£119.95',
    image: 'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?auto=format&fit=crop&q=80&w=800'
  }
];
