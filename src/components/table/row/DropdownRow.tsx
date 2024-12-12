"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { IAllOrders } from "@/types/products.types";
import s from '../Table.module.scss';
import { selectUser } from "@/redux/slices/userSlice";
import { useAppSelector } from "@/redux/store";

interface IProps {
    order: IAllOrders, 
    open: boolean
}

export default function DropdownRow({order, open}: IProps) {
  const user = useAppSelector(selectUser);

  return (
    <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0, background: user.id === order.userId ? "transparent" : "var(--disabledRowBg)" }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div" className={s.table_title}>
                  Адрес доставки - <span className={s.table_comment}>{order.address}</span>
                </Typography>
                <Typography variant="h6" gutterBottom component="div" className={s.table_title}>
                  Комментарий - {
                  order.comment 
                    ? (<span className={s.table_comment}>{order.comment}</span>)  
                    : (<span className={s.table_comment}>нет комментария.</span>)
                  } 
                </Typography>
                <Typography variant="h6" gutterBottom component="div" className={s.table_title}>
                  Количество товаров - <span className={s.table_comment}>{order.totalAmount} шт.</span>
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell className={s.table_title}>Наименование</TableCell>
                      <TableCell align="right" className={s.table_title}>Количество</TableCell>
                      <TableCell align="right" className={s.table_title}>Стоимость за штуку</TableCell>
                      <TableCell align="right"className={s.table_title}>Общая стоимость</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {order.products.map((product) => (
                      <TableRow key={product.title} className={s.table_dropTexts}>
                        <TableCell>{product.title}</TableCell>
                        <TableCell align="right">{product.amount} шт.</TableCell>
                        <TableCell align="right">{product.price} сум</TableCell>
                        <TableCell align="right">{product.newPrice} сум</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
  )
}
