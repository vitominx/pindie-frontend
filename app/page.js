"use client";

import { useGetDataByCategory } from "./api/api-hooks";
import { endpoints } from "./api/config";
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { Preloader } from "./components/Preloader/Preloader";
import { CardsListSection } from "./components/CardsListSection/CardsListSection";

export default function Home() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  const newGames = useGetDataByCategory(endpoints.games, "new");
  return (
    <main>
      <Banner />

      {popularGames && newGames ? (
        <>
          <CardsListSection
            id="popular"
            title="Популярные"
            data={popularGames}
            type="slider"
          />

          <CardsListSection
            id="new"
            title="Новинки"
            data={newGames}
            type="slider"
          />
        </>
      ) : (
        <Preloader />
      )}

      <Promo />
    </main>
  );
}

// я посмотрела разбор, и у меня изначально было так же, но была ошибка props.data.map not found
// (она возникала и раньше в других файлах и периодически пропадала) в файле CardsSlider, поэтому вот так пришлось переделать немножко
