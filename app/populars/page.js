"use client";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { useGetDataByCategory } from "../api/api-hooks";

export default function Popular() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");

  return (
    <main className={"main-inner"}>
      {popularGames ? (
        <CardsListSection id="popular" title="Популярное" data={popularGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
