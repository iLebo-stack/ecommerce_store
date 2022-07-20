/// <reference types="react-scripts" />

interface Tab {
  id: string;
  title: string;
}

interface Currency {
  id: string;
  content: string;
  symbol: string;
}

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  colors: string[];
  sizes: string[];
  quantityInStock: number;
  quantityInCart: number;
  selectedColor: string;
  selectedSize: string;
}
