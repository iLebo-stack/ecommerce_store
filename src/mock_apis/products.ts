import sweaterForMenImage from '../images/sweater-for-men.png';
import sweaterForWomenImage from '../images/sweater-for-women.png';
import handbagImage from '../images/handbag.png';
import coatForWomenImage from '../images/coat-for-women.png';
import kidsJacket from '../images/kids-jacket.jpg';
import manShoes from '../images/man-shoes.jpg';

export const products: Product[] = [
  { id: 1, image: sweaterForMenImage, price: 55, name: 'Sweater', description: 'for men', sizes: ['XS', 'S', 'M', 'L'], selectedSize: 'S', colors: ['#2b2b2b', '#0f6450', '#15a4c4'], selectedColor: '#2b2b2b', quantityInStock: 5, quantityInCart: 0, category: 'men', },
  { id: 2, image: sweaterForWomenImage, price: 45, name: 'Sweater', description: 'for women', sizes: ['XS', 'S', 'M', 'L'], selectedSize: 'S', colors: ['#2b2b2b', '#0f6450', '#15a4c4'], selectedColor: '#2b2b2b', quantityInStock: 5, quantityInCart: 0, category: 'women' },
  { id: 3, image: handbagImage, price: 105, name: 'Handbag', description: 'for women', sizes: ['XS', 'S', 'M', 'L'], selectedSize: 'S', colors: ['#2b2b2b', '#0f6450', '#15a4c4'], selectedColor: '#2b2b2b', quantityInStock: 5, quantityInCart: 0, category: 'women' },
  { id: 4, image: coatForWomenImage, price: 75, name: 'Coat', description: 'for women', sizes: ['XS', 'S', 'M', 'L'], selectedSize: 'S', colors: ['#2b2b2b', '#0f6450', '#15a4c4'], selectedColor: '#2b2b2b', quantityInStock: 5, quantityInCart: 0, category: 'women' },
  { id: 5, image: manShoes, price: 150, name: 'Shoes', description: 'for men', sizes: ['6', '7', '8', '9'], selectedSize: '7', colors: ['#af973c', '#cf343a', '#27a2b9'], selectedColor: '#af973c', quantityInStock: 5, quantityInCart: 0, category: 'men' },
  { id: 6, image: kidsJacket, price: 60, name: 'Jacket', description: 'for kids', sizes: ['XS', 'S'], selectedSize: 'S', colors: ['#27b96f', '#b95527', '#b6a197'], selectedColor: '#27b96f', quantityInStock: 5, quantityInCart: 0, category: 'kids' },
];
