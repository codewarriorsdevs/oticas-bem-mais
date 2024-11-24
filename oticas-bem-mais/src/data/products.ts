import { Product } from '../types/Product';
import raybang15 from '../assets/images/products/raybang15.webp';
import sportfeminino from '../assets/images/products/sportfeminino.webp';
import sportunissex from '../assets/images/products/sportunissex.webp';
import nextfeminino from '../assets/images/products/nextfeminino.webp';
import raybanunissex from '../assets/images/products/raybanunissex.webp';
import speedospeed3 from '../assets/images/products/speedospeed3.webp';
import next from '../assets/images/products/next.webp';
import hickmann from '../assets/images/products/hickmann.webp';
import armacaonext from '../assets/images/products/armaçãonextmasculina.webp';
import armacaonike from '../assets/images/products/armacaonikemasculina.webp';
import armacaooakley from '../assets/images/products/armaçãooakleymasculina.webp';
import armacaohb from '../assets/images/products/armacaohbmasculina.webp';
import armacaoparafusadafeminina from '../assets/images/products/armacaoparafusadafeminina.webp';
import armacaooackleymasc from '../assets/images/products/armacaooakleymasculina.webp';
import armacaofeminipromo from '../assets/images/products/armaçãofemini.webp';
import armacaofeminipromo2 from '../assets/images/products/ArmFemininaPromo.webp';
import armacaofeminicarmin from '../assets/images/products/ArmFemininaCarmin.webp';
import infantilmasculinarayban from '../assets/images/products/infantilmasculinarayban.webp';
import infantilmasculinanovit from '../assets/images/products/infantilnovit.webp';
import infantilfemininaskechers from '../assets/images/products/infantilskechers.webp';

const products: Product[] = [
  // Categoria "Óculos de Grau"
  { id: 15, name: "Armação Feminina Promocional", category: "Óculos de Grau", price: 289.00, image: armacaofeminipromo },
  { id: 14, name: "Armação Oakley Masculina", category: "Óculos de Grau", price: 588.00, image: armacaooackleymasc },
  { id: 10, name: "Armação Nike Masculina", category: "Óculos de Grau", price: 599.00, image: armacaonike },
  { id: 12, name: "Armação HB Masculina", category: "Óculos de Grau", price: 499.00, image: armacaohb },
  { id: 13, name: "Armação Parafusada Feminina", category: "Óculos de Grau", price: 590.00, image: armacaoparafusadafeminina },
  { id: 9, name: "Armação Next Masculina", category: "Óculos de Grau", price: 399.00, image: armacaonext },
  { id: 17, name: "Armação Feminina Carmin", category: "Óculos de Grau", price: 615.00, image: armacaofeminicarmin },

  // Categoria "Óculos Infantil"
  { id: 20, name: "Armação Infantil Feminina Skechers", category: "Óculos Infantil", price: 325.00, image: infantilfemininaskechers },
  { id: 18, name: "Armação Infantil Masculina Rayban", category: "Óculos Infantil", price: 399.00, image: infantilmasculinarayban },
  { id: 19, name: "Armação Infantil Masculina Novit", category: "Óculos Infantil", price: 289.00, image: infantilmasculinanovit },

  // Categoria "Óculos de Sol"
  { id: 1, name: "Sport Feminino (Promocional)", category: "Óculos de Sol", price: 119.99, image: sportfeminino },
  { id: 3, name: "Ray Ban G15 Masculino", category: "Óculos de Sol", price: 598.00, image: raybang15 },
  { id: 6, name: "Speedo Speed3", category: "Óculos de Sol", price: 399.00, image: speedospeed3 },
  { id: 8, name: "Hickmann Feminino", category: "Óculos de Sol", price: 399.00, image: hickmann },
  { id: 7, name: "Next", category: "Óculos de Sol", price: 399.00, image: next },
  { id: 5, name: "Ray Ban Unissex", category: "Óculos de Sol", price: 638.00, image: raybanunissex },
  { id: 2, name: "Sport Unissex", category: "Óculos de Sol", price: 119.99, image: sportunissex },
  { id: 4, name: "Next Feminino", category: "Óculos de Sol", price: 399.00, image: nextfeminino },
];


export default products;
