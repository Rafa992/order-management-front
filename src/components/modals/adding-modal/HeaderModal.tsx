import {
    AppBar as MuiAppBar,
    Toolbar,
    Typography,
    IconButton,
  } from "@mui/material";
  import {
    Menu as MenuIcon,
  } from "@mui/icons-material";
import useOpenList from '@/hooks/modal/useOpenList';
import { useAppSelector } from '@/redux/store';
import { selectTemporaryProducts } from '@/redux/slices/productsSlice';
import s from './Modal.module.scss'

export default function HeaderModal() {

    const temporaryProducts = useAppSelector(selectTemporaryProducts)

    const {
      drawerWidth,
      openList,
      handleDrawerOpen,
    } = useOpenList();

  return (
    <MuiAppBar
        position="fixed"
        className={s.headerModal_header}
        sx={{
          ...(openList && { width: `calc(100% - ${drawerWidth})` }),
        }}
      >
        <Toolbar className={s.headerModal_toolbar}>
          <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            edge="start"
            className={s.headerModal_iconButton}
            sx={{ display: openList ? "none" : "block" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{color: 'var(--whiteTextColor)'}}>
            {temporaryProducts.length > 0 ? 'Добавить ещё' : 'Список продуктов '} 
          </Typography>
        </Toolbar>
      </MuiAppBar>
  )
}
