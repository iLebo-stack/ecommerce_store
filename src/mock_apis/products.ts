import sweaterForMenImage from '../images/sweater-for-men.png';
import sweaterForWomenImage from '../images/sweater-for-women.png';
import handbagImage from '../images/handbag.png';
import coatForWomenImage from '../images/coat-for-women.png';

export const products: Product[] = [
  { id: 1, image: sweaterForMenImage, price: 50, name: 'Sweater', description: 'for men', sizes: ['XS', 'S', 'M', 'L'], colors: ['#2b2b2b', '#0f6450', '#15a4c4'], },
  { id: 2, image: sweaterForWomenImage, price: 50, name: 'Sweater', description: 'for women', sizes: ['XS', 'S', 'M', 'L'], colors: ['#2b2b2b', '#0f6450', '#15a4c4'], },
  { id: 3, image: handbagImage, price: 50, name: 'Handbag', description: 'for women', sizes: ['XS', 'S', 'M', 'L'], colors: ['#2b2b2b', '#0f6450', '#15a4c4'], },
  { id: 4, image: coatForWomenImage, price: 50, name: 'Coat', description: 'for women', sizes: ['XS', 'S', 'M', 'L'], colors: ['#2b2b2b', '#0f6450', '#15a4c4'], },
];
