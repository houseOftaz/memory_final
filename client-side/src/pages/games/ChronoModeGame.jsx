import { useState, useEffect, useContext } from "react";
import ChronoCard from "./cards/ChronoCard";
import EndGameAlert from "./EndGameAlert";
import { CounterContext } from "../../context/CounterContextProvider";
import Chrono from "./lib/Chrono";

const ChronoModeGame = ({
  timeLimit,
  setDisplayChooseChronoForm,
  themeValue,
}) => {
  const [cards, setCards] = useState([]);
  const [matchedPair, setMatchedPair] = useState([]);
  const [nbrCoups, setNbrCoups] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isRestricted, setIsRestricted] = useState(false);
  const [isWon, setIsWon] = useState(false);

  const { count, increment, reset } = useContext(CounterContext);

  useEffect(() => {
    setIsGameOver(false);
    setIsWon(false);

    const fetchCards = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BASE_URL_BACKEND
          }/server-side/game/themes/${themeValue}`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("HTTP error");
        }

        const fetchCards = await response.json();
        const cardValues = Array.from(
          { length: 3 },
          (_, i) => fetchCards[i].alt
        );

        const shuffledCards = [...cardValues, ...cardValues]
          .sort(() => Math.random() - 0.5)
          .map((value, index) => ({ id: index, value, isFlipped: false }));
        setCards(shuffledCards);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCards();
  }, [themeValue]);

  const handleClick = (id) => {
    if (isRestricted || isGameOver) return;
    increment();

    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        card.isFlipped = !card.isFlipped;
      }
      return card;
    });
    setCards(updatedCards);

    const flipped = updatedCards.filter((card) => {
      return (
        card.isFlipped &&
        !matchedPair.some((matchedCard) => matchedCard.id === card.id)
      );
    });
    if (flipped.length === 2) {
      setNbrCoups((prev) => prev + 1);
      if (flipped[0].value === flipped[1].value) {
        setMatchedPair((prev) => [...prev, ...flipped]);
      } else {
        setIsRestricted(true);
        setTimeout(() => {
          setIsRestricted(false);
          setCards((prevCards) =>
            prevCards.map((card) => {
              if (
                card.isFlipped &&
                !matchedPair.some((matchedCard) => matchedCard.id === card.id)
              ) {
                card.isFlipped = false;
              }
              return card;
            })
          );
        }, 1500);
      }
    }
  };

  useEffect(() => {
    if (matchedPair.length === cards.length && cards.length > 0) {
      setIsGameOver(true);
      setIsWon(true);
    }
  }, [matchedPair, cards.length]);

  const handleTimeUp = () => {
    setIsGameOver(true);
    setIsRestricted(true);
  };

  const handleRestart = () => {
    setIsGameOver(false);
    setCards([]);
    setMatchedPair([]);
    setNbrCoups(0);
    setIsRestricted(false);
    setDisplayChooseChronoForm(true);
    reset();
  };
  console.log("1", handleRestart);
  return (
    <>
      {!isGameOver && (
        <Chrono initialTime={timeLimit} handleEndGame={handleTimeUp} />
      )}
      <h2 className="themes-mode-title">{timeLimit} seconds</h2>
      <section className="themes-container-cards">
        {cards.map((card) => (
          <ChronoCard
            key={card.id}
            value={card.value}
            onClick={() => handleClick(card.id)}
            isFlipped={card.isFlipped}
            themeValue={themeValue}
          />
        ))}
      </section>
      <p>{count} clicks</p>
      <p>{nbrCoups} coups</p>
      {isGameOver && (
        <EndGameAlert
          handleRestart={handleRestart}
          isWon={isWon}
          nbrCoups={nbrCoups}
        />
      )}
    </>
  );
};

export default ChronoModeGame;
