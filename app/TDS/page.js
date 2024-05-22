"use client";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { useGetDataByCategory } from "../api/api-hooks";

export default function TDS() {
  const tdsGames = useGetDataByCategory(endpoints.games, "TDS");

  return (
    <main className={"main-inner"}>
      {tdsGames ? (
        <CardsListSection id="tds" title="TDS" data={tdsGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
