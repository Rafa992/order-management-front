"use client";
import {
  Box,
  CssBaseline,
} from "@mui/material";
import BodyModal from "./BodyModal";
import HeaderModal from "./HeaderModal";
import LeftModal from "./LeftModal";
import s from './Modal.module.scss'

export default function MainModal() {

  return (
    <Box className={s.mainModal}>
      <CssBaseline />
      <LeftModal/>
      <HeaderModal/>
      <BodyModal/>
    </Box>
  );
}
