import { Product } from '../types/Product';
import product1 from '../assets/images/products/product-1.webp';
import product2 from '../assets/images/products/product-2.webp';
import product3 from '../assets/images/products/product-3.webp';

const products: Product[] = [
  { id: 1, name: "Produto 1", category: "Óculos de Sol", price: 299.99, image: product1},
  { id: 2, name: "Produto 2", category: "Óculos Infantil", price: 240.99, image: product2},
  { id: 3, name: "Produto 3", category: "Óculos de Sol", price: 399.99, image: product3},
  { id: 4, name: "Produto 4", category: "Óculos de Grau", price: 420.30, image: product2},
  { id: 5, name: "Produto 5", category: "Óculos de Grau", price: 769.90, image: product1},
  // Adicionar mais produtos conforme necessário
];

export default products;
