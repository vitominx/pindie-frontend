"use client";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { useGetDataByCategory } from "../api/api-hooks";

export default function Shooters() {
  const shooterGames = useGetDataByCategory(endpoints.games, "shooter");

  return (
    <main className={"main-inner"}>
      {shooterGames ? (
        <CardsListSection id="shooter" title="Шутеры" data={shooterGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
