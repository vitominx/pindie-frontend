"use client";
import { endpoints } from "@/app/api/config";
import { getNormalizedGameDataById } from "@/app/api/api-utils";
import { isResponseOk } from "@/app/api/api-utils";

import { GameNotFound } from "@/app/components/GameNotFound/GameNotFound";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { useState, useEffect } from "react";
import { vote } from "@/app/api/api-utils";
import { checkIfUserVoted } from "@/app/api/api-utils";

import { useStore } from "@/app/store/app-store";

import Styles from "./Game.module.css";

export default function GamePage(props) {
  const [game, setGame] = useState(null);
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [isVoted, setIsVoted] = useState(false);

  const store = useStore();

  const handleVote = async () => {
    const jwt = store.token;
    let usersIdArray = game.users.length
      ? game.users.map((user) => user.id)
      : [];
    usersIdArray.push(store.user.id);

    const response = await vote(
      `${endpoints.games}/${game.id}`,
      jwt,
      usersIdArray
    );

    if (isResponseOk(response)) {
      setGame(() => {
        return {
          ...game,
          users: [...game.users, store.user],
        };
      });
      setIsVoted(true);
    }
  };

  useEffect(() => {
    async function fetchData() {
      setPreloaderVisible(true);
      const game = await getNormalizedGameDataById(
        endpoints.games,
        props.params.id
      );
      isResponseOk(game) ? setGame(game) : setGame(null);
      setPreloaderVisible(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    store.user && game
      ? setIsVoted(checkIfUserVoted(game, store.user.id))
      : setIsVoted(false);
  }, [store.user, game]);

  return (
    <main className="main">
      {game ? (
        <>
          <section className={Styles["game"]}>
            <iframe className={Styles["game__iframe"]} src={game.link}></iframe>
          </section>
          <section className={Styles["about"]}>
            <h2 className={Styles["about__title"]}>{game.title}</h2>
            <div className={Styles["about__content"]}>
              <p className={Styles["about__description"]}>{game.description}</p>
              <div className={Styles["about__author"]}>
                <p>
                  Автор:{" "}
                  <span className={Styles["about__accent"]}>
                    {game.developer}
                  </span>
                </p>
              </div>
            </div>
            <div className={Styles["about__vote"]}>
              <p className={Styles["about__vote-amount"]}>
                За игру уже проголосовали:{" "}
                <span className={Styles["about__accent"]}>
                  {game.users.length}
                </span>
              </p>
              <button
                disabled={!store.isAuth || isVoted}
                className={`button ${Styles["about__vote-button"]}`}
                onClick={handleVote}
              >
                {isVoted ? "Голос учтён" : "Голосовать"}
              </button>
            </div>
          </section>
        </>
      ) : preloaderVisible ? (
        <Preloader />
      ) : (
        <GameNotFound />
      )}
    </main>
  );
}
