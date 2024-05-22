"use client";
import Link from "next/link";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { AuthForm } from "../AuthForm/AuthForm";
import { usePathname } from "next/navigation";

import { useStore } from "@/app/store/app-store";

import Styles from "./Header.module.css";

export const Header = () => {
  const store = useStore();

  const pathname = usePathname();
  const authContext = useStore();

  const handleLogout = () => {
    authContext.logout();
  };

  return (
    <header className={Styles["header"]}>
      <Link href="/" className={Styles["logo"]}>
        <img
          className={Styles["logo__image"]}
          src="/images/logo.svg"
          alt="Логотип Pindie"
        />
      </Link>
      <nav className={Styles["menu"]}>
        <ul className={Styles["menu__list"]}>
          <li className={Styles["menu__item"]}>
            <Link
              href="/new"
              className={`${Styles["menu__link"]} ${
                pathname === "/new" ? Styles["menu__link_active"] : ""
              }`}
            >
              Новинки
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/populars"
              className={`${Styles["menu__link"]} ${
                pathname === "/populars" ? Styles["menu__link_active"] : ""
              }`}
            >
              Популярные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/shooters"
              className={`${Styles["menu__link"]} ${
                pathname === "/shooters" ? Styles["menu__link_active"] : ""
              }`}
            >
              Шутеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/runners"
              className={`${Styles["menu__link"]} ${
                pathname === "/runners" ? Styles["menu__link_active"] : ""
              }`}
            >
              Раннеры
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/pixel-games"
              className={`${Styles["menu__link"]} ${
                pathname === "/pixel-games" ? Styles["menu__link_active"] : ""
              }`}
            >
              Пиксельные
            </Link>
          </li>
          <li className={Styles["menu__item"]}>
            <Link
              href="/TDS"
              className={`${Styles["menu__link"]} ${
                pathname === "/TDS" ? Styles["menu__link_active"] : ""
              }`}
            >
              TDS
            </Link>
          </li>
        </ul>
        <div className={Styles["auth"]}>
          {authContext.isAuth ? (
            <button className={Styles["auth__button"]} onClick={handleLogout}>
              Выйти
            </button>
          ) : (
            <button
              className={Styles["auth__button"]}
              onClick={store.openPopup}
            >
              Войти
            </button>
          )}
        </div>
      </nav>
      <Overlay isOpened={store.popupIsOpened} onClose={store.closePopup} />
      <Popup isOpened={store.popupIsOpened} onClose={store.closePopup}>
        <AuthForm close={store.closePopup} />
      </Popup>
    </header>
  );
};
