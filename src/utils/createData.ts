import { Product } from "../interfaces/product";

let id = 0;
export const createData = (
  name: string,
  price: number,
  amount: number
): Product => {
  id++;
  return { id, name, price, amount };
};
