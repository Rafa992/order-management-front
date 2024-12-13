"use client"
import { setPaletteModal } from "@/redux/slices/modalSlice";
import { useAppDispatch } from "@/redux/store";
import { removeFromStorage } from "@/services/auth-token.service";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from "@mui/material";
import s from "./Header.module.scss";
import ThemeSwitch from "./ThemeSwitch";
import { useRouter } from "next/navigation";
import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import TuneIcon from '@mui/icons-material/Tune';
import { useState } from "react";

export default function Header() {

  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const [settings, setSettings] = useState(false);

  const logout = () => {
    console.log('сработал logout', DASHBOARD_PAGES.HOME);
    
    push(DASHBOARD_PAGES.HOME);
    removeFromStorage();
  }

  const openSetting = () => {
    setSettings(true);
  }

  return (
    <header className={s.header}>
      <div className={`${s.header_container} container`}>
        <h1 className={s.header_title}>Таблица заказов</h1>
        {settings && (
          <div className={s.header_bg_close} onClick={() => setSettings(false)}></div>
        )}
        <IconButton className={s.header_settings} onClick={() => openSetting()}>
          <TuneIcon className={s.header_buttons_icon}/>
        </IconButton>
        <div className={`${s.header_buttons} ${settings && s.header_buttons_active}`}>
          <ThemeSwitch/>
          <IconButton title="Изменить основной цвет" onClick={()=>dispatch(setPaletteModal(true))}>
            <ColorLensIcon className={s.header_buttons_icon}/>
          </IconButton>
          <IconButton title="Выйти из аккаунта" onClick={logout}>
            <LogoutIcon className={s.header_buttons_icon}/>
          </IconButton>
        </div>
      </div>
    </header>
  );
}
