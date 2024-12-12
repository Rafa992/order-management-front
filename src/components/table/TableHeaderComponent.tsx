"use client";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { tableHeader } from "../data/table";
import s from './Table.module.scss';

export default function TableHeaderComponent() {
  return (
    <TableHead>
      <TableRow>
        {tableHeader.map((item) => (
          <TableCell
            key={item.id}
            className={s.table_header}
            align={item.position}
          >
            {item.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
