import useFilterOrders from "@/hooks/table/useFilterOrders";
import { selectFilterDate, selectFilterName, selectFilterStatus, selectOpenFilters, selectRadio } from "@/redux/slices/filterSlice";
import { useAppSelector } from "@/redux/store";
import { useEffect } from "react";
import FilterByDate from "./filterByDate";
import FilterByName from "./filterByName";
import FilterByStatus from "./FilterByStatus";
import s from "./Filters.module.scss";


export default function MainFilterBlock() {

  const {filterOrders} = useFilterOrders()
  const openFilter = useAppSelector(selectOpenFilters)

  const valueRadio = useAppSelector(selectRadio);
  const filterName = useAppSelector(selectFilterName);
  const filterDate = useAppSelector(selectFilterDate);
  const filterStatus = useAppSelector(selectFilterStatus);

  useEffect(()=> {
    filterOrders()
  }, [filterName,filterDate,filterStatus,valueRadio])

  return (
    <div className={`${s.filters} ${openFilter && s.filters_active}`}>
      <div className={s.filters_block}>
        <FilterByName/>
        <FilterByDate/>
        <FilterByStatus/>
      </div>
    </div>
  );
}
