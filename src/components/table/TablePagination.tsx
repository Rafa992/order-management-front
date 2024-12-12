"use client";
import {useState} from 'react'
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableHeaderComponent from "./TableHeaderComponent";
import MainRow from "./row/MainRow";
import { useAppSelector } from "@/redux/store";
import { selectFilteredOrders } from "@/redux/slices/orderSlice";
import s from './Table.module.scss';

export default function ColumnGroupingTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filteredOrders = useAppSelector(selectFilteredOrders)

  return (
    <Paper sx={{ width: "100%", overflow: 'hidden', background: 'transparent' }} className={s.table}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeaderComponent/>
          <TableBody>
            {filteredOrders && filteredOrders
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((order) => (
              <MainRow key={order.id} order={order}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{color: "var(--baseColorText)", fontWeight: '700'}}
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={filteredOrders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

