import { TableCell } from "@mui/material";
import { IAllOrders } from "@/types/products.types";
import s from "../Table.module.scss";
import useCreateDate from "@/hooks/table/useCreateDate";

export default function DateCell({ order }: { order: IAllOrders }) {

  const {
    hoursCreated,
    minutesCreated,
    hoursUpdate,
    minutesUpdate,
  } = useCreateDate(order);

  return (
    <TableCell align="right">
      <div className={s.table_rowBlock}>
        <div className={s.table_rowDate}>
          <span className={s.table_rowDate_title}>Создано</span>
          <div className={s.table_rowDate_date}>
            <span>{order.createdAt.split("T")[0]}</span>
            <p>
              <span>
                {hoursCreated}
              </span>
              :
              <span>
                {minutesCreated}
              </span>
            </p>
          </div>
        </div>
        {order.createdAt !== order.updatedAt && (
          <div className={s.table_rowDate}>
            <span className={s.table_rowDate_title}>Обновлено</span>
            <div className={s.table_rowDate_date}>
              <span>{order.updatedAt.split("T")[0]}</span>
              <p>
                <span>
                  {hoursUpdate}
                </span>
                :
                <span>
                  {minutesUpdate}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </TableCell>
  );
}
