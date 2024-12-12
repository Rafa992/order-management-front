"use client";
import {
  Drawer,
  Divider,
} from "@mui/material";
import ListLeftModal from "./ListLeftModal";
import TopLeftModal from "./TopLeftModal";
import useOpenList from "@/hooks/modal/useOpenList";
import s from './Modal.module.scss'

export default function LeftModal() {

    const {
      openList,
    } = useOpenList();

  return (
    <Drawer
        variant="persistent"
        anchor="left"
        open={openList}
        className={s.leftModal}
        sx={{
          '& .MuiPaper-root': {background: "var(--background)"},
      }}
      >
        <TopLeftModal/>
        <Divider/>
        <ListLeftModal />
      </Drawer>
  )
}
