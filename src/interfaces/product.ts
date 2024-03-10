export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}

export type NewProduct = Omit<Product, "id">;
