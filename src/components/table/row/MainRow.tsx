"use client";
import {useState} from 'react'
import TopRow from './TopRow';
import DropdownRow from './DropdownRow';
import { IAllOrders } from '@/types/products.types';

export default function MainRow({order}: { order: IAllOrders }) {

    const [open, setOpen] = useState(false);

  return (
    <>
        <TopRow order={order} open={open} setOpen={setOpen}/>
        <DropdownRow order={order} open={open}/>
    </>
  );
}
