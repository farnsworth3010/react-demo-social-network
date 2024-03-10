import { createData } from "../createData";
import { Product } from "./../../interfaces/product";

export const mockProducts: Product[] = [
  createData("Frozen yoghurt", 10, 5),
  createData("Chocolate ice cream", 8, 3),
  createData("Vanilla ice cream", 12, 7),
  createData("Strawberry sorbet", 6, 2),
  createData("Mint chocolate chip ice cream", 9, 4),
  createData("Blueberry frozen yoghurt", 11, 6),
  createData("Cookies and cream ice cream", 7, 3),
];
