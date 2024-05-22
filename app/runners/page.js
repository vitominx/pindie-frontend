"use client";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { useGetDataByCategory } from "../api/api-hooks";

export default function Runners() {
  const runnerGames = useGetDataByCategory(endpoints.games, "runner");

  return (
    <main className={"main-inner"}>
      {runnerGames ? (
        <CardsListSection id="runner" title="Раннеры" data={runnerGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}
