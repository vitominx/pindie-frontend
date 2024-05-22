import Link from "next/link";
import { Card } from "../Card/Card";
import { data } from "@/app/data/data";

import Styles from "./CardsListSection.module.css";

export const CardsList = (props) => {
  return (
    <ul className={Styles["cards-list"]}>
      {data.map((item) => {
        return (
          <li className={Styles["cards-list__item"]} key={item.id}>
            <Link
              href={`/games/${item.id}`}
              className={Styles["card-list__link"]}
            >
              <Card {...item} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
