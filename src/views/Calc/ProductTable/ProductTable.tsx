import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Product } from "../../../interfaces/product";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import s from "./ProductTable.module.scss";

interface Props {
  data: Product[];
  edit: (product: Product) => void;
  remove: (id: number) => void;
}

export const ProductTable = (props: Props) => {
  const { data, edit, remove } = props;
  return (
    <TableContainer component={Paper}>
      <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length ? (
            data.map(({ id, name, price, amount }: Product) => (
              <TableRow
                key={name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onDoubleClick={() =>
                  edit({
                    id,
                    name,
                    price,
                    amount,
                  })
                }
              >
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="right">${price || 0}</TableCell>
                <TableCell align="right">{amount} pc.</TableCell>
                <TableCell align="right">
                  <EditIcon
                    className={s.action}
                    onClick={() =>
                      edit({
                        id,
                        name,
                        price,
                        amount,
                      })
                    }
                  />
                  <DeleteIcon
                    className={s.action}
                    onClick={() => remove(id)}
                    sx={{ color: "#fc7268" }}
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <p className={s.empty}>Empty</p>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
