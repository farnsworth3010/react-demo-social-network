import Button from "@mui/material/Button";
import { useState } from "react";
import { createData } from "../../utils/createData";
import { NewProduct, Product } from "../../interfaces/product";
import { ProductTable } from "./ProductTable/ProductTable";
import { AddProductModal } from "../../components/modals/AddProduct/AddProductModal";
import { EditProductModal } from "../../components/modals/EditProduct/EditProductModal";
import s from "./Calc.module.scss";
import { mockProducts } from "../../utils/constants/mockProducts";

export const Calc = () => {
  const [data, setData] = useState<Product[]>(mockProducts);

  const [editData, setEditData] = useState<Product>({
    id: 0,
    name: "",
    price: 0,
    amount: 0,
  });

  const [addOpen, setAddOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);

  const handleAddOpen = () => {
    setAddOpen(true);
  };
  const handleEditOpen = ({ id, name, price, amount }: Product) => {
    setEditData({ id, name, price, amount });
    setEditOpen(true);
  };

  const handleAddClose = () => setAddOpen(false);
  const handleEditClose = () => setEditOpen(false);

  const createProduct = ({ name, price, amount }: NewProduct) => {
    setData([...data, createData(name, price, amount)]);
  };

  const editProduct = ({ id, name, price, amount }: Product) => {
    setData(
      data.map((x) => {
        if (x.id === id) {
          return { id, name, price, amount };
        }
        return x;
      })
    );
  };

  const countTotalPrice = () => {
    return data.reduce((acc, val) => acc + val.price * val.amount, 0);
  };

  const handleDelete = (id: number) => {
    setData(data.filter((x) => x.id !== id));
  };

  return (
    <>
      <div className="table-header">
        <h1>Product Calculator</h1>
        <h3 className={s.total_price}>
          Your products' price: ${countTotalPrice()}
        </h3>
        <div className="table-action">
          <Button
            variant="contained"
            className={s.add_product}
            onClick={handleAddOpen}
          >
            Add product
          </Button>
        </div>
      </div>
      <div className="table-content">
        <ProductTable edit={handleEditOpen} remove={handleDelete} data={data} />
      </div>
      <div className="modals">
        <AddProductModal
          open={addOpen}
          close={handleAddClose}
          create={createProduct}
        />
        <EditProductModal
          open={editOpen}
          edit={editProduct}
          data={editData}
          close={handleEditClose}
        />
      </div>
    </>
  );
};
