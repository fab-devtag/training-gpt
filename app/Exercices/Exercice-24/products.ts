export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface ProductInCart extends Product {
  quantity: number;
}

export const products: Product[] = [
  { id: "1", name: "Chaussures", price: 59.99 },
  { id: "2", name: "T-shirt", price: 19.99 },
  { id: "3", name: "Pantalon", price: 39.99 },
  { id: "4", name: "Casquette", price: 14.99 },
  { id: "5", name: "Veste", price: 89.99 },
];
